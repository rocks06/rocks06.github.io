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
  { date: "September 2026", title: "First externally installable release", body: "Multiplayer AI v0.10.1 passed signing, notarisation, stapling, and Gatekeeper acceptance on physical Macs. The historical GitHub tag remains v0.2.0." }
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
    proof: "Working private iOS builds combine live camera analysis, natural voice input, exact spoken guidance, interruption handling, task state, and component level visual overlays.",
    challenge: "Turn the working guidance loop into a reliable field service product with durable service records and remote support without adding interaction latency.",
    outcome: "The original pitch concept became a working consumer iOS app and a separate equipment scoped enterprise edition. Customer discovery and measured field outcomes remain ahead, so this is not yet a public beta.",
    currentStatus: {
      date: "20 September 2026",
      title: "Working iOS system and enterprise edition",
      body: "Vision AI now runs as private iOS builds for general repair guidance and equipment scoped field service. The system combines live camera reasoning, full duplex voice, barge in, visual grounding, in session task state, captions, session logs, and fallback speech paths.",
      focus: "The current product decision is how to combine technician service records with remote customer support. Persistent service history, team accounts, role based access, and measured customer outcomes are not built yet."
    },
    timelineTitle: "From pitch concept to working iOS system.",
    developmentTimeline: [
      {
        date: "20 September 2026",
        title: "B2B workflow narrowed after field service review",
        body: "A product review with an industrial equipment company narrowed the next phase to technician service records, remote customer support, or a combined workflow. The public materials also need to reflect the real single model guidance architecture rather than the original pitch deck's three model concept."
      },
      {
        date: "16 September 2026",
        title: "Product story moved toward field repair",
        body: "The site and product narrative shifted away from consumer pricing toward repair specific guidance and the See, Understand, Guide, Verify loop. Smart glasses remain a future input direction rather than a current product claim."
      },
      {
        date: "28 August 2026",
        title: "Current architecture documented",
        body: "A full product explainer captured the working stack and B2B position: one low latency vision and reasoning path, full duplex conversation, interruption handling, visual grounding, and an equipment scoped enterprise edition."
      },
      {
        date: "July to 13 August 2026",
        title: "Main iOS build sprint completed",
        body: "The prototype became a working private iOS application. The build added embedded safety checks, full duplex speech, voice activity detection, barge in, speech cleanup, repaired overlays, captions, session logging, support and legal surfaces, protected configuration, and fallback speech paths. Separate consumer and equipment scoped editions were produced."
      },
      {
        date: "May 2026",
        title: "Pressure test and demo MVP",
        body: "An early business review exposed liability, willingness to pay, and scope problems in the consumer concept. The direction shifted toward junior field technicians, while a stripped down camera demo established structured visual coordinates and a pulsing overlay for the first recorded walkthrough."
      }
    ],
    milestone: {
      date: "August 2026",
      version: "Private iOS build",
      title: "Two working Vision AI editions",
      body: "The main build sprint produced a general repair application and a separate enterprise edition scoped to a specific equipment catalogue. Both remain private development builds while service history, multi user access, role based permissions, and field outcome validation are developed."
    },
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
    proof: "Persistent rooms, multiple human accounts, external agent profiles, realtime messaging, tasks, decisions, file attachments, notifications, server enforced permissions, room ownership and roles, guided onboarding, and a signed, notarized native macOS app are working. Hermes and Codex CLI connect today.",
    challenge: "Take a working release candidate to a first official public release: release-candidate validation, onboarding reliability, macOS distribution, runtime support, and controlled private beta access.",
    outcome: "Multiplayer AI is in late pre-release. The first public teaser was published on LinkedIn on 1 October 2026, and the product is moving toward its first official public release; it has not officially launched yet. v2.0.1 remains the latest version in the canonical engineering ladder.",
    currentStatus: {
      date: "1 October 2026",
      version: "v2.0.1",
      title: "Pre-release",
      body: "Multiplayer AI is now in late pre-release. The native macOS app, shared-room architecture, agent connections, human control systems, permissions, onboarding, and release pipeline are operational. The first public teaser has been published, and the product is moving toward its first official public release.",
      focus: "Current work covers release-candidate validation, onboarding reliability, macOS distribution, runtime support, private beta access, and final launch preparation. Hermes and Codex CLI connect today; support for Claude Code, OpenClaw, ChatGPT, Grok, and Meta AI / Muse is in development. Multiplayer AI has not officially launched."
    },
    timelineTitle: "Every development stage, from room core to pre-release.",
    developmentTimeline: [
      {
        date: "1 October 2026",
        title: "First public teaser published",
        body: "Multiplayer AI was shown publicly for the first time through a pre-release LinkedIn teaser while the product remains in final pre-launch preparation."
      },
      {
        date: "29 September – 1 October 2026",
        title: "Fresh-account onboarding and runtime connection polish",
        body: "The onboarding flow was rebuilt around readiness checks, workspace creation, room creation, agent connection, first work, and final readiness, with resume state and live transitions hardened. Runtime detection and connection flows were refined around the public macOS experience."
      },
      {
        date: "30 September 2026",
        title: "Hermes and Codex CLI become the first public runtimes",
        body: "The public runtime model was simplified around existing signed-in local runtimes, with Hermes and Codex CLI connectable today and broader runtime support, including Claude Code, OpenClaw, ChatGPT, Grok, and Meta AI / Muse, continuing in development."
      },
      {
        date: "28–30 September 2026",
        title: "Ownership, permissions, and agent movement hardened",
        body: "Shared-room ownership, admin and contributor permissions, atomic agent moves, mentions, unread state, notifications, account deletion, and release security were hardened across the final P1/P2 work."
      },
      {
        date: "25–28 September 2026",
        title: "Release hygiene, signed macOS distribution, and reliability",
        body: "Added public-tree and artifact sanitation, one fail-closed release path for signed, notarized, stapled, and Gatekeeper-accepted macOS builds, and reliability hardening for stop, resume, reconnect, and crash recovery."
      },
      {
        date: "25 September 2026",
        version: "v2.0.1",
        title: "P2 Release Hardening begins",
        body: "P1 is complete. Engineering shifts to release hygiene, macOS distribution, reliability, clean machine validation, and final release candidate work without claiming a public release."
      },
      {
        date: "24–25 September 2026",
        version: "v1.6.1",
        title: "P1-D human control, project folders, governance, and physical acceptance",
        body: "Added human control of agents and grants, project folder governance, audit visibility, ordinary denial handling, durable Needs You attention, and the final physical acceptance fixes. P1-D officially closed on 25 September."
      },
      {
        date: "23–24 September 2026",
        version: "v1.5.1",
        title: "P1-C intelligent per-file permission gate",
        body: "Added per file approval outside approved project folders and made an approved request wake the agent with the original call available to retry."
      },
      {
        date: "19–23 September 2026",
        version: "v1.4.1",
        title: "P1-B enforced local broker, hardening, and physical acceptance",
        body: "Forced local agent filesystem, shell, network, and room actions through enforced tools. Broker resilience, isolation, sandbox controls, revocation, sanitation, and the final physical path passed acceptance."
      },
      {
        date: "18 September 2026",
        version: "v1.3.1",
        title: "P1-A server-side capabilities, isolation, secret boundaries, and audit",
        body: "Deployed room scoped capabilities, tighter workspace isolation, active revocation, secret output boundaries, and append only security auditing."
      },
      {
        date: "18 September 2026",
        version: "v1.2.1",
        title: "P0 authentication and shared-room security fixes",
        body: "Closed sign in token exposure and shared room security gaps, then made sign out return to a truthful sign in state."
      },
      {
        date: "16–17 September 2026",
        version: "v1.1.1",
        title: "Ownership, mentions, unread state, notifications, and bounded collaboration",
        body: "Added structured mentions, ownership, unread rooms, native notifications, bounded agent collaboration, receipts, first unread navigation, agent views, and attention controls."
      },
      {
        date: "16 September 2026",
        version: "v1.0.4",
        title: "Multiple local agent profiles and lifecycle controls",
        body: "Enabled several local agents, profile startup, credential preserving disconnect, clearer room assignment, and agent removal from one room."
      },
      {
        date: "15 September 2026",
        version: "v1.0.3",
        title: "Native PDF preview, bounded rooms, and credential-preserving agent moves",
        body: "Added native PDF preview, stabilized empty room layout, and allowed a single agent to move rooms without creating a new credential."
      },
      {
        date: "11 September 2026",
        version: "v1.0.2",
        title: "Helper IPC and identity-preserving onboarding",
        body: "Unblocked packaged helper communication and preserved agent identity through onboarding and reconnection."
      },
      {
        date: "8–9 September 2026",
        version: "v1.0.1",
        title: "Durable files and atomic artifact delivery",
        body: "Added durable room files, agent artifact delivery, credential safe provider failures, atomic uploads, file cards, native handling, and upload gated replies."
      },
      {
        date: "7 September 2026",
        version: "v0.10.4",
        title: "Room UI, message timing, and command reliability",
        body: "Bounded the room layout, timestamped messages, and prevented shell behavior from losing commands on the way to a room."
      },
      {
        date: "3 September 2026",
        version: "v0.10.3",
        title: "End-to-end existing local-agent connection",
        body: "Completed the connection path for an agent already running on the Mac."
      },
      {
        date: "3 September 2026",
        version: "v0.10.2",
        title: "Browser-to-app joined-room handoff",
        body: "Carried an accepted browser invitation into the native application and preserved the joined room."
      },
      {
        date: "3 September 2026",
        version: "v0.10.1",
        title: "First externally installable engineering release",
        body: "Produced the first signed, notarised, stapled, and Gatekeeper accepted Mac build. The historical GitHub tag remains v0.2.0, but this stage is v0.10.1 in the engineering ladder."
      },
      {
        date: "2 September 2026",
        version: "v0.9.2",
        title: "Onboarding, invite completion, and Hermes detection",
        body: "Made onboarding run end to end, completed browser invite authentication, connected the existing agent flow to the intended runtime, and corrected Hermes health detection."
      },
      {
        date: "1 September 2026",
        version: "v0.9.1",
        title: "Secure room sharing and runtime rebinding",
        body: "Scoped enrollment to rooms, added secure room sharing, enforced one live runtime binding, and prevented rebinding from falsely reporting removed access."
      },
      {
        date: "30–31 August 2026",
        version: "v0.8.2",
        title: "Production delivery, authentication, readiness, and single-app packaging",
        body: "Hardened hosted asset delivery and sign in, removed tokens from URLs, handled upgrades and Keychain behavior, added readiness truth, automated empty database migration, and prepared one downloadable application."
      },
      {
        date: "29 August 2026",
        version: "v0.8.1",
        title: "Product shell, Home, and navigation",
        body: "Added the product front door, Home, and a reliable route back from active work."
      },
      {
        date: "28 August 2026",
        version: "v0.7.3",
        title: "Existing-agent connection and room-first onboarding",
        body: "Created the room before its objective, connected agents users already operate, persisted Mac destination settings, allowed later agent addition, and made agent commands execute."
      },
      {
        date: "27 August 2026",
        version: "v0.7.2",
        title: "Public marketing and deployment foundation",
        body: "Added the public marketing site, configured its deployment, and clarified founder attribution without claiming beta readiness."
      },
      {
        date: "27 August 2026",
        version: "v0.7.1",
        title: "Stage 8: Mac Connector without Terminal",
        body: "Introduced the native Mac Connector so local agent setup no longer depended on Terminal."
      },
      {
        date: "27 August 2026",
        version: "v0.6.1",
        title: "Stage 7: bring agents into a shared workspace",
        body: "Added authenticated agent creation and room discovery so users could bring their own agents into one workspace."
      },
      {
        date: "27 August 2026",
        version: "v0.5.1",
        title: "Stage 6: readable shared work and explicit controls",
        body: "Made shared work legible and ensured controls describe the actions they perform."
      },
      {
        date: "27 August 2026",
        version: "v0.4.2",
        title: "Stage 5: Needs You and answerable decisions",
        body: "Introduced the human attention surface and decisions a person could understand and answer."
      },
      {
        date: "27 August 2026",
        version: "v0.3.2",
        title: "Design foundation, sign-in, room shell, and presence",
        body: "Established the visual system, sign in, three part room shell, provable presence, and visibility into agent conversations."
      },
      {
        date: "27 August 2026",
        version: "v0.2.3",
        title: "Production authentication, workspace, and task controls",
        body: "Added production human authentication, authenticated workspace creation, agent listing, task dependencies, reply relationships, resume, and reassignment controls."
      },
      {
        date: "26 August 2026",
        version: "v0.2.2",
        title: "Reusable connector core and secure enrollment",
        body: "Extracted the connector core, secured enrollment, and exposed external agent liveness in the room."
      },
      {
        date: "25 August 2026",
        version: "v0.2.1",
        title: "Multiplayer room interface",
        body: "Added the first room interface for multiple humans and agents."
      },
      {
        date: "25 August 2026",
        version: "v0.1.3",
        title: "External Agent Gateway",
        body: "Created the provider neutral gateway that lets independently operated agents join rooms."
      },
      {
        date: "25 August 2026",
        version: "v0.1.2",
        title: "Human decisions and agent resume workflow",
        body: "Added human approval decisions and the workflow that resumes agent work afterward."
      },
      {
        date: "24 August 2026",
        version: "v0.1.1",
        title: "Durable agent runtime and worker",
        body: "Added the durable runtime and worker that preserve agent execution beyond one request."
      },
      {
        date: "24 August 2026",
        version: "v0.0.1",
        title: "Room core and realtime synchronization",
        body: "Established persistent room state and realtime synchronization as the first project stage."
      }
    ],
    milestone: {
      date: "3 September 2026",
      version: "v0.10.1",
      title: "First externally installable engineering release",
      body: "The macOS build passed Developer ID signing, Apple notarisation, stapling, and Gatekeeper acceptance on physical machines. Human sharing partially passed: two separate accounts joined the same persistent room and exchanged realtime messages. The historical GitHub release remains tagged v0.2.0, but its engineering stage is v0.10.1."
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
    date: "2026-10-01",
    title: "Multiplayer AI is shown publicly for the first time",
    body: "Published the first pre-release teaser for Multiplayer AI on LinkedIn as the product moves toward its first official public release. It has not officially launched yet."
  },
  {
    date: "2026-10-01",
    title: "Fresh-account onboarding reaches release-candidate quality",
    body: "Readiness checks, workspace creation, room creation, agent connection, first work, and resume behavior were brought together into the guided macOS onboarding flow."
  },
  {
    date: "2026-09-30",
    title: "Hermes and Codex CLI become the first supported public runtimes",
    body: "The public runtime experience now focuses on existing signed-in local agents, starting with Hermes and Codex CLI while broader support remains in development."
  },
  {
    date: "2026-09-29",
    title: "Room ownership, roles, and atomic agent moves",
    body: "Rooms gained one owner with admin and contributor roles and per-person sharing permission. Moving an agent between rooms became one server transition the Mac follows and resumes, preserving the agent's identity."
  },
  {
    date: "2026-09-25",
    version: "v2.0.1",
    title: "Multiplayer AI enters P2 Release Hardening",
    body: "P1 architecture, control, and security work is complete. P2 shifts the focus to release hygiene, macOS distribution, reliability, clean machine validation, and final release candidate work. Multiplayer AI is not publicly released yet."
  },
  {
    date: "2026-09-25",
    version: "v1.6.1",
    title: "P1-D closes after physical acceptance",
    body: "Physical acceptance closed the human control, project folder, grant, governance, audit, denial, and attention behavior phase. This completed the core P1 program."
  },
  {
    date: "2026-09-24",
    version: "v1.5.1",
    title: "P1-C completes the intelligent file permission gate",
    body: "Files outside approved project folders now require explicit per file approval, and approved requests return to the agent with the original operation available to retry."
  },
  {
    date: "2026-09-23",
    version: "v1.4.1",
    title: "P1-B local security passes physical acceptance",
    body: "The local agent security architecture passed physical end to end validation on macOS, including permission revocation, broker resilience, isolation boundaries, network protections, sandbox enforcement, runtime recovery, and security auditing. P1-B closed and P1-C followed as the next security phase."
  },
  {
    date: "2026-09-21",
    version: "v1.4.1",
    title: "P1-B enters final physical validation",
    body: "Hermes compatibility and tool exposure fixes covered realistic room launch paths, while the secure Mac build passed 18 of 18 installation and security checks. The remaining real agent reply path was later accepted on 23 September."
  },
  {
    date: "2026-09-20",
    version: "v1.4.1",
    title: "Physical testing finds and closes a stale build gap",
    body: "Build stamping, helper diagnostics, enforcement reporting, and stale connector refusal now make the installed app state visible and enforceable. A properly installed secure build passed all 18 installation and security checks."
  },
  {
    date: "2026-09-20",
    title: "Vision AI narrows its B2B field service direction",
    body: "A field service review narrowed the next product decision to technician service records, remote customer support, or a combined workflow. The working private iOS system already supports camera based guidance, natural voice interruption, visual grounding, and an equipment scoped enterprise edition."
  },
  {
    date: "2026-09-19",
    version: "v1.4.1",
    title: "Local broker security architecture implemented",
    body: "Agent filesystem, shell, code, network, and room actions moved behind policy checks, with per room runtime isolation, private network protection, and macOS sandbox execution. The architecture later passed physical acceptance on 23 September."
  },
  {
    date: "2026-09-18",
    version: "v1.3.1",
    title: "Server side security foundation deployed",
    body: "Room scoped capabilities, stronger workspace isolation, active session revocation, append only security auditing, and basic secret output blocking established the P1-A security foundation."
  },
  {
    date: "2026-09-03",
    version: "v0.10.1",
    title: "Multiplayer AI passes its first installable release acceptance test",
    body: "The first externally installable engineering release is signed, notarised, stapled, and accepted by Gatekeeper. Two separate human accounts joined the same persistent room and exchanged realtime messages. The historical GitHub tag remains v0.2.0; the engineering stage is v0.10.1."
  },
  {
    date: "2026-08-14",
    title: "Coleman decides when to stay quiet",
    body: "The proactive trigger engine now weighs whether an interruption is worth it before it speaks, and respects quiet hours. Silence turned out to be the harder behaviour to get right."
  },
  {
    date: "2026-09-08",
    version: "v1.0.1",
    title: "Agent rooms reach regression coverage",
    body: "The authorisation layer for shared agent rooms is under regression tests, so enrolment and membership changes cannot quietly widen access."
  },
  {
    date: "2026-08-24",
    title: "Wolf AI moved off simulation",
    body: "After an extended simulated run, the engine started operating with real capital under exposure limits and a kill switch."
  }
];
