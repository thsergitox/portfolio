import type { CvProfile } from '../types.ts';
import { sharedProfile } from '../shared.ts';

export const esProfile: CvProfile = {
  ...sharedProfile,
  summary: 'Software Engineer con más de dos años y medio de experiencia profesional desarrollando productos en producción. Me especializo en backend con Node.js, NestJS, PostgreSQL y Redis; he liderado decisiones técnicas, diseñado arquitecturas modulares y trabajado con WebSockets, Docker y CI/CD.',
  experience: [
    { title: 'Consultor de Software e Inteligencia Artificial', organization: 'Consultor Independiente', location: 'Remoto', period: 'Jul 2026 — Actualidad', start: '2026-07', end: 'present', bullets: ['Diseño y desarrollo un sistema RAG para una empresa peruana de topografía, definiendo requisitos y alcance directamente con el cliente.'] },
    { title: 'Software Engineer', organization: 'CoFoundy · Consultora de Software', location: 'Remoto', period: 'Mar 2025 — May 2026', start: '2025-03', end: '2026-05', bullets: ['Lideré el backend de múltiples productos en producción y las decisiones clave de arquitectura, stack y patrones.', 'Diseñé arquitecturas modulares con NestJS y DDD, autenticación JWT/OAuth2, PostgreSQL y Redis.', 'Implementé WebSockets autenticados con JWT y validé su comportamiento mediante pruebas de estrés.', 'Desarrollé funcionalidades con Next.js y Server Actions e integré soluciones como Moodle.', 'Contenericé servicios con Docker y automaticé entregas con GitHub Actions y Railway.', 'Desglosé requerimientos en features y tareas accionables, priorizando entregas y seguimiento técnico.'] },
    { title: 'Software Developer', organization: 'SkyTech', location: 'Remoto', period: 'Ene 2024 — Feb 2025', start: '2024-01', end: '2025-02', bullets: ['Implementé servicios backend con MQTT para una plataforma de gestión de flotas utilizada por clientes reales.', 'Desarrollé features con Next.js y participé en revisiones de código y entregas iterativas.', 'Trabajé con estimación de tareas, metodologías ágiles y comunicación técnica dentro del equipo.'] },
  ],
  education: [
    { title: 'Ciencia de la Computación · Décimo Superior', organization: 'Universidad Nacional de Ingeniería', location: 'Lima, Perú', period: 'Abr 2022 — Actualidad', term: 9, bullets: ['Ingresé mediante el examen IEN a los 16 años, preparándome con libros y recursos abiertos.', 'Cursos relevantes: Infraestructuras de Computación en AWS, Desarrollo de Software, IA, Programación Concurrente y Distribuida, Algoritmos y Estructuras de Datos.'] },
    { title: 'Intercambio Académico · Instituto de Computação', organization: 'Universidade Estadual de Campinas (UNICAMP)', location: 'São Paulo, Brasil', period: 'Jul 2025 — Nov 2025', bullets: ['Cursé Sistemas Distribuidos íntegramente en inglés y obtuve la nota más alta del curso.', 'Cursos: Sistemas Distribuidos, IoT, Verificación y Testeo de Software y Bioinformática.'] },
    { title: 'Winter Camp de Inteligencia Artificial', organization: 'IA-PUCP', location: 'Lima, Perú', period: 'Ago 2026', bullets: ['Seleccionado entre 41 participantes de más de 100 postulantes para formación intensiva en deep learning, NLP, visión, recomendación e IA explicable.', 'Desarrollé en equipo un modelo de predicción de movimientos en masa con imágenes satelitales y datos climáticos.'] },
  ],
  projects: [
    { title: 'Laboratorios de Infraestructura Cloud en AWS', period: '2026-I', stack: 'VPC, EC2, Lambda, RDS, S3, IAM, EBS, CloudWatch', bullets: ['Diseñé redes multi-AZ con subredes públicas y privadas y mínimo privilegio.', 'Propuse una arquitectura orientada a eventos S3 → Lambda → RDS con observabilidad en CloudWatch.'] },
    { title: 'Orquestación Adaptativa de Agentes de Software', period: 'Mar — Jul 2026', stack: 'FastAPI, Redis Streams, Docker, A2A, pytest', bullets: ['Construí un orquestador tolerante a fallos para trabajadores LLM heterogéneos.', 'Detecté que una política adaptativa rendía 8.1× peor, aislé la causa y recuperé la latencia de 21.1 s a 3.0 s.', 'Implementé un adaptador A2A v1.0 verificado con 34 pruebas end-to-end.'] },
    { title: 'Sistema IoT con Azure Cloud Services', period: 'Oct — Nov 2025', stack: 'Azure IoT Hub, Functions, MQTT, WebSockets, Next.js', bullets: ['Diseñé el pipeline desde sensores físicos hasta un dashboard web en tiempo real.', 'Implementé procesamiento serverless y soporte multi-dispositivo mediante jerarquía de tópicos MQTT.'] },
    { title: 'Sistema de Log Distribuido', period: 'Oct — Nov 2025', stack: 'Python, GCP, Lamport, Bully', bullets: ['Implementé ordenamiento con relojes de Lamport y elección de líder con Bully.', 'Desplegué y medí el sistema en máquinas virtuales de distintas regiones.'] },
    { title: 'TutorAI', period: 'May — Jul 2025', stack: 'FastAPI, ElevenLabs', bullets: ['Construí un tutor de inglés con contenido y feedback de voz personalizados.', 'Diseñé pruebas de usabilidad con estudiantes y convertí hallazgos en mejoras del producto.'] },
    { title: 'Sistema Multiagente con CRDTs', period: 'Sep — Nov 2024', stack: 'FastAPI, LangGraph, Next.js, Redis, Yjs', bullets: ['Diseñé edición colaborativa en tiempo real con Yjs y Redis.', 'Implementé agentes con LangGraph y participé en su integración con Next.js.'] },
    { title: 'Otros proyectos', period: '2022 — 2024', bullets: ['Vehículo por Bluetooth con ESP32; formularios con IA; GeoBus Perú con MQTT; visualizador de malla curricular; mapa geográfico de COVID-19 con datos abiertos.'] },
  ],
  awards: [
    { title: 'NASA Space Apps Challenge Campinas', period: 'Nov 2025 · Semifinalista', bullets: ['Top 16 entre más de 150 equipos; lideré un equipo de Brasil, Bolivia y Perú.', 'Integré APIs de NASA y procesamiento concurrente de imágenes geoespaciales.'] },
    { title: 'Hackathon Centro Internacional de la Papa', period: 'Abr 2024 — Feb 2025 · Finalista mundial', bullets: ['Trabajé en data engineering, modelo híbrido, API y web para predecir características de cultivos.'] },
    { title: 'Hackathon IMCA', period: 'Dic 2024 · 1.er lugar', bullets: ['Diseñamos una solución de optimización de riego mediante PINNs con un equipo multidisciplinario.'] },
  ],
  leadership: [
    { title: 'Miembro del área de desarrollo web', organization: 'ACECOM', period: 'Ene 2024 — Actualidad', bullets: ['Dicté un taller de desarrollo web seguro, despliegue y Git para estudiantes.', 'Expongo proyectos y automaticé procesos internos con Discord, cron jobs y detección de spam.'] },
    { title: 'Tutoría académica voluntaria', organization: 'Universidad Nacional de Ingeniería', period: 'Abr 2025 — Actualidad', bullets: ['Fui tutor de Computación Centrada en Redes y actualmente acompaño Desarrollo de Software, DevOps e IaC.'] },
  ],
  skillGroups: [
    { label: 'Lenguajes', items: ['TypeScript', 'Python', 'Java', 'Go'] },
    { label: 'Backend y frontend', items: ['NestJS', 'FastAPI', 'Spring Boot', 'Express', 'React', 'Next.js', 'Remix', 'Astro'] },
    { label: 'Cloud y DevOps', items: ['AWS', 'Azure', 'GCP', 'Docker', 'Terraform', 'Kubernetes', 'GitHub Actions', 'CI/CD'] },
    { label: 'Datos e IA', items: ['PostgreSQL', 'MongoDB', 'Redis', 'TensorFlow', 'LangGraph', 'Claude Code', 'Codex'] },
  ],
  spokenLanguages: ['Español — nativo', 'Inglés — avanzado', 'Portugués — avanzado'],
  pdf: { href: '/cv/sergio-pezo-cv-es.pdf', label: 'Ver CV en PDF', downloadLabel: 'Descargar PDF', closeLabel: 'Cerrar' },
  latestStory: 'Última historia',
};
