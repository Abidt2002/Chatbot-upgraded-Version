// ---------------- CONFIG ----------------
const API_KEY = ""; // <--- REPLACE (keep repo private)
const MODEL = "gpt-4o-mini";           // or whichever model you use

// Paste full website text (extracted) here:
const websiteText = `
"Devbay – Best Custom Software Development Agency
Providing Latest IT Solutions for Small to Large Enterprises
Discover Devbay 
Empowering Through Innovation and Passion 
Devbay was founded with a vision to build revolutionary technology applications capable of significantly enhancing the efficiency through automation and foster seamless customer engagement.
Fulfillment Guaranteed 
Technology Partner 
Strategy and Planning
Development and Deployment
LATEST TECHNOLOGIES 
Our Company Delivers Comprehensive IT Solutions and Services 
Software Development 
Excel in building robust and scalable software solutions. From customized enterprise software to comprehensive management systems
Website Development 
Creating eye-catching and responsive websites that leave a lasting impression on your visitors.Whether it's an e-commerce website,corporate, or a blog,
Mobile APP Development 
Our talented Mobile App Developers are proficient in crafting cutting-edge mobile applications for Android and iOS platforms.
Staff Augmentation 
Staff Augmentation is a flexible outsourcing strategy that allows companies to hire tech talent globally and manage their augmented team directly. 
Financial Solutions 
Financial Solutions encompass a diverse array of services and strategies tailored to meet the complex needs of individuals, businesses, and institutions
Blockchain 
Blockchain Expertise empowers businesses to harness the potential of decentralized technologies for secure, transparent, and efficient operations. 
Cyber Security 
Cybersecurity services encompass a range of strategies, practices, and technologies designed to safeguard digital systems.
Data Analytics 
Collection, processing, analysis, and interpretation of large volumes of data to extract valuable insights, patterns, trends, and actionable information. 
Search Engine Optimization 
Use technical knowledge and strategies to enhance a client's website, ensuring that it aligns with search engine algorithms and user expectations.
Schedule Your Appointment 
Book a Free 30 Minute Consultancy Session with our Technology Architect
1 + 
Senior Development 
Team Globally
1 + 
Technology
Partnerships
CALL US 24/7 
+1 786 936 0476
OUR WORK 
Some Of Our Projects 
Working Process 
Our Client-Centric Approach: Navigating the Journey Together 
Discovery & Understanding 
In-depth discussions and analyses to comprehend your business goals, challenges, and technological needs. 
Strategic Planning 
Creating the technology architecture to outline the project scope, milestones, and deliverables, and serving as the foundation. 
Design and Prototype 
Focusing on User Experience (UX) and User Interface (UI) design, ensuring an intuitive and engaging user interface ... 
Development and Coding 
Leveraging cutting-edge technologies to build a robust, scalable, and secure IT solution. Regular progress updates. 
Testing and Quality Assurance 
Our dedicated QA team conducts rigorous testing to identify and rectify any bugs or issues. We perform functional, performance, security, and usability testing to ensure that the IT solution functions seamlessly across various platforms and devices before launch. 
Deployment and Launch 
Once the solution passes all quality checks and receives your approval, we proceed with deployment. We handle the technical aspects of the launch, ensuring a smooth transition from development to production. Our support team is readily available to address any concerns during this phase. 
Post-Launch Support 
We provide comprehensive post-launch support, addressing any issues promptly. Additionally, we continuously monitor the solution’s performance and user feedback, making necessary optimizations and updates to enhance its functionality and user experience. 
On the Hunt for Outstanding IT Solutions? 
TESTIMONIALS 
Client Feedback: Hear Directly from Our Customers 
Devbay Technologies delivers exceptional IT solutions, consistently exceeding our expectations with their expertise and support.
Dusty A. Healey 
CEO, Oktagon
Our top choice for IT services, Devbay Technologies' forward-thinking approach and personalized service catalyze business growth.
Sachin Diwar 
VP of Network
We can always count on Devbay Technologies to find innovative solutions to our technical challenges, making them a trusted partner in our success.
Barbara G. Dundas 
President, Principal"
"FAQs – Devbay
Common Queries and Answers
We understand the importance of clarity and transparency at DEVBAY TECHNOLOGIES. Here, you'll find straightforward answers to the questions frequently asked by our clients and partners. Whether you're curious about our app development process, need insights into our cybersecurity measures, or want to understand the deployment protocols, you're in the right place. If you don't find the information you're looking for, don't hesitate to reach out to our dedicated support team
Software Development 
Website Development 
Game Development 
App Development 
Cyber Security 
Deployment Services 
Financial Solutions 
Support Services 
We develop custom software solutions ranging from business management systems and CRM software to inventory management tools and enterprise applications, tailored to meet your unique business needs.
Absolutely. We offer seamless integration services to connect your existing software applications, ensuring smooth data flow and improved efficiency across your organization.
Yes, our team designs software solutions with scalability in mind, allowing your system to grow and adapt as your business expands, without compromising performance.
We use a variety of technologies including Laravel, HTML5, CSS3, Word Press, JavaScript, and popular frameworks such as React, Angular, and Vue.js to create responsive, interactive, and visually appealing websites.
Certainly! We offer website redesign services to enhance user experience, update the design, and implement new features while retaining your brand identity.
Yes, we specialize in developing secure and user-friendly e-commerce websites, integrating payment gateways and advanced features to boost your online business.
Game development includes designing, coding, and creating art and sound for games. It's a process of turning ideas into playable experiences.
Timelines vary based on complexity. Simple games might take a few months, while larger ones can take years to develop.
Games can be made for consoles (like Xbox), computers, mobile devices (iOS, Android), and web browsers. Each platform requires specific development approaches.
We specialize in developing a wide range of mobile apps, including iOS, Android, and Hybrid cross-platform applications tailored to your specific requirements.
Yes, we offer comprehensive support and maintenance services to ensure your app functions smoothly and stays up-to-date with the latest technologies and features.
Absolutely. Our team is experienced in developing responsive apps that work seamlessly across smartphones and tablets, ensuring a consistent user experience.
We provide comprehensive cybersecurity services including vulnerability assessments, penetration testing, network security, data encryption, and security awareness training to safeguard your digital assets.
Absolutely. We assist businesses in understanding and complying with industry-specific regulations, ensuring your cybersecurity measures align with legal standards and best practices.
we provide round-the-clock monitoring and rapid incident response services to detect and mitigate potential threats, ensuring the continuous security of your systems and data.
Our deployment services involve carefully implementing the software, ensuring it's correctly configured, and seamlessly integrating it into your existing systems. We oversee the entire deployment process to minimize disruptions.
Yes, we assist in migrating your data and applications, ensuring a smooth transition to the new system. We conduct thorough testing to guarantee data integrity and minimize downtime.
Absolutely. We specialize in deploying software across various platforms, including cloud-based solutions, on-premise servers, and hybrid environments, ensuring compatibility and optimal performance.
Financial Solutions are personalized strategies and tools crafted to manage and improve financial situations. These can include budgeting, investment planning, and risk management.
They assist in achieving financial goals by offering tailored guidance and resources, making financial management easier and more effective.
Anyone seeking to better manage their finances individuals, businesses, or organizations can benefit from these customizable solutions.
We provide comprehensive support services, including technical assistance, bug fixes, software updates, and performance optimizations. Our support team is available to address any issues and ensure your systems run smoothly.
Yes, we offer round-the-clock support to address your queries and concerns regardless of the time zone. Our dedicated support team ensures timely responses and quick resolutions to keep your operations uninterrupted.
Certainly. We provide training sessions for your staff to ensure they fully understand the software and its features. We also offer ongoing training to keep your team updated with the latest functionalities and best practices."
"Testimonials – Devbay
Dusty A. Healey 
Sales & Marketing
We consider Devbay as our off site IT department and find you and your colleagues always happy to assist with our questions. Fantastic IT support for all business large.
Barbara G. Dundas 
President, Principal
Full-featured and great support for the minor issues I had which were really my not being skilled/experienced enough with modern themes. Support is helping to fix my issues now.
Ann C. Sands 
Business Head
Working with several word press themes and templates the last years, I only can say this is the best in every level. I use it for my company and the reviews that I have already are all excellent."
"Our Story – Devbay
Our Story 
Elevating Businesses with Technology and Expertise 
With over 10+ years of experience in providing IT solutions to companies from wide range of Industries across United States, Canada, United Kingdom, Pakistan & Middle East, we are your perfect Technology Partners that can remotely handle operations for our international partners & clients with complete transparency and benchmark quality.
Our Mission Our Vision Our Value 
Devbay is extremely poised to successfully grow and expand its business as one of the largest technology service provider in a geography of rapidly developing markets.
Devbay was founded with a vision to build revolutionary technology applications capable of significantly enhancing the efficiency through automation and foster seamless customer engagement.
We have only one objective at Devbay that is to ensure our clients mission objectives are achieved with the highest level of capability and assurance, and to keep highest standards of corporate ethics towards everyone we work with.
Exceptional Experience
Elevate your digital ventures with our bespoke technology team.
Leadership 
Passionate Personalities, Versatile Brains 
Arham Hashmi 
Chief Executive Officer
Furqan Mustafa 
Chief Technology Officer
David Fullerton 
Vice President Sales (USA)
Noah Freidman 
Head of Integrations & Plugins
Senior Development
Team Globally
Client Experiences 
Voices of Approval! 
Devbay expertise transformed our IT infrastructure. Their dedication to excellence and prompt support is unparalleled. Highly recommended!"" – 
David Arrowsmith 
Founder, Capital Construction Contracting"
"Contact – Devbay
Get in touch 
Book Free 20-Minute Call With Our Tech Team 
We’re just a click away!
Reach us quickly through our Contact Us page
Head Office Address 
Plot 250, Street 6, I-9/2
Karachi Office Address 
Office 305, 3rd Floor, Plot 9, Block 4, Clifton, Marine Tower
Telephone number 
+1 786 936 0476
+(92) 302 051666
Mail address 
info@devbay.ai
International Office Address 
867 Boylston Street, 5th Floor Boston, MA 02116"
"Services & Solutions – Devbay
Ready-Made 
Solutions
Customer Relationship (CRM) 
Enterprise Resource Planning (ERP) 
Inventory Management System 
Property Management System 
Hospital Management System 
Hair Salon Management System 
School 
Management System 
Learning Management System 
Our Offerings 
We deliver essential services tailored for your needs. 
Software Development 
Excel in building robust and scalable software solutions. From customized enterprise software to comprehensive management systems
Website Development 
Creating eye-catching and responsive websites that leave a lasting impression on your visitors.Whether it's an e-commerce website,corporate, or a blog,
Mobile APP Development 
Our talented Mobile App Developers are proficient in crafting cutting-edge mobile applications for Android and iOS platforms.
Staff Augmentation 
Staff Augmentation is a flexible outsourcing strategy that allows companies to hire tech talent globally and manage their augmented team directly. 
Financial Solutions 
Financial Solutions encompass a diverse array of services and strategies tailored to meet the complex needs of individuals, businesses and institutions
Blockchain 
Blockchain Expertise empowers businesses to harness the potential of decentralized technologies for secure, transparent, and efficient operations. 
Cyber Security 
Cybersecurity services encompass a range of strategies, practices, and technologies designed to safeguard digital systems.
Data Analytics 
Collection, processing, analysis, and interpretation of large volumes of data to extract valuable insights, patterns, trends, and actionable information. 
Search Engine Optimization 
Use technical knowledge and strategies to enhance a client's website, ensuring that it aligns with search engine algorithms and user expectations."
"Portfolio – Devbay
Work Index! 
Few of Our Apps Adored by millions of users! 
We shows only the best websites and portfolios built completely with passion, simplicity & creativity. 
Dialboxx is a highly anticipated localized version of Shopify specifically tailored for the Pakistani market. 
Malfex is a groundbreaking forex trading platform that has revolutionized the industry by offering its users a unique advantage: zero trading fees. 
CSD, the second largest retail store in Pakistan, has taken a significant leap forward in optimizing its business processes with the introduction of an innovative… 
Krptoconnect is an innovative and user-centric application designed to streamline and enhance your cryptocurrency investment journey."
"Software Development – Devbay
Software Development 
Excel in building robust and scalable software solutions. From customized enterprise software to
comprehensive management systems, we leverage the latest technologies to streamline your business processes and boost productivity. Our team is committed to developing software that
aligns perfectly with your organizational goals and empowers your operations.
Python 
Java 
Visual Studio 
C# 
HTML 
CSS 
MySQL 
Java Script 
PHP 
Xcode 
C++ 
Eclipse 
24/7 Customer Support 
Fulfillment Guaranteed 
Premium 
Service"
"Mobile APP Development – Devbay
Mobile APP Development 
Our talented Mobile APP Developers are proficient in crafting cutting-edge mobile applications for
Android and iOS platforms. Whether you need a user-friendly consumer app or a sophisticated
enterprise solution, we have the expertise to turn your ideas into reality. We ensure that your app is
not only visually stunning but also highly functional, delivering an outstanding user experience.
Flutter 
React Native 
Xamarin 
24/7 Customer Support 
Fulfillment Guaranteed 
Premium 
Service"
"Website Development – Devbay
Website Development 
Creating eye-catching and responsive websites that leave a lasting impression on your visitors.
Whether it’s an e-commerce platform, corporate website, or a personal blog, we ensure that your
online presence reflects your brand’s identity and engages your target audience.
HTML/CSS 
MySQL 
PHP 
.NET 
Angular 
Java 
JQuery 
Java Script 
Node.js 
Ruby 
SQLite 
Python 
24/7 Customer Support 
Fulfillment Guaranteed 
Premium 
Service"
"Financial Solutions – Devbay
Financial Solutions 
Financial Solutions encompass a diverse array of services and strategies tailored to meet the complex needs of individuals, businesses, and institutions in managing their finances effectively. These solutions are designed to optimize financial performance, mitigate risks, and facilitate informed decision-making in an ever-evolving economic landscape. From personal financial planning to comprehensive corporate financial management, these solutions leverage expertise, technology, and tailored approaches to empower clients in achieving their fiscal objectives.
Personalized Financial Planning 
Corporate Financial Management 
Technological Integration 
Risk Assessment and Mitigation 
Investment and Asset Management 
Compliance and Regulatory Guidance 
Consultation and Advisory Services 
Evolving Solutions 
24/7 Customer Support 
Fulfillment Guaranteed 
Premium 
Service"
"Staff Augmentation – Devbay
Staff Augmentation 
Staff Augmentation is a flexible outsourcing strategy that allows companies to hire tech talent globally and manage their augmented team directly. It helps organizations quickly scale their workforce, bridge skill gaps, and optimize project delivery without the overhead of full-time hiring.
Talent Sourcing & Onboarding 
Technical Expertise Across Domains 
Flexible Engagement Models 
Seamless Integration 
Cost Efficiency 
Ongoing Support & Management 
24/7 Customer Support 
Fulfillment Guaranteed 
Premium 
Service"
"Blockchain – Devbay
Blockchain 
Blockchain Expertise empowers businesses to harness the potential of decentralized technologies for secure, transparent, and efficient operations. From building smart contracts to creating enterprise-grade blockchain solutions, it ensures innovation while maintaining trust and compliance.
Blockchain Development & Integration 
Smart Contracts 
Tokenization & Digital Assets 
Enterprise Solutions 
Security & Compliance 
Consultation & Strategy 
24/7 Customer Support 
Fulfillment Guaranteed 
Premium 
Service"
"Cyber Security – Devbay
Cyber Security 
Cybersecurity services encompass a range of strategies, practices, and technologies designed to
safeguard digital systems, networks, data, and information from unauthorized access, attacks,
damage, and breaches. These services aim to protect the confidentiality, integrity, and availability
of sensitive information and IT resources.
Firewall Management 
Data Loss Prevention 
Security Auditing 
Threat Intelligence Service 
Vulnerability Assessment and Penetration Testing 
Intrusion Detection and Prevention Systems 
24/7 Customer Support 
Fulfillment Guaranteed 
Premium 
Service"
"Search Engine Optimization (SEO) – Devbay
Search Engine Optimization (SEO) 
Use technical knowledge and strategies to enhance a client’s website, ensuring that it aligns with
search engine algorithms and user expectations. This service aims to improve organic traffic, boost
online visibility, and drive targeted users to the client’s website
Structure & Architecture 
Page Speed Optimization 
Technical On-Page SEO 
URL Optimization 
Mobile 1st Indexing 
Canonicalization 
Robots.txt & XML Sitemaps 
Structured Data Markup 
Crawl Errors & Site Health 
24/7 Customer Support 
Fulfillment Guaranteed 
Premium 
Service"
"KRYPTOCONNECT – Devbay
KRYPTOCONNECT (CRYPTO MANAGEMENT) 
PROJECT ORIGIN: BOSTON, USA
Kryptoconnect is an innovative and user-centric application designed to streamline and enhance your cryptocurrency investment journey. Seamlessly combining advanced portfolio management features with peer-to-peer (P2P) trading capabilities, Krptoconnect empowers users to navigate the dynamic world of cryptocurrencies with confidence and ease. With Krptoconnect’s comprehensive portfolio management tools, you can effortlessly monitor your crypto holdings, track their performance in real-time, and gain valuable insights through intuitive visualizations."
"Data Analytics – Devbay
Data Analytics 
Collection, processing, analysis, and interpretation of large volumes of data to extract valuable
insights, patterns, trends, and actionable information. It leverages various techniques, tools, and
technologies to transform raw data into meaningful insights that can inform business decisions,
optimize processes, and drive innovation.
Real-time Analytics 
Strategy Development 
Consulting 
Data Collection and Integration 
Data Cleansing and Preprocessing 
Business Intelligence (BI) Solutions 
24/7 Customer Support 
Fulfillment Guaranteed 
Premium 
Service"
"CRAFTSCONNECT – Devbay
CRAFTSCONNECT (HOME SERVICES) 
PROJECT ORIGIN: TORONTO, CANADA
Craftsconnect is your ultimate solution for seamless home services in Toronto. With a simple tap, the innovative app connects you directly with trusted and skilled service providers, ensuring that your home projects are handled by professionals who understand your needs. Say goodbye to the hassle of finding reliable experts for your household tasks. Craftsconnect brings the power of convenience to your fingertips. Need a plumber, electrician, painter, or any other home service? The application offers an extensive network of experienced professionals ready to cater to your requirements."
"DIALBOXX – Devbay
DIALBOXX ( AI E-COMMERCE ENABLER ) 
PROJECT ORIGIN: KARACHI, PAKISTAN
Dialboxx is a highly anticipated localized version of Shopify specifically tailored for the Pakistani market. It serves as an all-in-one e-commerce platform that empowers entrepreneurs and businesses to effortlessly set up, manage, and grow their online stores. Dialboxx offers a seamless and user-friendly experience for anyone who wants to launch their own Online E-Commerce Store. From secure payment gateways to customizable storefronts and localized delivery system, Dialboxx aims to revolutionize the way online businesses operate in Pakistan, enabling them to reach a wider audience and thrive in the digital era."
"MALFEX – Devbay
MALFEX (FOREX TRADING PLATFORM) 
PROJECT ORIGIN: DUBAI, UAE
Malfex is a groundbreaking forex trading platform that has revolutionized the industry by offering its users a unique advantage: zero trading fees. By eliminating trading fees, Malfex empowers traders of all levels to execute transactions without worrying about unnecessary costs eating into their profits. With a user friendly interface, cutting-edge technology, and a vast array of currency pairs to choose from, Malfex has quickly become the go-to platform for forex enthusiasts seeking transparency and affordability in their trading journey. Whether you’re a seasoned trader or a novice just entering the market, Malfex provides an exceptional trading experience that puts its users’ financial success at the forefront."
"MR DAZE – Devbay
MR DAZE (ON-DEMAND DELIVERY SERVICE) 
PROJECT ORIGIN: RIYADH, SAUDI ARABIA
Navigate the app with simplicity and speed. Just choose what you need, set your delivery location, and watch as MrDaze takes care of the rest. From perishable goods to fragile packages, MrDaze takes pride in ensuring your deliveries arrive in the same condition they left. MrDaze isn’t just about deliveries – it’s about creating a seamless experience. Track your orders in real-time, receive notifications, and communicate directly with your delivery partner, all within the app. This level of transparency keeps you in the loop every step of the way."
"CSD – Devbay
CSD (ONLINE RETAIL STORE) 
PROJECT ORIGIN: ISLAMABAD/RAWALPINDI, PAKISTAN
CSD, the second largest retail store in Pakistan, has taken a significant leap forward in optimizing its business processes with the introduction of an innovative E-Commerce store and a robust retail management system. This strategic move aims to enhance the customer experience by providing a seamless online shopping platform while streamlining internal operations. The implementation of this cutting-edge technology reflects CSD’s commitment to staying at the forefront of retail innovation, ensuring that customers can access a wide range of products conveniently, while also bolstering the company’s overall performance and growth."

`;

// ---------------- App State ----------------
let chatHistory = []; // {role:'user'|'bot', text, time}
const MAX_SUGGESTIONS = 6;
const chatbox = () => document.getElementById("chatbox");

// ---------------- Utilities ----------------
function formatTime(d = new Date()){
  return d.toISOString();
}
function saveLocal(){
  localStorage.setItem("devbay_chat_history", JSON.stringify(chatHistory));
  // save DOM HTML for faster restore (keeps bubbles + theme)
  localStorage.setItem("devbay_chat_html", document.getElementById("chatbox").innerHTML);
}
function loadLocal(){
  const saved = localStorage.getItem("devbay_chat_history");
  if(saved) chatHistory = JSON.parse(saved);
  const html = localStorage.getItem("devbay_chat_html");
  if(html) document.getElementById("chatbox").innerHTML = html;
}
function appendBubble(role, text, options={typing:false}){
  const node = document.createElement("div");
  node.className = "bubble " + (role === "user" ? "user" : "bot");
  if(options.typing){
    node.innerHTML = `<span class="typing"><span class="dot"></span><span class="dot"></span><span class="dot"></span></span>`;
  } else {
    node.textContent = text;
  }
  chatbox().appendChild(node);
  chatbox().scrollTop = chatbox().scrollHeight;
  return node;
}

// ---------------- Theme & UI ----------------
function toggleChat(){
  const win = document.getElementById("chatbot-window");
  win.classList.toggle("hidden");
}
function setDark(d){
  if(d){ document.documentElement.setAttribute("data-theme","dark"); localStorage.setItem("devbay_dark","1"); }
  else { document.documentElement.removeAttribute("data-theme"); localStorage.removeItem("devbay_dark"); }
}
function toggleDark(){ setDark(!!localStorage.getItem("devbay_dark") ? false : true); }
(function initTheme(){ if(localStorage.getItem("devbay_dark")) setDark(true); })();

// ---------------- Suggestion extraction ----------------
function extractSuggestions(text, n=MAX_SUGGESTIONS){
  try {
    // split into sentences and pick those looking like questions or starts with What/How/Why/Where/When
    const sentences = text.split(/(?<=[.?!])\s+/).map(s=>s.trim()).filter(Boolean);
    const q = sentences.filter(s => s.endsWith("?") || /^(what|how|why|where|when|who)\b/i.test(s));
    const dedup = [...new Set(q)].slice(0,n);
    if(dedup.length) return dedup;
    // fallback: generate small prompts from headings (lines)
    const lines = text.split(/\n/).map(s=>s.trim()).filter(Boolean);
    const candidates = lines.filter(l => l.length<80).slice(0,n);
    return candidates.length? candidates : [
      "What services does Devbay offer?",
      "How can I contact Devbay?",
      "Tell me about Devbay's AI solutions",
      "What is Devbay's tech stack?"
    ];
  } catch(e){
    return [
      "What services does Devbay offer?",
      "How can I contact Devbay?",
      "Tell me about Devbay's AI solutions"
    ];
  }
}
function renderSuggestions(){
  const container = document.getElementById("suggestions");
  container.innerHTML = "";
  const suggestions = extractSuggestions(websiteText);
  suggestions.slice(0,MAX_SUGGESTIONS).forEach(s=>{
    const b = document.createElement("button");
    b.textContent = s.length>60? s.slice(0,60)+"...":s;
    b.title = s;
    b.onclick = ()=> { document.getElementById("userInput").value = s; onSend(); }
    container.appendChild(b);
  });
}
renderSuggestions();

// ---------------- CSV export ----------------
function exportCSV(){
  let csv = "speaker,timestamp,message\n";
  for(const m of chatHistory){
    const clean = (m.text||"").replace(/"/g,'""');
    csv += `${m.role},${m.time},"${clean}"\n`;
  }
  const blob = new Blob([csv], {type:"text/csv;charset=utf-8;"});
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = "devbay_chat_history.csv"; document.body.appendChild(a);
  a.click(); a.remove(); URL.revokeObjectURL(url);
}

// ---------------- Speech-to-text ----------------
function startSpeech(){
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if(!SpeechRecognition){ alert("Speech recognition not supported in this browser."); return; }
  const recog = new SpeechRecognition();
  recog.lang = "en-US";
  recog.interimResults = false;
  recog.maxAlternatives = 1;
  recog.onresult = (e)=> {
    const text = e.results[0][0].transcript;
    document.getElementById("userInput").value = text;
  };
  recog.start();
}

// ---------------- OpenAI helper ----------------
async function callOpenAI(prompt){
  // Simple wrapper for Chat Completions
  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method:"POST",
    headers:{
      "Content-Type":"application/json",
      "Authorization": `Bearer ${API_KEY}`
    },
    body: JSON.stringify({
      model: MODEL,
      messages: [{role:"user", content: prompt}],
      max_tokens: 650
    })
  });
  if(!res.ok){
    const txt = await res.text();
    throw new Error("OpenAI error: " + txt);
  }
  const json = await res.json();
  return json.choices?.[0]?.message?.content || "";
}

// ---------------- Relevance check + two-mode reply with typing animation ----------------
async function askChatbot(question){
  // 1) Ask model whether question is related to website
  const detectPrompt = `You are a classifier. Based on the website content below, answer ONLY 'yes' or 'no' to: Is the question related to this website?
Website content:
${websiteText}

Question: "${question}"`;
  let classification = "no";
  try {
    const cls = await callOpenAI(detectPrompt);
    classification = (cls||"").trim().toLowerCase().startsWith("y")? "yes":"no";
  } catch(err){
    console.warn("classification failed:", err);
    classification = "no";
  }

  // 2) If related, build a prompt that forces answer to use only websiteText
  if(classification === "yes"){
    const prompt = `You are Devbay's website assistant. Answer the user's question using ONLY the website text below. If the answer is not present, reply with a concise sentence: "I couldn't find that on the website. Please contact Devbay for details."

Website text:
${websiteText}

User question: ${question}
Answer concisely:`;
    return await streamingAssistantReply(prompt);
  }

  // 3) If not related → normal helpful answer
  const genPrompt = `You are a helpful AI assistant. Answer the user's question concisely and politely.

Question: ${question}`;
  return await streamingAssistantReply(genPrompt);
}

// -- Typing animation (streaming simulation) --
// We call OpenAI as usual, but implement a client-side reveal of the returned text to mimic ChatGPT typing.
async function streamingAssistantReply(prompt){
  // show typing indicator bubble
  const typingNode = appendBubble("bot", "", {typing:true});
  try {
    const text = await callOpenAI(prompt); // single fetch (not real streaming)
    // replace typing with typed reveal
    typingNode.innerHTML = ""; // clear typing indicator
    let i = 0;
    const revealSpeed = 18; // ms per char (adjust to mimic ChatGPT)
    return await new Promise(resolve => {
      const ticker = setInterval(() => {
        i += 1;
        typingNode.textContent = text.slice(0,i);
        chatbox().scrollTop = chatbox().scrollHeight;
        if(i >= text.length){
          clearInterval(ticker);
          // save history
          chatHistory.push({role:"bot", text, time: formatTime()});
          saveLocal();
          resolve(text);
        }
      }, revealSpeed);
    });
  } catch(err){
    typingNode.remove();
    const errMsg = "⚠️ Error contacting API.";
    appendBubble("bot", errMsg);
    chatHistory.push({role:"bot", text:errMsg, time:formatTime()});
    saveLocal();
    return errMsg;
  }
}

// ---------------- Send flow ----------------
async function onSend(){
  const input = document.getElementById("userInput");
  const text = input.value.trim();
  if(!text) return;
  input.value = "";
  appendBubble("user", text);
  chatHistory.push({role:"user", text, time: formatTime()});
  saveLocal();
  // ask
  const reply = await askChatbot(text);
  // reply was already appended (typing replaced with text) by streamingAssistantReply
}

// Send on Enter
document.addEventListener("keydown", (e)=>{
  if(e.key === "Enter" && document.activeElement.id === "userInput"){ e.preventDefault(); onSend(); }
});

// ---------------- Init load ----------------
(function init(){
  loadLocal();
  // ensure CSS theme and DOM restored
  const dark = localStorage.getItem("devbay_dark");
  if(dark) setDark(true);
  // if no saved DOM, show welcome message
  if(!localStorage.getItem("devbay_chat_html")){
    appendBubble("bot", "Hello 👋 — I'm the Devbay AI Assistant. Ask me about Devbay or any topic.");
    chatHistory.push({role:"bot", text:"Hello 👋 — I'm the Devbay AI Assistant. Ask me about Devbay or any topic.", time:formatTime()});
    saveLocal();
  }
})();
