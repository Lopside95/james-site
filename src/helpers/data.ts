const frontend = ["TypeScript", "React", "Next.js", "TailwindCSS", "SCSS"];
const backend = [
  "Node.js",
  "MySQL",
  "MongoDB",
  "Prisma ORM",
  "tRPC",
  "Express.js",
  "Knex.js",
];
const tools = [
  "Firebase",
  "Google Cloud Platform",
  "Docker",
  "Google Genkit",
  "Vitest",
  "GitHub Copilot",
  "Postman",
];

const stack = [...frontend, ...backend, ...tools];
const frontendMobile = [
  "TypeScript,",
  "React,",
  "Next.js,",
  "TailwindCSS,",
  "SCSS",
];
const backendMobile = [
  "Node.js,",
  "MySQL,",
  "MongoDB,",
  "Prisma ORM,",
  "tRPC,",
  "Express.js,",
  "Knex.js",
];
const toolsMobile = [
  "Firebase,",
  "Google Cloud Platform,",
  "Docker,",
  "Google Genkit,",
  "Vitest,",
  "GitHub Copilot,",
  "Postman,",
];
const stackMobile = [
  {
    title: "Frontend",
    val: frontend,
  },
  {
    title: "Backend",
    val: backend,
  },
  {
    title: "Tools",
    val: tools,
  },
];

export {
  frontend,
  backend,
  tools,
  stack,
  frontendMobile,
  backendMobile,
  toolsMobile,
  stackMobile,
};
