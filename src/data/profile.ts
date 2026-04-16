export type Lang = "es" | "en" | "pt";

type Experience = {
  company: string;
  role: string;
  location: string;
  period: string;
  bullets: string[];
};

type Education = {
  institution: string;
  program: string;
  location: string;
  period: string;
  bullets: string[];
};

type Project = {
  id: string;
  title: string;
  year: string;
  stack: string[];
  summary: string;
  details: string[];
  github?: string;
};

type Award = {
  title: string;
  result: string;
  bullets: string[];
};

type SkillGroup = {
  label: string;
  items: string[];
};

type ProfileContent = {
  metaTitle: string;
  headline: string;
  summary: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  education: Education[];
  experience: Experience[];
  projects: Project[];
  awards: Award[];
  leadership: string[];
  skillGroups: SkillGroup[];
  languages: { name: string; level: string }[];
};

export const profile: Record<Lang, ProfileContent> = {
  es: {
    metaTitle: "Ingeniería de software e IA aplicada",
    headline: "Software engineer enfocado en backend, sistemas distribuidos e IA aplicada.",
    summary:
      "Estudiante de cuarto año de Ciencia de la Computación en la UNI. Me adapto rápido, trabajo con autonomía y busco construir software útil con impacto real en Perú y América Latina.",
    location: "Lima, Perú",
    email: "sergiopezoj@gmail.com",
    phone: "+51 969 672 749",
    linkedin: "linkedin.com/in/sergio-pezo",
    github: "github.com/thsergitox",
    education: [
      {
        institution: "Universidad Nacional de Ingeniería",
        program: "Ciencia de la Computación · 8.º ciclo · Décimo Superior",
        location: "Lima, Perú",
        period: "Abr 2022 - Actualidad",
        bullets: [
          "Ingresé con 16 años por el examen IEN preparándome con YouTube y libros.",
          "Cursos relevantes: IA, concurrente y distribuida, algoritmos, estructuras de datos y desarrollo de software.",
        ],
      },
      {
        institution: "Universidade Estadual de Campinas (UNICAMP)",
        program: "Intercambio académico · Instituto de Computação",
        location: "Sao Paulo, Brasil",
        period: "Jul 2025 - Nov 2025",
        bullets: [
          "Trabajé con estudiantes y profesores de pregrado y posgrado en un entorno interdisciplinario.",
          "Cursos: sistemas distribuidos, IoT, verificación y testeo de software, bioinformática.",
        ],
      },
    ],
    experience: [
      {
        company: "CoFoundy",
        role: "Software Engineer",
        location: "Remoto",
        period: "Mar 2025 - Dic 2025",
        bullets: [
          "Lideré el diseño e implementación del backend principal de una plataforma de automatización de pedidos para restaurantes.",
          "Migré una operación manual basada en WhatsApp a un sistema digital escalable usado por decenas de clientes.",
          "Reducí el procesamiento de pedidos de ~30 minutos a casi instantáneo.",
          "Diseñé microservicios con NestJS, autenticación, lógica de negocio y despliegue con GitHub Actions + Railway.",
        ],
      },
    ],
    projects: [
      {
        id: "1",
        title: "Sistema IoT con Azure Cloud Services",
        year: "2025",
        stack: ["Azure IoT Hub", "Azure Functions", "MQTT", "WebSockets", "Next.js"],
        summary: "Arquitectura IoT escalable con ingestión y visualización en tiempo real desarrollada durante el intercambio en UNICAMP.",
        details: [
          "Diseñé la arquitectura usando Azure IoT Hub como broker MQTT para múltiples dispositivos.",
          "Implementé funciones serverless para procesar y almacenar datos en tiempo real.",
          "Construí un dashboard en Next.js con dominio propio y visualización en vivo.",
        ],
      },
      {
        id: "2",
        title: "Sistema de Log Distribuido con Algoritmos de Consenso",
        year: "2025",
        stack: ["Python", "GCP", "Lamport", "Bully"],
        summary: "Sistema distribuido desplegado en múltiples máquinas virtuales para evaluar consenso, ordering y throughput.",
        details: [
          "Implementé relojes lógicos de Lamport para ordenar eventos distribuidos.",
          "Desarrollé el algoritmo Bully para elección de líder.",
          "Evalué latencia y comportamiento entre zonas geográficas sobre Google Cloud Platform.",
        ],
      },
      {
        id: "3",
        title: "TutorAI",
        year: "2025",
        stack: ["FastAPI", "ElevenLabs"],
        summary: "Tutor adaptativo para aprendizaje de inglés con IA y pruebas de usabilidad con estudiantes universitarios.",
        details: [
          "Desarrollé un asistente adaptativo para práctica de inglés con feedback personalizado.",
          "Integré generación de contenido y voz con ElevenLabs.",
          "Validé la experiencia con pruebas de uso en un curso de Interacción Humano Computador.",
        ],
      },
      {
        id: "4",
        title: "Sistema Multiagente con CRDTs",
        year: "2024",
        stack: ["Redis", "LangGraph", "Yjs"],
        summary: "Backend para colaboración en tiempo real y agentes inteligentes sobre edición compartida con CRDTs.",
        details: [
          "Diseñé arquitectura para edición colaborativa en tiempo real usando CRDTs.",
          "Implementé APIs para agentes inteligentes y sincronización de estado.",
          "Participé como backend engineer del sistema presentado en feria ABET.",
        ],
        github: "https://github.com/thsergitox",
      },
      {
        id: "5",
        title: "Plataforma de Formularios con IA",
        year: "2024",
        stack: ["FastAPI", "PostgreSQL", "JWT", "AI"],
        summary: "Sistema de generación dinámica de formularios con autenticación y roles para gestión segura de datos.",
        details: [
          "Desarrollé el backend central para generación dinámica de formularios.",
          "Implementé autenticación, autorización por roles y persistencia segura.",
        ],
        github: "https://github.com/thsergitox",
      },
    ],
    awards: [
      {
        title: "NASA Space Apps Challenge Campinas 2025",
        result: "Semifinalista",
        bullets: [
          "Top 16 de más de 150 equipos.",
          "Lideré un equipo internacional con integrantes de Brasil, Bolivia y Perú.",
        ],
      },
      {
        title: "Hackathon Centro Internacional de la Papa",
        result: "Finalista Mundial",
        bullets: [
          "Construí un sistema de predicción agrícola con ML.",
          "Implementé backend y pipeline de datos de punta a punta.",
        ],
      },
      {
        title: "Hackathon IMCA",
        result: "1.er lugar",
        bullets: [
          "Desarrollé una solución con redes neuronales para optimización de riego.",
        ],
      },
    ],
    leadership: [
      "En ACECOM desarrollé automatizaciones activamente usadas, incluyendo cron jobs e integraciones con WhatsApp y Discord.",
      "Mentoricé a nuevos miembros en desarrollo de software y participé en eventos académicos sobre redes y arquitectura.",
    ],
    skillGroups: [
      { label: "Lenguajes", items: ["TypeScript", "Python", "Java", "Go"] },
      { label: "Backend", items: ["NestJS", "FastAPI", "Spring Boot", "Express"] },
      { label: "Frontend", items: ["React", "Next.js", "Remix", "Astro"] },
      { label: "Cloud & DevOps", items: ["AWS", "Azure", "GCP", "Docker", "CI/CD"] },
      { label: "Bases de datos", items: ["PostgreSQL", "MongoDB", "Redis"] },
      { label: "IA", items: ["TensorFlow", "LangGraph", "Claude Code", "Codex"] },
    ],
    languages: [
      { name: "Español", level: "Nativo" },
      { name: "Inglés", level: "Avanzado" },
      { name: "Portugués", level: "Avanzado" },
    ],
  },
  en: {
    metaTitle: "Software engineering and applied AI",
    headline: "Software engineer focused on backend systems, distributed systems, and applied AI.",
    summary:
      "Fourth-year Computer Science student at UNI. I adapt quickly, work with ownership, and aim to build useful software with real impact in Peru and Latin America.",
    location: "Lima, Peru",
    email: "sergiopezoj@gmail.com",
    phone: "+51 969 672 749",
    linkedin: "linkedin.com/in/sergio-pezo",
    github: "github.com/thsergitox",
    education: [
      {
        institution: "National University of Engineering",
        program: "Computer Science · 8th semester · Top 10%",
        location: "Lima, Peru",
        period: "Apr 2022 - Present",
        bullets: [
          "Entered at 16 through the national early admission exam, preparing with YouTube and books.",
          "Relevant coursework: AI, concurrent and distributed programming, algorithms, data structures, and software development.",
        ],
      },
      {
        institution: "State University of Campinas (UNICAMP)",
        program: "Academic exchange · Institute of Computing",
        location: "Sao Paulo, Brazil",
        period: "Jul 2025 - Nov 2025",
        bullets: [
          "Worked with undergraduate and graduate students and faculty in an interdisciplinary environment.",
          "Coursework: distributed systems, IoT, software verification and testing, bioinformatics.",
        ],
      },
    ],
    experience: [
      {
        company: "CoFoundy",
        role: "Software Engineer",
        location: "Remote",
        period: "Mar 2025 - Dec 2025",
        bullets: [
          "Led the design and implementation of the main backend for a restaurant order automation platform.",
          "Migrated a WhatsApp-based manual workflow into a scalable digital system used by dozens of clients.",
          "Reduced order processing time from roughly 30 minutes to near-instant execution.",
          "Designed NestJS microservices, auth, core business logic, and production deployment with GitHub Actions + Railway.",
        ],
      },
    ],
    projects: [
      {
        id: "1",
        title: "IoT System with Azure Cloud Services",
        year: "2025",
        stack: ["Azure IoT Hub", "Azure Functions", "MQTT", "WebSockets", "Next.js"],
        summary: "Scalable IoT architecture with real-time ingestion and visualization, built during my exchange at UNICAMP.",
        details: [
          "Designed the architecture around Azure IoT Hub as the MQTT broker for multiple devices.",
          "Implemented serverless functions for real-time processing and storage.",
          "Built a Next.js dashboard with a custom domain and live visualization.",
        ],
      },
      {
        id: "2",
        title: "Distributed Log System with Consensus Algorithms",
        year: "2025",
        stack: ["Python", "GCP", "Lamport", "Bully"],
        summary: "Distributed system deployed across multiple virtual machines to evaluate consensus, ordering, and throughput.",
        details: [
          "Implemented Lamport logical clocks for distributed event ordering.",
          "Built the Bully algorithm for leader election.",
          "Measured latency and behavior across geographical zones on Google Cloud Platform.",
        ],
      },
      {
        id: "3",
        title: "TutorAI",
        year: "2025",
        stack: ["FastAPI", "ElevenLabs"],
        summary: "Adaptive English-learning tutor with AI support and usability testing with university students.",
        details: [
          "Built an adaptive assistant for English practice with personalized feedback.",
          "Integrated content generation and voice workflows with ElevenLabs.",
          "Validated the experience through usability tests in a Human-Computer Interaction course.",
        ],
      },
      {
        id: "4",
        title: "Multi-Agent System with CRDTs",
        year: "2024",
        stack: ["Redis", "LangGraph", "Yjs"],
        summary: "Backend for real-time collaboration and intelligent agents on top of CRDT-based shared editing.",
        details: [
          "Designed the collaborative architecture using CRDTs for real-time editing.",
          "Implemented APIs for intelligent agents and state synchronization.",
          "Worked as backend engineer on the system presented at the ABET fair.",
        ],
        github: "https://github.com/thsergitox",
      },
      {
        id: "5",
        title: "AI-Powered Form Platform",
        year: "2024",
        stack: ["FastAPI", "PostgreSQL", "JWT", "AI"],
        summary: "Dynamic form generation system with authentication and roles for secure data management.",
        details: [
          "Built the core backend for dynamic form generation.",
          "Implemented authentication, role-based authorization, and secure persistence.",
        ],
        github: "https://github.com/thsergitox",
      },
    ],
    awards: [
      {
        title: "NASA Space Apps Challenge Campinas 2025",
        result: "Semifinalist",
        bullets: [
          "Top 16 out of more than 150 teams.",
          "Led an international team with members from Brazil, Bolivia, and Peru.",
        ],
      },
      {
        title: "International Potato Center Hackathon",
        result: "World Finalist",
        bullets: [
          "Built an agricultural prediction system with machine learning.",
          "Implemented the backend and end-to-end data pipeline.",
        ],
      },
      {
        title: "IMCA Hackathon",
        result: "1st place",
        bullets: [
          "Built a neural-network-based irrigation optimization solution.",
        ],
      },
    ],
    leadership: [
      "At ACECOM I built automations in active use, including cron jobs and WhatsApp/Discord integrations.",
      "I mentored new members in software development and presented networking and architecture concepts at academic events.",
    ],
    skillGroups: [
      { label: "Languages", items: ["TypeScript", "Python", "Java", "Go"] },
      { label: "Backend", items: ["NestJS", "FastAPI", "Spring Boot", "Express"] },
      { label: "Frontend", items: ["React", "Next.js", "Remix", "Astro"] },
      { label: "Cloud & DevOps", items: ["AWS", "Azure", "GCP", "Docker", "CI/CD"] },
      { label: "Databases", items: ["PostgreSQL", "MongoDB", "Redis"] },
      { label: "AI", items: ["TensorFlow", "LangGraph", "Claude Code", "Codex"] },
    ],
    languages: [
      { name: "Spanish", level: "Native" },
      { name: "English", level: "Advanced" },
      { name: "Portuguese", level: "Advanced" },
    ],
  },
  pt: {
    metaTitle: "Engenharia de software e IA aplicada",
    headline: "Software engineer focado em backend, sistemas distribuídos e IA aplicada.",
    summary:
      "Estudante do quarto ano de Ciência da Computação na UNI. Adapto-me rápido, trabalho com autonomia e busco construir software útil com impacto real no Peru e na América Latina.",
    location: "Lima, Peru",
    email: "sergiopezoj@gmail.com",
    phone: "+51 969 672 749",
    linkedin: "linkedin.com/in/sergio-pezo",
    github: "github.com/thsergitox",
    education: [
      {
        institution: "Universidade Nacional de Engenharia",
        program: "Ciência da Computação · 8.º semestre · Top 10%",
        location: "Lima, Peru",
        period: "Abr 2022 - Atualidade",
        bullets: [
          "Entrei aos 16 anos pelo exame nacional antecipado, estudando com YouTube e livros.",
          "Disciplinas relevantes: IA, programação concorrente e distribuída, algoritmos, estruturas de dados e desenvolvimento de software.",
        ],
      },
      {
        institution: "Universidade Estadual de Campinas (UNICAMP)",
        program: "Intercâmbio acadêmico · Instituto de Computação",
        location: "Sao Paulo, Brasil",
        period: "Jul 2025 - Nov 2025",
        bullets: [
          "Trabalhei com estudantes e professores de graduação e pós-graduação em ambiente interdisciplinar.",
          "Disciplinas: sistemas distribuídos, IoT, verificação e testes de software, bioinformática.",
        ],
      },
    ],
    experience: [
      {
        company: "CoFoundy",
        role: "Software Engineer",
        location: "Remoto",
        period: "Mar 2025 - Dez 2025",
        bullets: [
          "Liderei o desenho e a implementação do backend principal de uma plataforma de automação de pedidos para restaurantes.",
          "Migrei um fluxo manual baseado em WhatsApp para um sistema digital escalável usado por dezenas de clientes.",
          "Reduzi o tempo de processamento de pedidos de cerca de 30 minutos para quase instantâneo.",
          "Projetei microsserviços com NestJS, autenticação, lógica de negócio e deploy com GitHub Actions + Railway.",
        ],
      },
    ],
    projects: [
      {
        id: "1",
        title: "Sistema IoT com Azure Cloud Services",
        year: "2025",
        stack: ["Azure IoT Hub", "Azure Functions", "MQTT", "WebSockets", "Next.js"],
        summary: "Arquitetura IoT escalável com ingestão e visualização em tempo real, construída durante o intercâmbio na UNICAMP.",
        details: [
          "Desenhei a arquitetura usando Azure IoT Hub como broker MQTT para múltiplos dispositivos.",
          "Implementei funções serverless para processamento e armazenamento em tempo real.",
          "Construí um dashboard em Next.js com domínio próprio e visualização ao vivo.",
        ],
      },
      {
        id: "2",
        title: "Sistema de Log Distribuído com Algoritmos de Consenso",
        year: "2025",
        stack: ["Python", "GCP", "Lamport", "Bully"],
        summary: "Sistema distribuído implantado em múltiplas máquinas virtuais para avaliar consenso, ordenação e throughput.",
        details: [
          "Implementei relógios lógicos de Lamport para ordenação de eventos distribuídos.",
          "Desenvolvi o algoritmo Bully para eleição de líder.",
          "Avaliei latência e comportamento entre zonas geográficas na Google Cloud Platform.",
        ],
      },
      {
        id: "3",
        title: "TutorAI",
        year: "2025",
        stack: ["FastAPI", "ElevenLabs"],
        summary: "Tutor adaptativo para aprendizado de inglês com IA e testes de usabilidade com estudantes universitários.",
        details: [
          "Desenvolvi um assistente adaptativo para prática de inglês com feedback personalizado.",
          "Integrei geração de conteúdo e fluxos de voz com ElevenLabs.",
          "Validei a experiência com testes de usabilidade em um curso de Interação Humano-Computador.",
        ],
      },
      {
        id: "4",
        title: "Sistema Multiagente com CRDTs",
        year: "2024",
        stack: ["Redis", "LangGraph", "Yjs"],
        summary: "Backend para colaboração em tempo real e agentes inteligentes sobre edição compartilhada com CRDTs.",
        details: [
          "Desenhei a arquitetura colaborativa usando CRDTs para edição em tempo real.",
          "Implementei APIs para agentes inteligentes e sincronização de estado.",
          "Atuei como backend engineer no sistema apresentado na feira ABET.",
        ],
        github: "https://github.com/thsergitox",
      },
      {
        id: "5",
        title: "Plataforma de Formulários com IA",
        year: "2024",
        stack: ["FastAPI", "PostgreSQL", "JWT", "AI"],
        summary: "Sistema de geração dinâmica de formulários com autenticação e papéis para gestão segura de dados.",
        details: [
          "Desenvolvi o backend principal para geração dinâmica de formulários.",
          "Implementei autenticação, autorização por papéis e persistência segura.",
        ],
        github: "https://github.com/thsergitox",
      },
    ],
    awards: [
      {
        title: "NASA Space Apps Challenge Campinas 2025",
        result: "Semifinalista",
        bullets: [
          "Top 16 entre mais de 150 equipes.",
          "Liderei uma equipe internacional com integrantes do Brasil, Bolívia e Peru.",
        ],
      },
      {
        title: "Hackathon Centro Internacional da Batata",
        result: "Finalista Mundial",
        bullets: [
          "Construí um sistema de predição agrícola com aprendizado de máquina.",
          "Implementei backend e pipeline de dados de ponta a ponta.",
        ],
      },
      {
        title: "Hackathon IMCA",
        result: "1.º lugar",
        bullets: [
          "Desenvolvi uma solução com redes neurais para otimização de irrigação.",
        ],
      },
    ],
    leadership: [
      "Na ACECOM desenvolvi automações em uso ativo, incluindo cron jobs e integrações com WhatsApp e Discord.",
      "Mentorei novos membros em desenvolvimento de software e participei de eventos acadêmicos sobre redes e arquitetura.",
    ],
    skillGroups: [
      { label: "Linguagens", items: ["TypeScript", "Python", "Java", "Go"] },
      { label: "Backend", items: ["NestJS", "FastAPI", "Spring Boot", "Express"] },
      { label: "Frontend", items: ["React", "Next.js", "Remix", "Astro"] },
      { label: "Cloud & DevOps", items: ["AWS", "Azure", "GCP", "Docker", "CI/CD"] },
      { label: "Bancos de dados", items: ["PostgreSQL", "MongoDB", "Redis"] },
      { label: "IA", items: ["TensorFlow", "LangGraph", "Claude Code", "Codex"] },
    ],
    languages: [
      { name: "Espanhol", level: "Nativo" },
      { name: "Inglês", level: "Avançado" },
      { name: "Português", level: "Avançado" },
    ],
  },
};

export function getProfile(lang: Lang) {
  return profile[lang];
}
