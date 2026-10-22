export type Project = {
  slug: string;
  name: string;
  label: string;
  category: string;
  affiliation: string;
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
    label: "Autonomous digital entities",
    category: "Cognitive AI research",
    affiliation: "SENTIA Lab",
    description: "Research into persistent autonomous digital entities, cognitive identity, simulated affect and social cognition.",
    introduction: [
      "AELIA investigates how an artificial entity might develop continuity of identity, internal models, independent goals and behavior shaped by experience over time.",
      "Its research spans memory and belief formation, self and world models, affective processes, social relationships, Theory of Mind and computational approaches to consciousness-like behavior. These questions concern computational models and do not equate simulation with consciousness."
    ],
    areas: [
      "Identity, continuity and long-term autonomy",
      "Memory, beliefs and self/world models",
      "Affect, emotion-like processes and social interaction",
      "Theory of Mind and computational models of consciousness"
    ],
    stack: ["Cognitive architectures", "Agent systems", "Memory & identity", "Social cognition"],
    repository: "https://github.com/sentialab-org/AELIA",
    selected: true
  },
  {
    slug: "rift",
    name: "RiFT",
    label: "Autonomous security research",
    category: "Security / AI",
    affiliation: "RiFT Research · SENTIA Lab",
    description: "Research into AI-assisted security assessment, vulnerability discovery and extensible security tooling.",
    introduction: [
      "RiFT explores the role of autonomous agents in security research across black-box and white-box web assessment, source-code analysis, reverse engineering, binary analysis and network-layer security.",
      "This research also examines vulnerability discovery, interoperable tool environments such as MCP, and the security boundaries needed for controlled experimentation."
    ],
    areas: [
      "Black-box and white-box web security assessment",
      "Source-code, binary and reverse-engineering research",
      "Vulnerability analysis and discovery",
      "Network security at Layer 2 and Layer 3",
      "Agent orchestration, tool interoperability and isolation"
    ],
    stack: ["Security research", "Program analysis", "MCP", "Sandboxing"],
    repository: "https://github.com/RiFT-Research/rift",
    selected: true
  },
  {
    slug: "lattice",
    name: "Lattice",
    label: "Peer-to-peer infrastructure",
    category: "Distributed systems",
    affiliation: "SENTIA Lab",
    description: "Exploring peer-to-peer networking and distributed coordination across heterogeneous devices and compute resources.",
    introduction: [
      "Lattice studies how devices and services can form a cooperative network across different environments, from edge nodes to larger compute systems.",
      "The emphasis is on connectivity, identity, trust, resource coordination and reliable communication without assuming a single central machine."
    ],
    areas: [
      "Peer-to-peer connectivity and discovery",
      "Node identity and trust",
      "Distributed resource coordination",
      "Heterogeneous systems and network resilience"
    ],
    stack: ["Networking", "P2P systems", "Distributed coordination", "Systems engineering"],
    repository: "https://github.com/sentialab-org/lattice",
    selected: true
  },
  {
    slug: "9router",
    name: "9Router",
    label: "Open-source AI tooling",
    category: "Open source",
    affiliation: "Open-source contributions",
    description: "Open-source contributions relating to AI model routing and interoperability between provider APIs.",
    introduction: [
      "9Router is part of the broader ecosystem of developer tools that connect coding workflows with multiple AI model providers.",
      "My work relates to compatibility between provider response formats and developer-facing interfaces. This is contribution work, not a claim of sole authorship."
    ],
    areas: [
      "Interoperability between model providers",
      "AI request and response interfaces",
      "Developer tooling"
    ],
    stack: ["JavaScript", "Node.js", "API interoperability"],
    repository: "https://github.com/zvwgvx/9router",
    selected: false
  },
  {
    slug: "opusmc",
    name: "Opus Client",
    label: "Client & runtime engineering",
    category: "Systems engineering",
    affiliation: "OpusMC",
    description: "Performance-focused Minecraft client and runtime engineering, with an emphasis on modularity and system efficiency.",
    introduction: [
      "Opus Client represents a separate engineering interest in the performance and architecture of interactive client software.",
      "Its scope includes runtime performance, rendering, input, networking and extensible client design."
    ],
    areas: [
      "Client architecture and modular design",
      "Rendering and runtime performance",
      "Input and networking systems",
      "Efficiency and reliability"
    ],
    stack: ["Java", "Client runtime", "Performance", "Networking"],
    repository: "https://github.com/project-opusmc",
    selected: false
  }
];

export const selectedProjects = projects.filter((project) => project.selected);
