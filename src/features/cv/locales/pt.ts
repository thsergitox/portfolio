import type { CvProfile } from '../types.ts';
import { sharedProfile } from '../shared.ts';

export const ptProfile: CvProfile = {
  ...sharedProfile,
  location: 'Lima, Peru',
  summary: 'Engenheiro de Software com mais de dois anos e meio de experiência profissional desenvolvendo produtos em produção. Sou especializado em backend com Node.js, NestJS, PostgreSQL e Redis; liderei decisões técnicas e trabalhei com arquiteturas modulares, WebSockets, Docker e CI/CD.',
  experience: [
    { title: 'Consultor de Software e Inteligência Artificial', organization: 'Consultor Independente', location: 'Remoto', period: 'Jul 2026 — Atualidade', start: '2026-07', end: 'present', bullets: ['Projeto e desenvolvo um sistema RAG para uma empresa peruana de topografia, definindo requisitos e escopo diretamente com o cliente.'] },
    { title: 'Software Engineer', organization: 'CoFoundy · Consultoria de Software', location: 'Remoto', period: 'Mar 2025 — Mai 2026', start: '2025-03', end: '2026-05', bullets: ['Liderei o backend de vários produtos em produção e as principais decisões de arquitetura, stack e padrões.', 'Projetei arquiteturas modulares com NestJS e DDD, autenticação JWT/OAuth2, PostgreSQL e Redis.', 'Implementei WebSockets autenticados com JWT e validei seu comportamento com testes de estresse.', 'Desenvolvi funcionalidades com Next.js e Server Actions e integrei plataformas como Moodle.', 'Containerizei serviços com Docker e automatizei entregas com GitHub Actions e Railway.', 'Transformei requisitos em features e tarefas acionáveis, priorizando entregas e acompanhamento técnico.'] },
    { title: 'Software Developer', organization: 'SkyTech', location: 'Remoto', period: 'Jan 2024 — Fev 2025', start: '2024-01', end: '2025-02', bullets: ['Implementei serviços backend com MQTT para uma plataforma de gestão de frotas usada por clientes reais.', 'Desenvolvi features com Next.js e participei de revisões de código e entregas iterativas.', 'Trabalhei com estimativa de tarefas, métodos ágeis e comunicação técnica.'] },
  ],
  education: [
    { title: 'Ciência da Computação · Décimo Superior', organization: 'Universidade Nacional de Engenharia', location: 'Lima, Peru', period: 'Abr 2022 — Atualidade', term: 9, bullets: ['Ingressei pelo exame nacional escolar aos 16 anos, preparando-me com livros e recursos abertos.', 'Disciplinas: infraestrutura AWS, Desenvolvimento de Software, IA, Programação Concorrente e Distribuída, Algoritmos e Estruturas de Dados.'] },
    { title: 'Intercâmbio Acadêmico · Instituto de Computação', organization: 'Universidade Estadual de Campinas (UNICAMP)', location: 'São Paulo, Brasil', period: 'Jul 2025 — Nov 2025', bullets: ['Cursei Sistemas Distribuídos integralmente em inglês e obtive a maior nota da turma.', 'Disciplinas: Sistemas Distribuídos, IoT, Verificação e Teste de Software e Bioinformática.'] },
    { title: 'Winter Camp de Inteligência Artificial', organization: 'IA-PUCP', location: 'Lima, Peru', period: 'Ago 2026', bullets: ['Selecionado entre 41 participantes de mais de 100 candidatos para formação intensiva em deep learning, NLP, visão, recomendação e IA explicável.', 'Desenvolvi em equipe um modelo de previsão de movimentos de massa com imagens de satélite e dados climáticos.'] },
  ],
  projects: [
    { title: 'Laboratórios de Infraestrutura Cloud na AWS', period: '2026-I', stack: 'VPC, EC2, Lambda, RDS, S3, IAM, EBS, CloudWatch', bullets: ['Projetei redes multi-AZ com sub-redes públicas e privadas e princípio do menor privilégio.', 'Propus uma arquitetura orientada a eventos S3 → Lambda → RDS com observabilidade no CloudWatch.'] },
    { title: 'Orquestração Adaptativa de Agentes de Software', period: 'Mar — Jul 2026', stack: 'FastAPI, Redis Streams, Docker, A2A, pytest', bullets: ['Construí um orquestrador tolerante a falhas para workers LLM heterogêneos.', 'Descobri que uma política adaptativa era 8,1× mais lenta, isolei a causa e recuperei a latência de 21,1 s para 3,0 s.', 'Implementei um adaptador A2A v1.0 verificado com 34 testes end-to-end.'] },
    { title: 'Sistema IoT com Azure Cloud Services', period: 'Out — Nov 2025', stack: 'Azure IoT Hub, Functions, MQTT, WebSockets, Next.js', bullets: ['Projetei o pipeline de sensores físicos até um dashboard web em tempo real.', 'Implementei processamento serverless e suporte a múltiplos dispositivos com tópicos MQTT.'] },
    { title: 'Sistema de Log Distribuído', period: 'Out — Nov 2025', stack: 'Python, GCP, Lamport, Bully', bullets: ['Implementei ordenação de Lamport e eleição de líder Bully.', 'Implantei e medi o sistema em máquinas virtuais de diferentes regiões.'] },
    { title: 'TutorAI', period: 'Mai — Jul 2025', stack: 'FastAPI, ElevenLabs', bullets: ['Construí um tutor de inglês com conteúdo e feedback de voz personalizados.', 'Conduzi testes de usabilidade com estudantes e converti resultados em melhorias.'] },
    { title: 'Sistema Multiagente com CRDTs', period: 'Set — Nov 2024', stack: 'FastAPI, LangGraph, Next.js, Redis, Yjs', bullets: ['Projetei edição colaborativa em tempo real com Yjs e Redis.', 'Implementei agentes com LangGraph e participei da integração com Next.js.'] },
    { title: 'Outros projetos', period: '2022 — 2024', bullets: ['Veículo Bluetooth com ESP32; formulários com IA; GeoBus Peru com MQTT; visualizador curricular; e mapa geográfico da COVID-19 com dados abertos.'] },
  ],
  awards: [
    { title: 'NASA Space Apps Challenge Campinas', period: 'Nov 2025 · Semifinalista', bullets: ['Top 16 entre mais de 150 equipes; liderei integrantes do Brasil, Bolívia e Peru.', 'Integrei APIs da NASA e processamento concorrente de imagens geoespaciais.'] },
    { title: 'Hackathon do Centro Internacional da Batata', period: 'Abr 2024 — Fev 2025 · Finalista mundial', bullets: ['Trabalhei em engenharia de dados, modelo híbrido, API e web para prever características de cultivos.'] },
    { title: 'Hackathon IMCA', period: 'Dez 2024 · 1.º lugar', bullets: ['Projetei uma solução de otimização de irrigação com PINNs em equipe multidisciplinar.'] },
  ],
  leadership: [
    { title: 'Membro da área de desenvolvimento web', organization: 'ACECOM', period: 'Jan 2024 — Atualidade', bullets: ['Ministrei um workshop sobre backend seguro, frontend, deploy e Git para universitários.', 'Apresentei projetos e automatizei processos com Discord, cron jobs e detecção de spam.'] },
    { title: 'Tutor acadêmico voluntário', organization: 'Universidade Nacional de Engenharia', period: 'Abr 2025 — Atualidade', bullets: ['Fui tutor de Computação Centrada em Redes e atualmente apoio Desenvolvimento de Software, DevOps e IaC.'] },
  ],
  skillGroups: [
    { label: 'Linguagens', items: ['TypeScript', 'Python', 'Java', 'Go'] },
    { label: 'Backend e frontend', items: ['NestJS', 'FastAPI', 'Spring Boot', 'Express', 'React', 'Next.js', 'Remix', 'Astro'] },
    { label: 'Cloud e DevOps', items: ['AWS', 'Azure', 'GCP', 'Docker', 'Terraform', 'Kubernetes', 'GitHub Actions', 'CI/CD'] },
    { label: 'Dados e IA', items: ['PostgreSQL', 'MongoDB', 'Redis', 'TensorFlow', 'LangGraph', 'Claude Code', 'Codex'] },
  ],
  spokenLanguages: ['Espanhol — nativo', 'Inglês — avançado', 'Português — avançado'],
  pdf: { href: '/cv/sergio-pezo-cv-pt.pdf', label: 'Ver currículo em PDF', downloadLabel: 'Baixar PDF', closeLabel: 'Fechar' },
  latestStory: 'Última história',
};
