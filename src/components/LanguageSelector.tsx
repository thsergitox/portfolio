import React from 'react';
import { languages } from '../i18n/locales';

interface Props {
  currentLang: string;
  currentPath: string;
}

export default function LanguageSelector({ currentLang, currentPath }: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value;
    let newPath = currentPath;
    
    // Remove current language prefix if exists
    const langPattern = /^\/(es|en|pt)(\/|$)/;
    newPath = newPath.replace(langPattern, '/');
    
    // Add new language prefix (except for default 'es')
    if (newLang !== 'es') {
      newPath = `/${newLang}${newPath}`;
    }
    
    window.location.href = newPath || '/';
  };

  return (
    <select
      value={currentLang}
      onChange={handleChange}
      className="language-selector"
      aria-label="Select language"
    >
      {Object.entries(languages).map(([lang, label]) => (
        <option key={lang} value={lang}>
          {lang.toUpperCase()}
        </option>
      ))}
    </select>
  );
}