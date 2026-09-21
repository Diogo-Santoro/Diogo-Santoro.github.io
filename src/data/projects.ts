export type ProjectCategory =
  | "Frontend"
  | "Backend"
  | "Full-Stack"
  | "DevOps"
  | "Games";

export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  category: ProjectCategory;
  techStack: string[];
  githubUrl: string;
  featured: boolean;
  highlights: string[];
}

export const projects: Project[] = [
  {
    slug: "santoro-servicos",
    title: "Santoro Serviços",
    description:
      "Modern landing page for an occupational physiotherapy business, built with React 19 and enterprise-grade architecture.",
    longDescription:
      "A high-performance landing page created for Santoro Serviços, an occupational physiotherapy practice. The project was architected with enterprise-ready patterns — full separation of concerns with centralized content dictionaries, granular componentization, and end-to-end testing with Playwright. Lighthouse CI runs in the GitHub Actions pipeline to enforce performance budgets on every commit.",
    category: "Frontend",
    techStack: ["React 19", "Vite", "TypeScript", "Tailwind CSS v4", "Playwright", "GitHub Actions"],
    githubUrl: "https://github.com/Diogo-Santoro/SantoroServicos",
    featured: true,
    highlights: [
      "Enterprise-ready component architecture with centralized data dictionaries",
      "Lighthouse CI pipeline enforcing performance budgets",
      "End-to-end testing with Playwright",
      "Fully responsive with fluid typography and accessible markup",
    ],
  },
  {
    slug: "sicd",
    title: "SICD Santoro",
    description:
      "Institutional website for a consulting firm specializing in public policy, strategic projects, and social impact.",
    longDescription:
      "Multi-page institutional website for SICD Santoro — Instituto & Consultoria, a firm founded by Gislaine Alfonso Santoro. Features a complete design system, contact form integration with a backend microservice, and comprehensive testing. Built with a focus on accessibility, SEO, and content management through structured data files.",
    category: "Frontend",
    techStack: ["React", "Vite", "TypeScript", "Lighthouse CI", "Playwright"],
    githubUrl: "https://github.com/Diogo-Santoro/SICD",
    featured: true,
    highlights: [
      "Complete design system with consistent tokens and utilities",
      "Contact form integrated with VADER-Sender backend",
      "End-to-end test suite with Playwright",
      "SEO-optimized with structured data and meta management",
    ],
  },
  {
    slug: "nlw-rocketseat",
    title: "NLW — RocketSeat",
    description:
      "Full-stack application with web, mobile, and server components built during RocketSeat's Next Level Week event.",
    longDescription:
      "A complete full-stack application developed during RocketSeat's Next Level Week intensive — one of Brazil's largest developer education events. The project spans three layers: a React Native mobile app with Expo, a Node.js backend server, and a web interface. It demonstrates the ability to build and connect multiple platforms under tight deadlines with modern tooling.",
    category: "Full-Stack",
    techStack: ["React Native", "Expo", "Node.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/Diogo-Santoro/NLW-RocketSeat",
    featured: true,
    highlights: [
      "Cross-platform: web + mobile + server in a single monorepo",
      "React Native mobile app with Expo",
      "Node.js backend API",
      "Built during an intensive event under tight deadlines",
    ],
  },
  {
    slug: "student-management-sys",
    title: "Student Management System",
    description:
      "CRUD system built with Spring Boot, Thymeleaf, and MySQL for managing student records.",
    longDescription:
      "A full-featured student management application implementing CRUD operations with a clean MVC architecture. The backend uses Java with Spring Boot and communicates with a MySQL database. The frontend is rendered server-side using Thymeleaf templates. The project demonstrates solid understanding of the Spring ecosystem, relational database design, and server-rendered web applications.",
    category: "Backend",
    techStack: ["Java", "Spring Boot", "Thymeleaf", "MySQL"],
    githubUrl: "https://github.com/Diogo-Santoro/StudentManagementSys",
    featured: true,
    highlights: [
      "Clean MVC architecture with Spring Boot",
      "Server-side rendering with Thymeleaf templates",
      "Full CRUD operations with MySQL persistence",
      "RESTful design principles",
    ],
  },
  {
    slug: "vader-sender",
    title: "VADER-Sender",
    description:
      "Self-hosted form microservice replacing SaaS tools like Formspree, deployed on Oracle Cloud free tier.",
    longDescription:
      "A production-grade form submission microservice built to replace third-party services like Formspree and Formbricks. VADER-Sender receives form submissions from landing pages, stores them as leads in PostgreSQL via Prisma ORM, and forwards them to destination emails through the Brevo transactional API. It includes Redis-backed rate limiting and idempotency, comprehensive security hardening with Helmet and CORS, and full observability through Grafana Cloud with Alloy and prom-client. Deployed on Oracle Cloud's Always Free Tier — zero cost, full control.",
    category: "Backend",
    techStack: [
      "Node.js",
      "TypeScript",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "Terraform",
      "Vitest",
      "Grafana",
    ],
    githubUrl: "https://github.com/Diogo-Santoro/VADER-Sender",
    featured: false,
    highlights: [
      "98%+ test coverage with Vitest and Supertest",
      "Redis-backed rate limiting and idempotency",
      "Full observability with Grafana Cloud, Alloy, and prom-client",
      "Infrastructure as Code with Terraform for Oracle Cloud deployment",
    ],
  },
  {
    slug: "nucleus",
    title: "Nucleus",
    description:
      "AI/RAG Gateway — a stateless Spring Boot backend providing centralized LLM access and semantic caching.",
    longDescription:
      "Nucleus is the core AI Gateway for the Organella ecosystem. It's a stateless Spring Boot Java backend that centralizes access to LLMs (Google Gemini) and local RAG operations for independent downstream microservices. Nucleus is completely decoupled from business logic — it handles prompt management, AI tool execution, PDF parsing, and semantic caching, exposing a unified, API-key-authenticated REST API.",
    category: "Backend",
    techStack: ["Java", "Spring Boot", "Google Gemini", "RAG", "REST API"],
    githubUrl: "https://github.com/Diogo-Santoro/Nucleus",
    featured: false,
    highlights: [
      "Centralized AI gateway decoupled from business logic",
      "Semantic caching for efficient LLM usage",
      "PDF parsing and RAG operations",
      "API-key authentication and secure REST interface",
    ],
  },
  {
    slug: "email-triage",
    title: "EmailTriage",
    description:
      "AI email classification microservice that classifies incoming emails, determines severity, and drafts replies.",
    longDescription:
      "EmailTriage is an autonomous microservice (Organella) that integrates with n8n workflow automation to classify incoming emails, determine their severity, and draft contextual replies. It delegates all AI processing, RAG operations, and semantic caching to the Nucleus Gateway via HTTP, maintaining complete separation from vendor-specific AI SDKs. Part of the broader Organella ecosystem architecture.",
    category: "Backend",
    techStack: ["TypeScript", "n8n", "REST API", "Nucleus Integration"],
    githubUrl: "https://github.com/Diogo-Santoro/EmailTriage",
    featured: false,
    highlights: [
      "Autonomous microservice in the Organella ecosystem",
      "n8n workflow integration for email processing",
      "AI-powered classification and reply drafting",
      "Fully decoupled from AI vendor SDKs via Nucleus Gateway",
    ],
  },
  {
    slug: "homelab",
    title: "Project Sovereign",
    description:
      "Self-hosting infrastructure managed via GitOps — cloud storage, media, AI, and home automation.",
    longDescription:
      "Project Sovereign is the central repository for a complete self-hosting infrastructure. Using GitOps methodology, it manages provisioning and documentation for a personal infrastructure stack spanning cloud storage, media streaming, gaming, AI, and home automation. The architecture follows strict principles: sensitive data stays on the local network, external traffic routes through a VPS acting as a proxy, all inter-node communication is encrypted via WireGuard/Tailscale, and every change is Infrastructure as Code — the server state must always reflect the main branch.",
    category: "DevOps",
    techStack: ["GitOps", "WireGuard", "Tailscale", "Terraform", "Docker", "Linux"],
    githubUrl: "https://github.com/Diogo-Santoro/homelab",
    featured: false,
    highlights: [
      "GitOps-driven infrastructure management",
      "Encrypted tunnel architecture with WireGuard/Tailscale",
      "Strict isolation: local network never exposed directly",
      "Infrastructure as Code — server state reflects main branch",
    ],
  },
  {
    slug: "job-project",
    title: "Job Platform",
    description:
      "Job platform with a Next.js web frontend and a React Native mobile app.",
    longDescription:
      "A job recruitment platform built with both web and mobile interfaces. The web frontend uses Next.js with TypeScript for server-rendered pages and optimal SEO. The mobile companion app is built with React Native for cross-platform availability. The project demonstrates full-stack development across multiple platforms with shared business logic.",
    category: "Full-Stack",
    techStack: ["Next.js", "TypeScript", "React Native"],
    githubUrl: "https://github.com/Diogo-Santoro/JobProject",
    featured: false,
    highlights: [
      "Next.js web frontend with SSR",
      "React Native mobile companion app",
      "Cross-platform architecture",
    ],
  },
  {
    slug: "pyflask-project",
    title: "Flask E-Commerce",
    description:
      "E-commerce platform built with Python and Flask, featuring a full relational database schema.",
    longDescription:
      "A complete e-commerce platform built with Python's Flask framework. Features a comprehensive relational database design covering products, categories, customers, orders, payments, shopping carts, reviews, and favorites. The application follows an MVC pattern with dedicated controllers, models, and templates directories.",
    category: "Full-Stack",
    techStack: ["Python", "Flask", "SQL", "HTML/CSS"],
    githubUrl: "https://github.com/Diogo-Santoro/PyFlaskProject",
    featured: false,
    highlights: [
      "Comprehensive e-commerce data model (8+ tables)",
      "MVC architecture with Flask blueprints",
      "Full payment and order management flow",
    ],
  },
  {
    slug: "java-crud",
    title: "Java CRUD API",
    description:
      "RESTful CRUD API built with Java and Spring Boot, tested with Postman.",
    longDescription:
      "A clean RESTful API implementing CRUD operations for user management. Built with Java and Spring Boot, backed by a MySQL database. All endpoints are designed following REST conventions and thoroughly tested with Postman. A foundational project demonstrating Spring Boot's auto-configuration, dependency injection, and JPA/Hibernate integration.",
    category: "Backend",
    techStack: ["Java", "Spring Boot", "MySQL", "REST API"],
    githubUrl: "https://github.com/Diogo-Santoro/javaCrud",
    featured: false,
    highlights: [
      "RESTful API design with Spring Boot",
      "MySQL persistence with JPA/Hibernate",
      "Postman-tested endpoints",
    ],
  },
  {
    slug: "banking-application",
    title: "Banking Application",
    description:
      "Console-based banking system built in Java with deposit, withdrawal, and balance operations.",
    longDescription:
      "A Java banking application simulating core banking operations — deposits, withdrawals, balance inquiries, and account management. Built as a console application using IntelliJ IDEA, it demonstrates object-oriented design principles, data encapsulation, and fundamental financial transaction logic.",
    category: "Backend",
    techStack: ["Java"],
    githubUrl: "https://github.com/Diogo-Santoro/BankingApplication",
    featured: false,
    highlights: [
      "Object-oriented banking logic",
      "Transaction management (deposit, withdraw, balance)",
    ],
  },
  {
    slug: "snake-game",
    title: "Snake Game",
    description: "Classic snake game built in Java with real-time graphics.",
    longDescription:
      "A recreation of the classic Snake game built entirely in Java. Features real-time rendering, keyboard input handling, collision detection, and score tracking. A fun project demonstrating game loop architecture, 2D graphics with Java Swing, and event-driven programming.",
    category: "Games",
    techStack: ["Java", "Swing"],
    githubUrl: "https://github.com/Diogo-Santoro/SnakeGame",
    featured: false,
    highlights: [
      "Real-time game loop and rendering",
      "Collision detection and score tracking",
      "Keyboard input handling with Java AWT events",
    ],
  },
  {
    slug: "brick-breaker-game",
    title: "Brick Breaker",
    description: "Brick breaker arcade game built in Java.",
    longDescription:
      "An arcade-style brick breaker game developed in Java. Players control a paddle to bounce a ball and break bricks. Features multiple levels of brick layouts, ball physics, paddle collision angles, and progressive difficulty. Built with Java's graphics libraries for real-time 2D rendering.",
    category: "Games",
    techStack: ["Java", "Swing"],
    githubUrl: "https://github.com/Diogo-Santoro/BrickBreakerGame",
    featured: false,
    highlights: [
      "Ball physics and paddle collision mechanics",
      "Progressive difficulty levels",
      "2D rendering with Java Swing",
    ],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export const projectCategories: ProjectCategory[] = [
  "Frontend",
  "Backend",
  "Full-Stack",
  "DevOps",
  "Games",
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsByCategory(category: ProjectCategory): Project[] {
  return projects.filter((p) => p.category === category);
}
