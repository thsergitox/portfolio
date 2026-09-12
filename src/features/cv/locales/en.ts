import type { CvProfile } from '../types.ts';
import { sharedProfile } from '../shared.ts';

export const enProfile: CvProfile = {
  ...sharedProfile,
  location: 'Lima, Peru',
  summary: 'Software Engineer with over two and a half years of professional experience shipping production products. I specialize in backend systems with Node.js, NestJS, PostgreSQL, and Redis, and have led technical decisions across modular architecture, WebSockets, Docker, and CI/CD.',
  experience: [
    { title: 'Software & AI Consultant', organization: 'Independent Consultant', location: 'Remote', period: 'Jul 2026 — Present', start: '2026-07', end: 'present', bullets: ['I design and build a RAG system for a Peruvian land-surveying firm, defining requirements and scope directly with the client.'] },
    { title: 'Software Engineer', organization: 'CoFoundy · Software Consultancy', location: 'Remote', period: 'Mar 2025 — May 2026', start: '2025-03', end: '2026-05', bullets: ['Led the backend of multiple production products and key decisions about architecture, stack, and patterns.', 'Designed modular NestJS and DDD architectures with JWT/OAuth2, PostgreSQL, and Redis.', 'Implemented JWT-authenticated WebSockets and validated behavior with stress tests.', 'Built Next.js and Server Actions features and integrated platforms such as Moodle.', 'Containerized services with Docker and automated delivery through GitHub Actions and Railway.', 'Turned requirements into actionable features and tasks, prioritizing delivery and technical follow-up.'] },
    { title: 'Software Developer', organization: 'SkyTech', location: 'Remote', period: 'Jan 2024 — Feb 2025', start: '2024-01', end: '2025-02', bullets: ['Implemented MQTT backend services for a fleet platform used by real customers.', 'Built Next.js features and participated in code reviews and iterative delivery.', 'Worked with task estimation, agile methods, and technical communication.'] },
  ],
  education: [
    { title: 'Computer Science · Top Tenth', organization: 'National University of Engineering', location: 'Lima, Peru', period: 'Apr 2022 — Present', term: 9, bullets: ['Entered through the national school admission exam at 16 after preparing with books and open resources.', 'Relevant coursework: AWS infrastructure, Software Development, AI, Concurrent and Distributed Programming, Algorithms, and Data Structures.'] },
    { title: 'Academic Exchange · Institute of Computing', organization: 'University of Campinas (UNICAMP)', location: 'São Paulo, Brazil', period: 'Jul 2025 — Nov 2025', bullets: ['Completed Distributed Systems entirely in English and earned the highest grade in the class.', 'Coursework: Distributed Systems, IoT, Software Verification and Testing, and Bioinformatics.'] },
    { title: 'Artificial Intelligence Winter Camp', organization: 'IA-PUCP', location: 'Lima, Peru', period: 'Aug 2026', bullets: ['Selected as one of 41 participants from more than 100 applicants for intensive training in deep learning, NLP, computer vision, recommendation, and explainable AI.', 'Co-developed a landslide prediction model using satellite imagery and climate data.'] },
  ],
  projects: [
    { title: 'AWS Cloud Infrastructure Labs', period: '2026-I', stack: 'VPC, EC2, Lambda, RDS, S3, IAM, EBS, CloudWatch', bullets: ['Designed multi-AZ networks with public/private subnets and least-privilege access.', 'Proposed an event-driven S3 → Lambda → RDS architecture with CloudWatch observability.'] },
    { title: 'Adaptive Software-Agent Orchestration', period: 'Mar — Jul 2026', stack: 'FastAPI, Redis Streams, Docker, A2A, pytest', bullets: ['Built a fault-aware orchestrator for heterogeneous LLM workers.', 'Found an adaptive policy was 8.1× slower, isolated the cause, and recovered latency from 21.1 s to 3.0 s.', 'Implemented an A2A v1.0 adapter verified by 34 end-to-end tests.'] },
    { title: 'IoT System with Azure Cloud Services', period: 'Oct — Nov 2025', stack: 'Azure IoT Hub, Functions, MQTT, WebSockets, Next.js', bullets: ['Designed the pipeline from physical sensors to a real-time web dashboard.', 'Implemented serverless processing and multi-device support through MQTT topic hierarchies.'] },
    { title: 'Distributed Log System', period: 'Oct — Nov 2025', stack: 'Python, GCP, Lamport, Bully', bullets: ['Implemented Lamport ordering and Bully leader election.', 'Deployed and measured the system across virtual machines in different regions.'] },
    { title: 'TutorAI', period: 'May — Jul 2025', stack: 'FastAPI, ElevenLabs', bullets: ['Built an English tutor with personalized content and voice feedback.', 'Ran usability sessions with students and translated findings into product improvements.'] },
    { title: 'Multi-Agent System with CRDTs', period: 'Sep — Nov 2024', stack: 'FastAPI, LangGraph, Next.js, Redis, Yjs', bullets: ['Designed real-time collaborative editing with Yjs and Redis.', 'Implemented LangGraph agents and helped integrate them with Next.js.'] },
    { title: 'Earlier projects', period: '2022 — 2024', bullets: ['ESP32 Bluetooth vehicle; AI-generated forms; MQTT-based GeoBus Peru; curriculum graph visualizer; and a geographic COVID-19 map built from open data.'] },
  ],
  awards: [
    { title: 'NASA Space Apps Challenge Campinas', period: 'Nov 2025 · Semifinalist', bullets: ['Top 16 of 150+ teams; led teammates from Brazil, Bolivia, and Peru.', 'Integrated NASA APIs and concurrent geospatial-image processing.'] },
    { title: 'International Potato Center Hackathon', period: 'Apr 2024 — Feb 2025 · Global finalist', bullets: ['Worked across data engineering, hybrid modeling, API, and web delivery for crop-trait prediction.'] },
    { title: 'IMCA Hackathon', period: 'Dec 2024 · 1st place', bullets: ['Designed a PINN-based irrigation optimization solution with a multidisciplinary team.'] },
  ],
  leadership: [
    { title: 'Web development member', organization: 'ACECOM', period: 'Jan 2024 — Present', bullets: ['Taught secure backend, frontend, deployment, and Git to university students.', 'Presented projects and automated Discord, cron, and spam-detection workflows.'] },
    { title: 'Volunteer academic tutor', organization: 'National University of Engineering', period: 'Apr 2025 — Present', bullets: ['Tutored Network-Centered Computing and now support Software Development, DevOps, and IaC.'] },
  ],
  skillGroups: [
    { label: 'Languages', items: ['TypeScript', 'Python', 'Java', 'Go'] },
    { label: 'Backend & frontend', items: ['NestJS', 'FastAPI', 'Spring Boot', 'Express', 'React', 'Next.js', 'Remix', 'Astro'] },
    { label: 'Cloud & DevOps', items: ['AWS', 'Azure', 'GCP', 'Docker', 'Terraform', 'Kubernetes', 'GitHub Actions', 'CI/CD'] },
    { label: 'Data & AI', items: ['PostgreSQL', 'MongoDB', 'Redis', 'TensorFlow', 'LangGraph', 'Claude Code', 'Codex'] },
  ],
  spokenLanguages: ['Spanish — native', 'English — advanced', 'Portuguese — advanced'],
  pdf: { href: '/cv/sergio-pezo-cv-en.pdf', label: 'View PDF résumé', downloadLabel: 'Download PDF', closeLabel: 'Close' },
  latestStory: 'Latest story',
};
