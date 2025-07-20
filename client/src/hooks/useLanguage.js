
import { useState } from 'react';
import { translations } from '../data/translation';

export const useLanguage = (externalLanguage, externalSetLanguage) => {
  const [internalLanguage, internalSetLanguage] = useState('en');
  const language = externalLanguage !== undefined ? externalLanguage : internalLanguage;
  const setLanguage = externalSetLanguage !== undefined ? externalSetLanguage : internalSetLanguage;

  const t = (key) => {
    try {
      const keys = key.split('.');
      let value = translations[language];
      for (const k of keys) {
        value = value?.[k];
        if (value === undefined) {
          console.warn(`Translation missing for key: ${key} in language: ${language}`);
          return key; // fallback to key if not found
        }
      }
      return value;
    } catch (error) {
      console.error('Translation error:', error);
      return key;
    }
  };

  return { language, setLanguage, t };
};