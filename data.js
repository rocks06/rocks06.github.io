/*
  data.js — All content for the site.
  Adding a project, story beat, or update is one object in one of the arrays below.

  Rules:
  . No IP addresses, ports, file paths, keys, or internal service names.
  . No client performance figures or outreach metrics.
  . Where a client is confidential, leave `client` null and write generic description.
  . No dash characters between words in visible copy (brand names excepted).
*/

var SITE = {
  name: "Rocco Donadon",
  email: "roccodonadon@me.com",
  links: [
    { label: "GitHub", href: "https://github.com/rocks06" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/rocco-donadon-19bb221ba/" }
  ],
  intro: [
    "I am a computer science student and solo founder building AI systems that perceive, reason, and act in the real world.",
    "My work spans agent infrastructure, computer vision, spatial interfaces, and the product engineering required to make them useful."
  ],
  capabilities: [
    { number: "01", title: "Agent Systems", body: "Multi-agent coordination, persistent runtimes, tool use, memory, authorization, and human supervision.", tags: ["Orchestration", "Realtime", "Guardrails"] },
    { number: "02", title: "Perception & Vision", body: "Interfaces that interpret camera feeds, environments, and voice to produce grounded assistance.", tags: ["Computer vision", "VLMs", "Voice"] },
    { number: "03", title: "Spatial Interfaces", body: "AR and wearable experiences designed around context, attention, and hands-free interaction.", tags: ["visionOS", "Wearables", "3D"] },
    { number: "04", title: "Product Engineering", body: "Full-stack systems that connect polished interfaces to secure APIs, data, and production operations.", tags: ["TypeScript", "Swift", "Python"] }
  ]
};

/*
  Story — chronological beats with full narrative.
*/
var STORY = [
  {
    date: "2024",
    title: "Moving from Italy to Miami",
    body: "I grew up between Venice and Treviso, Italy, where I completed my education before moving to the United States in 2024. That year, I moved to Miami to study Computer Science at Barry University.<br><br>Moving countries forced me to become independent quickly. I was entering a new academic system, a new culture, and a completely different environment while trying to figure out what I actually wanted to build with computer science.<br><br>At first, I was interested broadly in software, cybersecurity, and artificial intelligence. I experimented constantly, building small projects and testing ideas rather than committing too early to one direction."
  },
  {
    date: "2025",
    title: "From AI Features to Products",
    body: "In 2025, I started building applications around AI.<br><br>My first projects treated AI as a feature inside a larger product. I worked on concepts such as an AI powered wardrobe that could understand the clothes a user already owned and recommend outfits based on factors such as style, context, and weather.<br><br>I later explored spatial computing and augmented reality through a fashion prototype designed for devices such as Apple Vision Pro. The idea was to move beyond a traditional screen and experiment with how AI could interact with a person's physical environment.<br><br>At the same time, I began exploring more infrastructure heavy products. One of these was an AI compliance system designed to continuously monitor regulations, identify potential risks, and generate evidence that companies could use during audits.<br><br>These projects looked different on the surface, but they kept teaching me the same lesson. The most interesting part was rarely the model itself. What interested me more was what happened when the software could observe something, make a decision, take an action, record the result, and continue operating without requiring me to constantly supervise it.<br><br>That changed how I thought about AI. I stopped seeing AI primarily as something a user talks to and started thinking about it as software that can operate."
  },
  {
    date: "2026",
    title: "Building Autonomous Systems",
    body: "By 2026, most of my work had shifted toward autonomous systems and AI agents.<br><br>Instead of building isolated AI features, I began building systems designed to run continuously: collecting information, reasoning about it, taking actions, and coordinating tasks with minimal human intervention.<br><br>I experimented with automated research systems, trading systems, compliance monitoring, lead generation pipelines, and multi agent architectures where different agents were responsible for specialized roles such as research, coding, security, execution, and strategy.<br><br>That work eventually led me to a larger problem. If everyone begins deploying agents, those agents will eventually need to work with agents owned by other people and other companies.<br><br>Today, that is where much of my attention is focused: building infrastructure for agents to discover each other, communicate, coordinate work, exchange context, and complete tasks across organizational boundaries.<br><br>I am also a member of the Agentic AI Lab, a student builder group focused on developing AI agents for real world workflows.<br><br>The direction of my work has changed significantly since I first started building AI applications. I began by asking: <em>What useful feature can I build with AI?</em> Then the question became: <em>What can this system do without me?</em> Now the question I am interested in is: <em>What happens when millions of autonomous systems need to work together?</em>"
  }
];

/*
  Projects — sorted newest first by main.js.
  Each project links to project.html?id=<id>
*/
var PROJECTS = [
  {
    id: "vision-ai",
    title: "Vision AI",
    date: "2026 (April – now)",
    status: "live",
    summary: "Voice guided repair assistance on iOS. Point a phone camera at a machine, describe the problem out loud, and get a diagnosis and step by step guidance without touching the screen.",
    detail: "The app analyses the live camera feed and answers in a natural voice, with overlays that point at the specific component being discussed. Interruption is handled the way a person handles it: start speaking and it stops and listens. Built for people whose hands are occupied with the equipment in front of them. An enterprise edition ships with deep knowledge of a specific equipment catalogue, including failure modes, safety warnings, part references, and expected repair times, so it answers like a technician who already knows the plant.",
    stack: ["React", "Capacitor", "iOS", "Gemini 2.5 Flash vision and reasoning", "Full duplex speech synthesis", "Voice activity detection for turn taking"],
    client: null,
    clientNote: "A US industrial equipment distributor"
  },
  {
    id: "multiplayer-ai-agents",
    title: "Multiplayer AI Agents",
    date: "2026 (August – now)",
    status: "in progress",
    summary: "Infrastructure for AI agents that interact with other people's agents.",
    detail: "Moves the interaction model from one human talking to one assistant, toward agents that meet and collaborate in shared rooms across users and organisations. Includes workspace onboarding, company scoped APIs, agent enrolment, room membership, and an authorisation layer verified by regression tests.",
    milestone: {
      date: "3 September 2026",
      version: "v0.2.0",
      title: "First externally installable engineering release",
      body: "The macOS build passed Developer ID signing, Apple notarisation, stapling, and Gatekeeper acceptance on physical machines. Human sharing partially passed: two separate accounts joined the same persistent room and exchanged realtime messages. The end to end external agent connection is still blocked, so this is an engineering milestone rather than a product ready public launch.",
      href: "https://github.com/rocks06/multiplayer-ai/releases/tag/v0.2.0"
    },
    stack: ["TypeScript", "Swift", "PostgreSQL", "Realtime systems", "Authentication and authorisation", "macOS distribution"],
    client: null,
    clientNote: null
  },
  {
    id: "coleman",
    title: "Coleman Smart Glasses",
    date: "2026 (June – now)",
    status: "live",
    summary: "A wearable assistant running on Ray-Ban Display glasses.",
    detail: "Three layers: glasses, phone, and a local machine that does the reasoning. Reads calendars, tracks biometrics from a connected watch, and runs a proactive trigger engine that decides when it is worth speaking without being asked, with quiet hours respected. Conversation is handled by a state machine covering wake words and natural pauses rather than push to talk.",
    stack: ["Meta Ray-Ban Display SDK", "Python service layer", "Speech recognition and synthesis", "Calendar and health integrations"],
    client: null,
    clientNote: null
  },
  {
    id: "wolf-ai",
    title: "Wolf AI",
    date: "2026 (April – now)",
    status: "live",
    summary: "An automated trading system for prediction markets.",
    detail: "Started as a machine learning research project on market microstructure with a feature set covering spread, order book imbalance, momentum, volatility, and time to expiry, plus backtesting that accounts for fees and slippage. Became a persistent operational engine with position tracking, profit and loss calculation, and risk controls including exposure limits and a kill switch. Ran in simulation for an extended period before any capital was committed.",
    stack: ["Python", "Logistic regression and gradient boosting", "Probability calibration", "Process supervision", "Dashboard and API"],
    client: null,
    clientNote: null
  },
  {
    id: "webpulse",
    title: "WebPulse",
    date: "2026 (February – now)",
    status: "in progress",
    summary: "Finds businesses with weak digital infrastructure and turns them into qualified leads.",
    detail: "Scrapes business listings, analyses each website for security, speed, mobile behaviour, metadata, and booking or commerce tooling, scores the result, then generates outreach referencing the specific weakness found. Includes duplicate prevention and send throttling.",
    stack: ["Browser automation", "Supabase", "Page performance analysis", "Generated outreach"],
    client: null,
    clientNote: null
  },
  {
    id: "mealo",
    title: "Mealo",
    date: "2026 (February – now)",
    status: "live",
    summary: "Personalised meal planning built at the Barry University Inspire Hackathon with the AI Center.",
    detail: "Preferences and constraints feed intelligent filtering to generate curated meal options. Role: user experience and interface design through to working prototype.",
    stack: ["Figma", "Rapid prototyping"],
    client: null,
    clientNote: null
  },
  {
    id: "blackbox",
    title: "AI Compliance",
    date: "2025 (Fall '25)",
    status: "prototype",
    summary: "A continuous AI compliance layer for smaller companies.",
    detail: "Monitors regulation, determines what applies to a given company, maps rules to operations, detects gaps, and generates the evidence record. The strategic insight was that evidence logging matters more than gap detection: companies increasingly have to prove compliance rather than claim it. Backend prototype with an evidence submission API and a basic interface.",
    stack: ["Node.js", "Express", "PostgreSQL"],
    client: null,
    clientNote: null
  },
  {
    id: "elan",
    title: "ÉLAN",
    date: "2025 (Summer '25)",
    status: "prototype",
    summary: "An AI fashion assistant for spatial computing.",
    detail: "A user stands at an ordinary mirror wearing a headset. The system detects the body, understands the user's style, and overlays garments in real time so the mirror shows a virtual outfit. The intelligence lives in the wearable, not in an expensive smart mirror. Included research into embedding a small language model directly on device rather than depending on an external process.",
    stack: ["visionOS", "Body tracking", "AR overlay", "On device model research"],
    client: null,
    clientNote: null
  },
  {
    id: "ai-closet",
    title: "AI Closet",
    date: "2025 (Spring/Summer '25)",
    status: "prototype",
    summary: "Makes a wardrobe someone already owns searchable, and builds outfits from it.",
    detail: "Photograph a garment, and the pipeline removes the background, isolates the item, classifies it, and files it in a wardrobe database. Recommendations then combine local weather, occasion, and a chosen style. It recommends from what you have rather than pushing new purchases. This work evolved into ÉLAN.",
    stack: ["SwiftUI", "Supabase", "Vision model classification"],
    client: null,
    clientNote: null
  },
  {
    id: "xr-concepts",
    title: "XR concepts",
    date: "2025 (Spring/Summer '25)",
    status: "archived",
    summary: "Exploratory prototypes testing where AR and AI create experiences a phone cannot.",
    detail: "Immersive museums, an XR personal trainer, an AR shopping assistant, and a future city simulator.",
    stack: ["XR prototyping", "3D"],
    client: null,
    clientNote: null
  }
];

/*
  Updates — working log, newest first.
*/
var UPDATES = [
  {
    date: "2026-09-03",
    title: "Multiplayer AI v0.2.0 passes its first public release acceptance test",
    body: "The first externally installable engineering release is signed, notarised, stapled, and accepted by Gatekeeper. Two separate human accounts joined the same persistent room and exchanged realtime messages. The external agent connection foundation is still blocked, so this marks tested progress rather than a product ready public launch."
  },
  {
    date: "2026-08-14",
    title: "Coleman decides when to stay quiet",
    body: "The proactive trigger engine now weighs whether an interruption is worth it before it speaks, and respects quiet hours. Silence turned out to be the harder behaviour to get right."
  },
  {
    date: "2026-07-02",
    title: "Agent rooms reach regression coverage",
    body: "The authorisation layer for shared agent rooms is under regression tests, so enrolment and membership changes cannot quietly widen access."
  },
  {
    date: "2026-08-24",
    title: "Wolf AI moved off simulation",
    body: "After an extended simulated run, the engine started operating with real capital under exposure limits and a kill switch."
  }
];
