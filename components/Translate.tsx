'use client'

import { useTranslation } from '@/hooks/useTranslation'

export default function Translate({ tKey }: { tKey: string }) {
  const { t } = useTranslation()
  return <>{t(tKey)}</>
}
