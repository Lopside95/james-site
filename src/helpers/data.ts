const frontend = ["TypeScript", "React", "Next.js", "TailwindCSS", "Sass"];
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
  "Genkit",
  "Vitest",
  "GitHub Copilot",
  "Postman",
  "Git",
];

const stack = [...frontend, ...backend, ...tools];
const frontendMobile = [
  "TypeScript,",
  "React,",
  "Next.js,",
  "TailwindCSS,",
  "Sass",
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
  "Firebase",
  "Genkit",
  "Vitest,",
  "GitHub Copilot,",
  "Postman",
  "Git,",
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
