export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  mode: string;
  achievements: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  status?: string;
}

export const experiences: Experience[] = [
  {
    role: "Software Development Intern",
    company: "John Deere",
    period: "Feb 2025 — Jul 2026",
    location: "Brazil",
    mode: "Hybrid",
    achievements: [
      "Maintained and evolved internal corporate systems using Java with Spring Boot, SQL, and TypeScript with React.",
      "Implemented DevOps practices — configured CI/CD pipelines with GitHub Actions across team repositories.",
      "Created unit and end-to-end tests using Playwright, supporting software quality assurance.",
      "Analyzed and resolved bugs in mission-critical applications, ensuring business continuity.",
      "Upgraded legacy systems, resolving vulnerabilities and improving code quality.",
      "Collaborated with the technical team to optimize database queries and internal processes.",
    ],
  },
  {
    role: "Software Developer",
    company: "ISBET",
    period: "Jul 2022 — Nov 2024",
    location: "Brazil",
    mode: "On-site",
    achievements: [
      "Developed and maintained software solutions using Visual Basic, ASP (.NET), and SQL Server.",
      "Analyzed and resolved bugs in mission-critical applications.",
      "Collaborated actively with the team to optimize database queries and internal processes.",
    ],
  },
];

export const education: Education[] = [
  {
    degree: "IT Technician",
    institution: "FIEC",
    location: "Brazil",
    period: "Jul 2021 — Dec 2022",
  },
];
