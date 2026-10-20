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
    description: "An experimental cognitive architecture for persistent autonomous digital entities.",
    introduction: [
      "AELIA explores agents with persistent memory, evolving beliefs, internal state, emotion-like processes and social interaction. The research question is how these components can be organized into a coherent, long-lived artificial entity.",
      "The current implementation is a Python cognitive kernel. Its interfaces and architecture are still changing, and no production release is available."
    ],
    areas: [
      "Persistent memory and belief formation",
      "Cognitive state and agent continuity",
      "Affective and social simulation",
      "Evaluation of long-lived autonomous agents"
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
    phase: "Early development",
    description: "Research and engineering around AI-assisted security assessment, isolated execution and composable tooling.",
    introduction: [
      "RiFT is being designed as an extensible environment for security research with an emphasis on agent orchestration, controlled sandbox execution and tools exposed through consistent interfaces.",
      "Current areas of interest include web and backend assessment, bridge connectivity and structured tool integration. The public repository is at an early stage; these are directions rather than shipped capabilities."
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
    phase: "Linux-first pilot",
    description: "A cross-platform distributed resource network built around node identity, explicit consent and verifiable workloads.",
    introduction: [
      "Lattice investigates the coordination of machines and workloads across heterogeneous systems. The project emphasizes authenticated node identities, signed control messages, explicit owner selection and resource boundaries enforced on the participating node.",
      "The repository documents a Linux-first ownership pilot. Other platform acceptance work remains ongoing, so the project should not be interpreted as a generally available stable release."
    ],
    areas: [
      "Node identity and signed protocols",
      "Network coordination and overlay connectivity",
      "Distributed resource and workload policies",
      "Artifact verification and local consent"
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
    description: "Work with tooling for routing AI coding requests across models and providers.",
    introduction: [
      "9Router provides a routing layer for AI development tools, with provider interoperability and fallback behavior among its areas of focus.",
      "This page points to my public repository for the project. The upstream ecosystem and its contributors should be credited separately; a repository link does not imply sole authorship."
    ],
    areas: [
      "Interoperability between AI model APIs",
      "Routing and fallback logic",
      "Developer-oriented infrastructure"
    ],
    stack: ["JavaScript", "Node.js", "AI tooling"],
    repository: "https://github.com/zvwgvx/9router",
    selected: false
  },
  {
    slug: "opusmc",
    name: "OpusMC",
    label: "Side project",
    category: "Engineering",
    affiliation: "Independent / side project",
    phase: "Side project",
    description: "Exploratory Minecraft client and related engineering work.",
    introduction: [
      "OpusMC is a smaller side project outside my primary AI and systems research focus.",
      "Details and source repositories are maintained under the project's GitHub organization."
    ],
    areas: [
      "Client-side software engineering",
      "Tooling and experimental development"
    ],
    stack: ["Software engineering", "Client development"],
    repository: "https://github.com/project-opusmc",
    selected: false
  }
];

export const selectedProjects = projects.filter((project) => project.selected);
