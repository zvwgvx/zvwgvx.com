export type Project = {
  slug: string;
  name: string;
  label: string;
  category: string;
  affiliation: string;
  phase: string;
  description: string;
  introduction: string[];
  areas: string[];
  stack: string[];
  repository?: string;
  website?: string;
  selected: boolean;
};

export const projects: Project[] = [
  {
    slug: "aelia",
    name: "AELIA",
    label: "Cognitive architecture",
    category: "AI research",
    affiliation: "SENTIA Lab",
    phase: "Research / work in progress",
    description: "Research prototype exploring persistent autonomous digital entities with identity, affect and social cognition.",
    introduction: [
      "AELIA explores persistent autonomous digital entities with continuity of identity, self-directed goals and experience-driven behavior. Its cognitive architecture investigates perception, episodic/autobiographical memory, belief/world/self models, affective appraisal and deliberation.",
      "Research areas also include simulated affect, social relationships, Theory of Mind and computational models of consciousness-like behavior. The Python cognitive kernel is a research prototype; no claim is made about artificial consciousness or production readiness."
    ],
    areas: [
      "Persistent memory and belief formation",
      "Cognitive state and agent continuity",
      "Affective and social simulation",
      "Theory of Mind, social relationships and long-lived autonomy"
    ],
    stack: ["Python", "Cognitive architectures", "Agent systems", "State & memory"],
    repository: "https://github.com/sentialab-org/AELIA",
    selected: true
  },
  {
    slug: "rift",
    name: "RiFT",
    label: "Agentic security systems",
    category: "Security / AI",
    affiliation: "RiFT Research · SENTIA Lab",
    phase: "Active engineering",
    description: "Agent-assisted black-box web/API security research with MCP tooling, remote bridges and isolated execution.",
    introduction: [
      "RiFT is an agent-assisted black-box web/API security research framework. Work centers on integrating MCP-based tools, remote bridges, scoped execution and isolated sandboxes.",
      "The project is under active engineering. Features and integration boundaries continue to evolve and should not be interpreted as a stable security product."
    ],
    areas: [
      "Agent orchestration and tool selection",
      "Sandbox boundaries and execution safety",
      "Web and backend security assessment",
      "MCP and plugin-based tool integration"
    ],
    stack: ["Python", "Security testing", "Sandboxing", "MCP"],
    repository: "https://github.com/RiFT-Research/rift",
    selected: true
  },
  {
    slug: "lattice",
    name: "Lattice",
    label: "Distributed infrastructure",
    category: "Systems",
    affiliation: "SENTIA Lab",
    phase: "Early-stage",
    description: "Exploring peer-to-peer networking and lightweight coordination for heterogeneous edge and compute nodes.",
    introduction: [
      "Lattice is an early-stage distributed-systems project exploring peer-to-peer connectivity and coordination across heterogeneous edge and compute nodes.",
      "The project investigates networking and coordination mechanisms; a stable general-availability release is not claimed."
    ],
    areas: [
      "Peer-to-peer networking",
      "Coordination across edge and compute nodes",
      "Distributed systems and connectivity",
      "Cross-platform systems design"
    ],
    stack: ["Rust", "TypeScript", "P2P networking", "Distributed systems"],
    repository: "https://github.com/sentialab-org/lattice",
    selected: true
  },
  {
    slug: "9router",
    name: "9Router",
    label: "Open-source tooling",
    category: "Engineering",
    affiliation: "Open-source work",
    phase: "Open source",
    description: "Open-source work on Gemini-to-OpenAI response handling in AI routing tooling.",
    introduction: [
      "9Router is an AI model-routing project. My selected contribution concerns Gemini-to-OpenAI response handling.",
      "This page points to my public repository for the project. The upstream ecosystem and its contributors should be credited separately; a repository link does not imply sole authorship."
    ],
    areas: [
      "Interoperability between AI model APIs",
      "Gemini-to-OpenAI response handling",
      "Developer-oriented infrastructure"
    ],
    stack: ["JavaScript", "Node.js", "AI tooling"],
    repository: "https://github.com/zvwgvx/9router",
    selected: false
  },
  {
    slug: "opusmc",
    name: "Opus Client",
    label: "Client & runtime engineering",
    category: "Engineering",
    affiliation: "OpusMC",
    phase: "Side project",
    description: "Performance-oriented Minecraft client and runtime engineering, including Forge, rendering, input and networking.",
    introduction: [
      "Opus Client is a performance-oriented Minecraft client/runtime engineering project. Work involves Java/Forge integration, rendering, input and networking infrastructure, and modular design.",
      "It is a separate engineering track from my cognitive AI and security research work."
    ],
    areas: [
      "Java / Forge integration",
      "Rendering and input systems",
      "Networking infrastructure",
      "Modular client architecture and performance"
    ],
    stack: ["Java", "Forge", "Client runtime", "Networking"],
    repository: "https://github.com/project-opusmc",
    selected: false
  }
];

export const selectedProjects = projects.filter((project) => project.selected);
