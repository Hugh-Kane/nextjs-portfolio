import { useLanguage } from '@/contexts/LanguageContext'
import enTranslations from '@/data/locales/en.json'
import jaTranslations from '@/data/locales/ja.json'

const translations = {
  en: enTranslations,
  ja: jaTranslations,
}

export function useTranslation() {
  const { currentLanguage } = useLanguage()
  const translationObject = translations[currentLanguage]

  function t(key: string): string {
    const keys = key.split('.')
    let result: unknown = translationObject

    for (const k of keys) {
      result = (result as Record<string, unknown>)?.[k]
    }

    return typeof result === 'string' ? result : key
  }

  return { t, currentLanguage }
}
