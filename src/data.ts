import type { Lang } from './i18n/locales';

const shared = {
  name: 'Sergio Sebastián Pezo Jiménez',
  location: 'Lima, Perú',
  email: 'sergiopezoj@gmail.com',
  phone: '+51 969 672 749',
  linkedin: 'https://linkedin.com/in/sergio-pezo',
  github: 'https://github.com/thsergitox',
  instagram: 'https://instagram.com/thsergitox',
};

const content = {
  es: {
    summary:
      'Estudiante de cuarto año de Ciencia de la Computación, con experiencia en software e inteligencia artificial. Me define la adaptación, la agencia y la idea de que cada problema merece una solución bien pensada.',
    experience: [
      {
        role: 'Software Engineer',
        company: 'CoFoundy',
        period: 'Mar 2025 — Dic 2025',
        bullets: [
          'Lideré el backend principal de una plataforma para automatización de pedidos en restaurantes.',
          'Migré un flujo manual por WhatsApp a un sistema digital escalable usado por decenas de clientes.',
          'Diseñé microservicios con NestJS, autenticación, datos y despliegue continuo con GitHub Actions + Railway.',
        ],
      },
    ],
    education: [
      {
        place: 'Universidad Nacional de Ingeniería',
        detail: 'Ciencia de la Computación · 8.º ciclo · Décimo Superior',
        period: 'Abr 2022 — Actualidad',
      },
      {
        place: 'UNICAMP · Intercambio Académico',
        detail: 'Instituto de Computação · Sistemas Distribuidos, IoT, Verificación y Bioinformática',
        period: 'Jul 2025 — Nov 2025',
      },
    ],
    projects: [
      'Sistema IoT con Azure Cloud Services y dashboard en tiempo real.',
      'Sistema de log distribuido con Lamport y Bully desplegado en GCP.',
      'TutorAI para aprendizaje de inglés con IA y voz.',
      'Sistema multiagente colaborativo con CRDTs.',
    ],
    awards: [
      'NASA Space Apps Challenge Campinas 2025 — Semifinalista (Top 16 de 150+ equipos).',
      'Hackathon Centro Internacional de la Papa — Finalista mundial.',
      'Hackathon IMCA — 1.er lugar.',
    ],
    skillGroups: [
      {
        label: 'Lenguajes',
        items: ['TypeScript', 'Python', 'Go', 'Java'],
      },
      {
        label: 'Frameworks y producto',
        items: ['NestJS', 'FastAPI', 'Astro', 'Next.js', 'React'],
      },
      {
        label: 'Cloud y datos',
        items: ['AWS', 'Azure', 'GCP', 'Docker', 'PostgreSQL', 'MongoDB', 'Redis'],
      },
      {
        label: 'Skills',
        items: ['Arquitectura backend', 'Sistemas distribuidos', 'IA aplicada', 'CI/CD'],
      },
    ],
    spokenLanguages: [
      'Español — nativo',
      'Inglés — avanzado',
      'Portugués — avanzado',
    ],
    pdfLabel: 'Ver PDF',
    pdfClose: 'Cerrar',
    latestStory: 'Última historia',
  },
  en: {
    summary:
      'Fourth-year Computer Science student with hands-on experience in software and AI. I am defined by adaptability, agency, and the belief that every problem deserves a thoughtful solution.',
    experience: [
      {
        role: 'Software Engineer',
        company: 'CoFoundy',
        period: 'Mar 2025 — Dec 2025',
        bullets: [
          'Led the core backend of a restaurant order automation platform.',
          'Migrated a manual WhatsApp-based workflow into a scalable digital system used by dozens of clients.',
          'Designed NestJS microservices, authentication, data flows, and CI/CD deployment with GitHub Actions + Railway.',
        ],
      },
    ],
    education: [
      {
        place: 'National University of Engineering',
        detail: 'Computer Science · 8th semester · Top tenth',
        period: 'Apr 2022 — Present',
      },
      {
        place: 'UNICAMP · Academic Exchange',
        detail: 'Institute of Computing · Distributed Systems, IoT, Verification and Bioinformatics',
        period: 'Jul 2025 — Nov 2025',
      },
    ],
    projects: [
      'IoT system with Azure Cloud Services and a real-time dashboard.',
      'Distributed log system with Lamport and Bully deployed on GCP.',
      'TutorAI for English learning with AI and voice APIs.',
      'Collaborative multi-agent system using CRDTs.',
    ],
    awards: [
      'NASA Space Apps Challenge Campinas 2025 — Semifinalist (Top 16 out of 150+ teams).',
      'International Potato Center Hackathon — Global finalist.',
      'IMCA Hackathon — 1st place.',
    ],
    skillGroups: [
      {
        label: 'Languages',
        items: ['TypeScript', 'Python', 'Go', 'Java'],
      },
      {
        label: 'Frameworks & product',
        items: ['NestJS', 'FastAPI', 'Astro', 'Next.js', 'React'],
      },
      {
        label: 'Cloud & data',
        items: ['AWS', 'Azure', 'GCP', 'Docker', 'PostgreSQL', 'MongoDB', 'Redis'],
      },
      {
        label: 'Skills',
        items: ['Backend architecture', 'Distributed systems', 'Applied AI', 'CI/CD'],
      },
    ],
    spokenLanguages: [
      'Spanish — native',
      'English — advanced',
      'Portuguese — advanced',
    ],
    pdfLabel: 'View PDF',
    pdfClose: 'Close',
    latestStory: 'Latest story',
  },
  pt: {
    summary:
      'Estudante do quarto ano de Ciência da Computação, com experiência prática em software e IA. Sou definido por adaptação, iniciativa e pela ideia de que todo problema merece uma solução bem pensada.',
    experience: [
      {
        role: 'Software Engineer',
        company: 'CoFoundy',
        period: 'Mar 2025 — Dez 2025',
        bullets: [
          'Liderei o backend principal de uma plataforma de automação de pedidos para restaurantes.',
          'Migrei um fluxo manual via WhatsApp para um sistema digital escalável usado por dezenas de clientes.',
          'Desenhei microsserviços em NestJS, autenticação, fluxo de dados e deploy contínuo com GitHub Actions + Railway.',
        ],
      },
    ],
    education: [
      {
        place: 'Universidad Nacional de Ingeniería',
        detail: 'Ciência da Computação · 8.º semestre · décimo superior',
        period: 'Abr 2022 — Atualidade',
      },
      {
        place: 'UNICAMP · Intercâmbio Acadêmico',
        detail: 'Instituto de Computação · Sistemas Distribuídos, IoT, Verificação e Bioinformática',
        period: 'Jul 2025 — Nov 2025',
      },
    ],
    projects: [
      'Sistema IoT com Azure Cloud Services e dashboard em tempo real.',
      'Sistema de log distribuído com Lamport e Bully implantado na GCP.',
      'TutorAI para aprendizagem de inglês com IA e voz.',
      'Sistema multiagente colaborativo com CRDTs.',
    ],
    awards: [
      'NASA Space Apps Challenge Campinas 2025 — Semifinalista (Top 16 de 150+ equipes).',
      'Hackathon do Centro Internacional da Batata — Finalista mundial.',
      'Hackathon IMCA — 1.º lugar.',
    ],
    skillGroups: [
      {
        label: 'Linguagens',
        items: ['TypeScript', 'Python', 'Go', 'Java'],
      },
      {
        label: 'Frameworks e produto',
        items: ['NestJS', 'FastAPI', 'Astro', 'Next.js', 'React'],
      },
      {
        label: 'Cloud e dados',
        items: ['AWS', 'Azure', 'GCP', 'Docker', 'PostgreSQL', 'MongoDB', 'Redis'],
      },
      {
        label: 'Skills',
        items: ['Arquitetura backend', 'Sistemas distribuídos', 'IA aplicada', 'CI/CD'],
      },
    ],
    spokenLanguages: [
      'Espanhol — nativo',
      'Inglês — avançado',
      'Português — avançado',
    ],
    pdfLabel: 'Ver PDF',
    pdfClose: 'Fechar',
    latestStory: 'Última história',
  },
} as const;

export function getProfile(lang: Lang) {
  return {
    ...shared,
    ...content[lang],
  };
}
