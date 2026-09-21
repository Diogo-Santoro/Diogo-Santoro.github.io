export interface SkillGroup {
  category: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    category: "Languages & Frameworks",
    items: [
      "Java (Spring Boot)",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "Visual Basic",
      "ASP (.NET)",
      "Python",
      "Flask",
    ],
  },
  {
    category: "Infrastructure & DevOps",
    items: [
      "CI/CD Pipelines",
      "GitHub Actions",
      "Terraform",
      "Docker",
      "GitOps",
      "WireGuard",
      "Linux Administration",
    ],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MySQL", "SQL Server", "Prisma ORM", "Redis"],
  },
  {
    category: "Testing & Quality",
    items: ["Playwright", "Vitest", "Supertest", "Lighthouse CI", "End-to-end Testing"],
  },
  {
    category: "Tools & Practices",
    items: [
      "Git & GitHub",
      "DBeaver",
      "Postman",
      "Agile / Scrum",
      "Grafana",
      "Observability",
    ],
  },
];

export const languages = [
  { name: "Portuguese", level: "Native" },
  { name: "English", level: "Advanced / Professional" },
  { name: "Spanish", level: "Technical / Intermediate" },
];
