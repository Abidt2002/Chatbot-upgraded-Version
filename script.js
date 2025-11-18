// ---------------- CONFIG ----------------
const MODEL = "gpt-4o-mini";
let chatHistory = [];
let websiteChunks = [];
let websiteEmbeddings = [];
const CHUNK_SIZE = 500;

// ---------------- DOM ----------------
const chatboxEl = () => document.getElementById("chatbox");

// ---------------- INIT ----------------
async function init(){
  const data = await fetch("websiteText.json").then(r=>r.json());
  websiteChunks = chunkText(data.text);
  await precomputeEmbeddings();
  renderSuggestions();
  appendBubble("bot","Hello 👋 I'm Devbay AI Assistant. Ask about Devbay or anything else.");
}
init();

// ---------------- UTILITIES ----------------
function formatTime(d=new Date()){return d.toISOString();}
function appendBubble(role,text,typing=false){
  const node = document.createElement("div");
  node.className = "bubble "+role;
  if(typing){node.innerHTML=`<span class="typing"><span class="dot"></span><span class="dot"></span><span class="dot"></span></span>`;}
  else{node.textContent=text;}
  chatboxEl().appendChild(node);
  chatboxEl().scrollTop = chatboxEl().scrollHeight;
  return node;
}

// ---------------- DARK MODE ----------------
function toggleDark(){const dark=document.documentElement.hasAttribute("data-theme");if(dark){document.documentElement.removeAttribute("data-theme");}else{document.documentElement.setAttribute("data-theme","dark");}}

// ---------------- CHAT ----------------
async function onSend(){
  const input = document.getElementById("userInput");
  const text = input.value.trim(); if(!text) return; input.value="";
  appendBubble("user",text);
  chatHistory.push({role:"user",text,time:formatTime()});
  await askChatbot(text);
}

async function askChatbot(question){
  // classify if question related
  const detectPrompt = `You are a classifier. Does this question relate to the Devbay website? Answer yes or no.
Website content: ${websiteChunks.join(" ")}
Question: "${question}"`;
  let cls="no";
  try{cls=await callOpenAI(detectPrompt);}catch(e){cls="no";}
  cls=cls.trim().toLowerCase().startsWith("y")?"yes":"no";

  if(cls==="yes"){
    const chunks = await getRelevantChunks(question,3);
    const prompt=`You are Devbay AI Assistant. Answer using ONLY this content:
${chunks.join("\n\n")}
Question: ${question}
Answer concisely:`;
    await streamingReply(prompt);
  }else{
    const prompt=`You are a helpful AI assistant. Answer politely.
Question: ${question}`;
    await streamingReply(prompt);
  }
}

// ---------------- RAG ----------------
function chunkText(text){let chunks=[];for(let i=0;i<text.length;i+=CHUNK_SIZE){chunks.push(text.slice(i,i+CHUNK_SIZE));}return chunks;}
async function precomputeEmbeddings(){
  websiteEmbeddings=[];
  for(const c of websiteChunks){
    const e=await getEmbedding(c);
    websiteEmbeddings.push({text:c,embedding:e});
  }
}
async function getEmbedding(text){
  const res = await fetch("/.netlify/functions/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:`Generate embedding for: ${text}`})});
  const data = await res.json();
  return data.data[0].embedding;
}
function cosineSimilarity(a,b){let sum=0,nA=0,nB=0;for(let i=0;i<a.length;i++){sum+=a[i]*b[i];nA+=a[i]*a[i];nB+=b[i]*b[i];}return sum/(Math.sqrt(nA)*Math.sqrt(nB));}
async function getRelevantChunks(question,topK=3){
  const qEmb = await getEmbedding(question);
  const scored = websiteEmbeddings.map(e=>({text:e.text,score:cosineSimilarity(qEmb,e.embedding)}));
  scored.sort((a,b)=>b.score-a.score);
  return scored.slice(0,topK).map(s=>s.text);
}

// ---------------- NETLIFY FUNCTION CALL ----------------
async function callOpenAI(prompt){
  const res = await fetch("/.netlify/functions/chat",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({prompt})
  });
  const data = await res.json();
  return data.choices[0].message.content;
}

// ---------------- TYPING ----------------
async function streamingReply(prompt){
  const node = appendBubble("bot","",true);
  try{
    const text = await callOpenAI(prompt);
    node.innerHTML="";
    let i=0;
    const speed=18;
    return new Promise(resolve=>{
      const ticker=setInterval(()=>{
        i+=1; node.textContent=text.slice(0,i); chatboxEl().scrollTop=chatboxEl().scrollHeight;
        if(i>=text.length){clearInterval(ticker);chatHistory.push({role:"bot",text,time:formatTime()});resolve(text);}
      },speed);
    });
  }catch(e){node.textContent="⚠️ Error contacting API";}
}

// ---------------- AUTO-SUGGESTIONS ----------------
function extractSuggestions(text,n=6){
  const sentences=text.split(/(?<=[.?!])\s+/).filter(Boolean);
  const q=sentences.filter(s=>/^(what|how|why|where|when|who)/i.test(s));
  return q.slice(0,n);
}
function renderSuggestions(){
  const container = document.getElementById("suggestions");
  container.innerHTML="";
  extractSuggestions(websiteChunks.join(" ")).forEach(s=>{
    const b=document.createElement("button"); b.textContent=s.length>60?s.slice(0,60)+"...":s;
    b.title=s; b.onclick=()=>{document.getElementById("userInput").value=s; onSend();}
    container.appendChild(b);
  });
}

// ---------------- CSV EXPORT ----------------
function exportCSV(){
  let csv="speaker,timestamp,message\n";
  chatHistory.forEach(m=>{csv+=`${m.role},${m.time},"${(m.text||"").replace(/"/g,'""')}"\n`;});
  const blob = new Blob([csv],{type:"text/csv;charset=utf-8;"});
  const url = URL.createObjectURL(blob);
  const a=document.createElement("a");a.href=url;a.download="devbay_chat_history.csv";document.body.appendChild(a);a.click();a.remove();URL.revokeObjectURL(url);
}

// ---------------- TOGGLE CHAT ----------------
function toggleChat(){document.getElementById("chatbot-window").classList.toggle("hidden");}

