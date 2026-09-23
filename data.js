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

var NOW = [
  { label: "Currently building", value: "Multiplayer AI", detail: "A persistent workspace where people and independently operated agents collaborate under explicit permissions.", href: "project.html?id=multiplayer-ai-agents" },
  { label: "Currently exploring", value: "Multi agent coordination and computer vision", detail: "How autonomous systems share context, use tools safely, and understand the physical world.", href: "work.html" },
  { label: "Currently studying", value: "Computer Science and cybersecurity", detail: "Barry University in Miami, with an emphasis on the systems beneath reliable AI products.", href: "about.html" }
];

var MILESTONES = [
  { date: "2024", title: "Moved from Italy to Miami", body: "Started studying Computer Science at Barry University and began building independently in a new country." },
  { date: "2025", title: "From prototypes to products", body: "Built AI Closet, ÉLAN, spatial computing experiments, and an AI compliance prototype." },
  { date: "February 2026", title: "Built at the Inspire Hackathon", body: "Created the Mealo prototype with the Barry University AI Center." },
  { date: "September 2026", title: "First externally installable release", body: "Multiplayer AI v0.2.0 passed signing, notarisation, stapling, and Gatekeeper acceptance on physical Macs." }
];

var EDUCATION = [
  {
    period: "Italy · through 2024",
    school: "H-FARM International School",
    credential: "International Baccalaureate Diploma Programme",
    body: "I followed the IB curriculum throughout my education and graduated from the Diploma Programme with the IB Diploma. Growing up inside the H-FARM environment exposed me early to startups, hackathons, technology, and a culture where building and testing ideas was normal."
  },
  {
    period: "Miami · 2024 to present",
    school: "Barry University",
    credential: "Computer Science",
    body: "I moved to the United States to study Computer Science, deepen my systems foundation, and continue turning technical ideas into working products and companies."
  }
];

/*
  Story — chronological beats with full narrative.
*/
var STORY = [
  {
    date: "2024",
    title: "Moving from Italy to Miami",
    body: "I grew up in Treviso, a small city near Venice, Italy, and in many ways inside H-FARM. I studied at H-FARM International School, followed the International Baccalaureate curriculum throughout my education, and graduated from the Diploma Programme with the IB Diploma.<br><br>H-FARM exposed me early to startups, hackathons, technology, and a culture where building and testing ideas was normal. That environment made the technology world feel less like something distant and more like something I could participate in directly.<br><br>In 2024, I moved to Miami to study Computer Science at Barry University. Moving countries forced me to become independent quickly. I entered a new academic system and culture while continuing to experiment across software, cybersecurity, and artificial intelligence."
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
    problem: "Field technicians often need manuals, search, or remote experts while their hands and attention are already occupied by the equipment.",
    proof: "A working iOS system combines live camera analysis, voice input, spoken guidance, interruption handling, and component level visual overlays.",
    challenge: "Keep the interaction fast and grounded while coordinating vision, speech, turn taking, and equipment specific knowledge.",
    outcome: "Active development for industrial equipment and field service use, including a catalogue aware enterprise edition.",
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
    problem: "AI agents are usually isolated inside single user products and cannot safely collaborate with agents owned by other people or companies.",
    proof: "Persistent rooms, multiple human accounts, external agent profiles, realtime messaging, tasks, decisions, file attachments, notifications, and server enforced permissions are working.",
    challenge: "Force every local agent action through enforceable policy boundaries without depending on prompts or unrestricted native tools.",
    outcome: "The private v0.2.0 engineering release is signed, notarised, and Gatekeeper accepted. P1-B physical end to end validation remains in progress.",
    currentStatus: {
      date: "21 September 2026",
      title: "Security architecture under physical validation",
      body: "Multiplayer AI now has working persistent rooms, multiple human accounts, multiple external agent profiles, realtime messaging, agent to agent collaboration, tasks, decisions, file attachments, native notifications, and a hardened server side permission model.",
      focus: "The current engineering focus is P1-B local runtime security: forcing every agent filesystem, shell, network, and room action through an enforceable broker instead of relying on model prompts or unrestricted native tools. The secure Mac build passes 18 of 18 installation and security checks, but end to end physical broker execution is still under active validation. Multiplayer AI is not yet a public production release."
    },
    developmentTimeline: [
      {
        date: "21 September 2026",
        title: "Hermes compatibility investigation",
        body: "Built compatibility coverage for Hermes 0.20.5 and 0.21.0, removed misleading assumptions around the MCP discovery lifecycle, and added more realistic product launch testing. P1-B remains unaccepted because the real agent reply path has not yet passed physical end to end validation.",
        commits: ["5f2b3a7", "01f6a80", "43aeeba"]
      },
      {
        date: "21 September 2026",
        title: "Hermes tool exposure corrected",
        body: "Found that Hermes Tool Search was replacing 13 Multiplayer tools with generic wrappers. Disabled Tool Search for the room runtime and corrected the MCP tool names to the actual mcp__multiplayer__ namespace.",
        commits: ["df01136"]
      },
      {
        date: "20–21 September 2026",
        title: "MCP bridge and runtime hardened",
        body: "Added relay lifecycle and error logging, prevented one failed broker request from terminating the MCP relay, and added subprocess diagnostics for startup, calls, and shutdown.",
        commits: ["1d1ef13"]
      },
      {
        date: "20 September 2026",
        title: "Broker invocation wiring fixed",
        body: "Found the broker bridge attached to the wrong adapter property, fixed the real helper to Hermes invocation path, and added packaged helper wake regression coverage across multiple profiles and reconnects.",
        commits: ["532899e"]
      },
      {
        date: "20 September 2026",
        title: "Physical testing exposed a stale build",
        body: "Discovered that the Mac was still running older app build ca290a0 while the server was newer. Added build stamping, helper diagnostics, local enforcement reporting, refusal of stale or unenforced connectors, and verify-installed-app.mjs. The first properly installed secure build passed 18 of 18 installation and security checks. This was a major release hardening discovery, not a finished release.",
        commits: ["ef90225"]
      },
      {
        date: "19 September 2026",
        title: "P1-B local security architecture implemented",
        body: "Introduced a local broker for agent tools. Filesystem, shell and code, and network actions moved behind policy checks; the raw session token was removed from the intended model facing environment; per room Hermes runtime and memory isolation, private network protections, and macOS sandbox execution were added. Implementation is complete, while physical acceptance remains in progress.",
        commits: ["ee63ae5"]
      },
      {
        date: "18 September 2026",
        title: "Security foundation and P1-A deployed",
        body: "Deployed server side capability enforcement, room scoped agent permissions, tighter cross room and workspace isolation, active session capability revocation, an append only security audit log, and basic agent secret output blocking. Agents can no longer grant themselves capabilities. Human session and token revocation also passed while workspace data survived reauthentication.",
        commits: ["91ae668"]
      }
    ],
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
    problem: "A wearable assistant becomes distracting if it waits for constant commands or interrupts without understanding context.",
    proof: "The system connects glasses, phone, and local reasoning with calendar context, watch biometrics, wake words, natural pauses, and quiet hours.",
    challenge: "Decide when assistance is valuable enough to interrupt and when silence is the better product behaviour.",
    outcome: "An operating wearable assistant prototype with proactive triggers and conversation state management.",
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
    problem: "Prediction market signals are easy to overestimate when testing ignores execution costs, changing liquidity, and operational risk.",
    proof: "The engine includes calibrated models, fee and slippage aware backtesting, position tracking, exposure limits, and a kill switch.",
    challenge: "Translate research results into a persistent system that behaves predictably when market conditions and data quality change.",
    outcome: "Moved from extended simulation into limited live operation under explicit risk controls, without publishing performance claims.",
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
    problem: "Generic lead lists do not explain why a business needs help, which makes outreach noisy and difficult to prioritise.",
    proof: "The pipeline collects business data, audits websites, scores concrete weaknesses, prevents duplicates, and prepares evidence based outreach.",
    challenge: "Keep automated research accurate and useful without turning outreach into unbounded or repetitive automation.",
    outcome: "An in progress lead qualification system with throttling and duplicate prevention built into the workflow.",
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
    problem: "Meal discovery becomes frustrating when menus do not reflect a person's preferences, dietary constraints, or immediate context.",
    proof: "A working hackathon prototype turns user constraints into filtered and curated meal options.",
    challenge: "Reduce a broad recommendation problem into a clear interface that can be built and demonstrated within a hackathon timeline.",
    outcome: "Completed with the Barry University AI Center at the Inspire Hackathon, with ownership across user experience and prototyping.",
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
    problem: "Smaller companies struggle to determine which rules apply and to preserve evidence that compliance work actually happened.",
    proof: "The backend prototype maps regulations to operations, records evidence submissions, identifies gaps, and exposes a basic review interface.",
    challenge: "Treat evidence history as a first class system rather than producing an untraceable compliance answer.",
    outcome: "A completed product and backend experiment that established evidence logging as the central design principle.",
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
    problem: "Virtual styling experiences often require specialised displays instead of working with the mirrors and spaces people already have.",
    proof: "The prototype direction combines body tracking, real time garment overlays, style context, and on device model research for visionOS.",
    challenge: "Align garments convincingly in space while keeping the experience private, responsive, and wearable first.",
    outcome: "An archived spatial computing experiment that extended the AI Closet idea from recommendation into embodied interaction.",
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
    problem: "Most fashion recommendation products optimise for selling more clothes instead of helping people use what they already own.",
    proof: "The prototype removes garment backgrounds, classifies items, stores a personal wardrobe, and combines weather, occasion, and style for recommendations.",
    challenge: "Turn inconsistent personal photos into structured wardrobe data that remains useful for downstream recommendations.",
    outcome: "A completed prototype whose ideas evolved into the later ÉLAN spatial computing concept.",
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
    problem: "Many AR concepts recreate flat screen interactions without using space, embodiment, or environmental context meaningfully.",
    proof: "A set of concept prototypes explored immersive museums, personal training, shopping assistance, and future city simulation.",
    challenge: "Identify which experiences genuinely benefit from spatial computing instead of adding novelty without utility.",
    outcome: "Archived research that informed later work in wearable assistance, computer vision, and spatial product design.",
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
    date: "2026-09-21",
    title: "P1-B remains under physical validation",
    body: "Hermes compatibility and tool exposure fixes now cover realistic room launch paths. The secure Mac build passes 18 of 18 installation and security checks, but the real agent reply path has not yet passed physical end to end validation. This is active release hardening, not a public production release."
  },
  {
    date: "2026-09-20",
    title: "Physical testing finds and closes a stale build gap",
    body: "Build stamping, helper diagnostics, enforcement reporting, and stale connector refusal now make the installed app state visible and enforceable. A properly installed secure build passed all 18 installation and security checks."
  },
  {
    date: "2026-09-19",
    title: "Local broker security architecture implemented",
    body: "Agent filesystem, shell, code, network, and room actions now route through policy checks, with per room runtime isolation, private network protection, and macOS sandbox execution. Physical acceptance is still in progress."
  },
  {
    date: "2026-09-18",
    title: "Server side security foundation deployed",
    body: "Room scoped capabilities, stronger workspace isolation, active session revocation, append only security auditing, and basic secret output blocking established the P1-A security foundation."
  },
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
    date: "2026-09-08",
    title: "Agent rooms reach regression coverage",
    body: "The authorisation layer for shared agent rooms is under regression tests, so enrolment and membership changes cannot quietly widen access."
  },
  {
    date: "2026-08-24",
    title: "Wolf AI moved off simulation",
    body: "After an extended simulated run, the engine started operating with real capital under exposure limits and a kill switch."
  }
];
