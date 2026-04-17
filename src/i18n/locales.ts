export const languages = {
  es: 'Español',
  en: 'English',
  pt: 'Português',
} as const;

export const defaultLang = 'es';
export type Lang = keyof typeof languages;

export const ui = {
  es: {
    'site.title': 'Sergio Pezo — Portfolio',
    'site.description': 'Portfolio personal de Sergio Pezo, software engineer con foco en sistemas, IA y productos con personalidad.',
    'nav.home': 'inicio',
    'nav.blog': 'blog',
    'nav.cv': 'cv',
    'hero.kicker': 'software engineer · lima',
    'hero.name': 'Sergio Pezo',
    'hero.role': 'Construyo software con criterio, velocidad y una obsesión tranquila por resolver problemas reales.',
    'hero.summary': 'Soy estudiante de Ciencia de la Computación y backend engineer. Me gusta convertir ideas complejas en productos claros, sobrios y con identidad.',
    'hero.ctaPrimary': 'Ver CV',
    'hero.ctaSecondary': 'Ir al blog',
    'home.aboutTitle': 'Quién soy',
    'home.aboutBody': 'Me define la agencia: si hay un problema, encuentro una forma de moverlo. He trabajado con backend, automatización, sistemas distribuidos e inteligencia artificial.',
    'home.focusTitle': 'Ahora mismo',
    'home.focusBody': 'Busco oportunidades para construir producto serio sin perder personalidad: software útil, interfaces cuidadas y una narrativa honesta sobre lo que hago.',
    'home.latestStoryTitle': 'Última historia',
    'home.latestStoryLink': 'Abrir historia',
    'blog.title': 'Historias',
    'blog.description': 'Bienvenido a mi blog',
    'blog.empty': 'Todavía no hay historias publicadas.',
    'blog.back': '← Volver al blog',
    'blog.readMore': 'Leer historia',
    'blog.markdownBody': 'En este apartado subiré tutoriales, anécdotas y fotos.',
    'cv.experienceTitle': 'Experiencia',
    'cv.educationTitle': 'Educación',
    'cv.profileTitle': 'Perfil profesional',
    'cv.projectsTitle': 'Proyectos seleccionados',
    'cv.awardsTitle': 'Hackathons y premios',
    'cv.skillsTitle': 'Stack',
    'cv.languagesTitle': 'Idiomas',
  },
  en: {
    'site.title': 'Sergio Pezo — Portfolio',
    'site.description': 'Personal portfolio of Sergio Pezo, software engineer focused on systems, AI and products with personality.',
    'nav.home': 'home',
    'nav.blog': 'blog',
    'nav.cv': 'cv',
    'hero.kicker': 'software engineer · lima',
    'hero.name': 'Sergio Pezo',
    'hero.role': 'I build software with taste, speed, and a calm obsession for solving real problems.',
    'hero.summary': 'I am a Computer Science student and backend engineer. I like turning complex ideas into products that feel clear, minimal, and human.',
    'hero.ctaPrimary': 'View CV',
    'hero.ctaSecondary': 'Go to blog',
    'home.aboutTitle': 'Who I am',
    'home.aboutBody': 'Agency defines me: if there is a problem, I will move it forward. I have worked across backend systems, automation, distributed systems, and applied AI.',
    'home.focusTitle': 'Right now',
    'home.focusBody': 'I am looking for opportunities to build serious products without losing personality: useful software, thoughtful interfaces, and an honest narrative around what I do.',
    'home.latestStoryTitle': 'Latest story',
    'home.latestStoryLink': 'Open story',
    'blog.title': 'Stories',
    'blog.description': 'A place to publish stories, lessons, photos, and process using Markdown.',
    'blog.empty': 'No stories published yet.',
    'blog.back': '← Back to blog',
    'blog.readMore': 'Read story',
    'blog.markdownBody': 'For stories with photos, Astro works very well with content collections + Markdown. You can write .md files inside src/content/blog and use images with ![alt](/path.jpg). If you want embedded components later, MDX is the natural next step.',
    'cv.experienceTitle': 'Experience',
    'cv.educationTitle': 'Education',
    'cv.profileTitle': 'Professional profile',
    'cv.projectsTitle': 'Selected projects',
    'cv.awardsTitle': 'Hackathons & awards',
    'cv.skillsTitle': 'Stack',
    'cv.languagesTitle': 'Languages',
  },
  pt: {
    'site.title': 'Sergio Pezo — Portfolio',
    'site.description': 'Portfólio pessoal de Sergio Pezo, engenheiro de software com foco em sistemas, IA e produtos com personalidade.',
    'nav.home': 'início',
    'nav.blog': 'blog',
    'nav.cv': 'cv',
    'hero.kicker': 'software engineer · lima',
    'hero.name': 'Sergio Pezo',
    'hero.role': 'Construo software com critério, velocidade e uma obsessão calma por resolver problemas reais.',
    'hero.summary': 'Sou estudante de Ciência da Computação e backend engineer. Gosto de transformar ideias complexas em produtos claros, mínimos e humanos.',
    'hero.ctaPrimary': 'Ver CV',
    'hero.ctaSecondary': 'Ir ao blog',
    'home.aboutTitle': 'Quem sou',
    'home.aboutBody': 'Agência me define: se existe um problema, encontro uma forma de avançá-lo. Trabalhei com backend, automação, sistemas distribuídos e IA aplicada.',
    'home.focusTitle': 'Agora',
    'home.focusBody': 'Busco oportunidades para construir produto sério sem perder personalidade: software útil, interfaces cuidadosas e uma narrativa honesta sobre o que faço.',
    'home.latestStoryTitle': 'Última história',
    'home.latestStoryLink': 'Abrir história',
    'blog.title': 'Histórias',
    'blog.description': 'Um espaço para publicar histórias, aprendizados, fotos e processos usando Markdown.',
    'blog.empty': 'Ainda não há histórias publicadas.',
    'blog.back': '← Voltar ao blog',
    'blog.readMore': 'Ler história',
    'blog.markdownBody': 'Para histórias com fotos, Astro funciona muito bem com content collections + Markdown. Você pode escrever arquivos .md dentro de src/content/blog e usar imagens com ![alt](/caminho.jpg). Se depois quiser componentes embutidos, MDX é o próximo passo natural.',
    'cv.experienceTitle': 'Experiência',
    'cv.educationTitle': 'Educação',
    'cv.profileTitle': 'Perfil profissional',
    'cv.projectsTitle': 'Projetos selecionados',
    'cv.awardsTitle': 'Hackathons e prêmios',
    'cv.skillsTitle': 'Stack',
    'cv.languagesTitle': 'Idiomas',
  },
} as const;

export function getLangFromUrl(url: URL): Lang {
  const [, maybeLang] = url.pathname.split('/');
  if (maybeLang && maybeLang in languages) return maybeLang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

export function stripLocale(pathname: string) {
  const segments = pathname.split('/').filter(Boolean);
  if (segments[0] && segments[0] in languages) {
    return '/' + segments.slice(1).join('/');
  }
  return pathname || '/';
}

export function localizePath(lang: Lang, pathname: string) {
  const clean = stripLocale(pathname);
  if (lang === defaultLang) return clean === '' ? '/' : clean;
  return clean === '/' ? `/${lang}` : `/${lang}${clean}`;
}
