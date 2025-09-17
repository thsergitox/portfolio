import React from 'react';
import { languages } from '../i18n/locales';

interface Props {
  currentLang: string;
  currentPath: string;
}

export default function LanguageSelector({ currentLang, currentPath }: Props) {
  const handleClick = (newLang: string) => {
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

  const buttonStyles = {
    base: {
      background: '#F8F8F8',
      border: '1px solid #000000',
      borderRadius: '20px',
      color: '#000000',
      padding: '0.35rem 0.75rem',
      fontFamily: 'Georgia, serif',
      fontSize: '0.85rem',
      letterSpacing: '0.05em',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      outline: 'none',
      textTransform: 'uppercase' as const,
      fontWeight: 400
    },
    active: {
      background: '#F8F8F8',
      border: '1px solid #000000',
      borderRadius: '20px',
      color: '#000000',
      padding: '0.35rem 0.75rem',
      fontFamily: 'Georgia, serif',
      fontSize: '0.85rem',
      letterSpacing: '0.05em',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      outline: 'none',
      textTransform: 'uppercase' as const,
      fontWeight: 400,
      backgroundColor: '#000000',
    }
  };

  const containerStyles = {
    display: 'flex',
    gap: '0.5rem',
    alignItems: 'center'
  };

  return (
    <div style={containerStyles}>
      {Object.entries(languages).map(([lang, label]) => (
        <button
          key={lang}
          onClick={() => handleClick(lang)}
          style={currentLang === lang ? buttonStyles.active : buttonStyles.base}
          onMouseEnter={(e) => {
            if (currentLang !== lang) {
              e.currentTarget.style.backgroundColor = '#000000';
              e.currentTarget.style.color = '#F8F8F8';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }
          }}
          onMouseLeave={(e) => {
            if (currentLang !== lang) {
              e.currentTarget.style.backgroundColor = '#F8F8F8';
              e.currentTarget.style.color = '#000000';
              e.currentTarget.style.transform = 'translateY(0)';
            }
          }}
          aria-label={`Switch to ${label}`}
          title={label}
        >
          {lang}
        </button>
      ))}
    </div>
  );
}