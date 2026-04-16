export const languages = {
  es: "Español",
  en: "English",
  pt: "Português",
};

export const defaultLang = "es";

export const ui = {
  es: {
    "nav.blog": "blog",
    "nav.projects": "proyectos",
    "nav.home": "inicio",
    "hero.name": "Sergio Sebastián Pezo Jiménez",
    "home.experience": "Experiencia",
    "home.education": "Educación",
    "home.awards": "Hackathons & premios",
    "home.skills": "Stack",
    "projects.title": "Proyectos",
    "projects.viewMore": "Ver más proyectos",
    "projects.viewProject": "Ver detalle",
    "projects.viewCode": "Ver código",
    "projects.technologies": "Tecnologías",
    "projects.back": "← Inicio",
    "blog.title": "Historias",
    "blog.viewMore": "Ver más historias",
    "blog.back": "← Volver a historias",
    "blog.noPosts": "Aún no hay historias publicadas.",
  },
  en: {
    "nav.blog": "blog",
    "nav.projects": "projects",
    "nav.home": "home",
    "hero.name": "Sergio Sebastián Pezo Jiménez",
    "home.experience": "Experience",
    "home.education": "Education",
    "home.awards": "Hackathons & awards",
    "home.skills": "Stack",
    "projects.title": "Projects",
    "projects.viewMore": "View more projects",
    "projects.viewProject": "View details",
    "projects.viewCode": "View code",
    "projects.technologies": "Technologies",
    "projects.back": "← Home",
    "blog.title": "Stories",
    "blog.viewMore": "View more stories",
    "blog.back": "← Back to stories",
    "blog.noPosts": "No stories published yet.",
  },
  pt: {
    "nav.blog": "blog",
    "nav.projects": "projetos",
    "nav.home": "início",
    "hero.name": "Sergio Sebastián Pezo Jiménez",
    "home.experience": "Experiência",
    "home.education": "Educação",
    "home.awards": "Hackathons & prêmios",
    "home.skills": "Stack",
    "projects.title": "Projetos",
    "projects.viewMore": "Ver mais projetos",
    "projects.viewProject": "Ver detalhes",
    "projects.viewCode": "Ver código",
    "projects.technologies": "Tecnologias",
    "projects.back": "← Início",
    "blog.title": "Histórias",
    "blog.viewMore": "Ver mais histórias",
    "blog.back": "← Voltar para histórias",
    "blog.noPosts": "Ainda não há histórias publicadas.",
  },
} as const;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: string) {
    return ui[lang][key as keyof (typeof ui)[typeof defaultLang]] || key;
  };
}
