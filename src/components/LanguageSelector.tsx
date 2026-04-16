import { languages } from "../i18n/locales";

interface Props {
  currentLang: string;
  currentPath: string;
}

export default function LanguageSelector({ currentLang, currentPath }: Props) {
  const handleClick = (newLang: string) => {
    const langPattern = /^\/(es|en|pt)(\/|$)/;
    let newPath = currentPath.replace(langPattern, "/");

    if (newLang !== "es") {
      newPath = `/${newLang}${newPath}`;
    }

    window.location.href = newPath || "/";
  };

  return (
    <div className="language-selector">
      {Object.entries(languages).map(([lang, label]) => (
        <button
          key={lang}
          type="button"
          className={`lang-btn${currentLang === lang ? " active" : ""}`}
          onClick={() => handleClick(lang)}
          aria-label={`Switch to ${label}`}
          title={label}
        >
          {lang}
        </button>
      ))}
    </div>
  );
}
