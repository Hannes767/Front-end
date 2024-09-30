import React from 'react'
import { useTranslation } from 'react-i18next';

function NotFound() {
  const { t } = useTranslation();
  return (
    <div>
      <div>NotFound</div>
      <h1>{t('page-not-found')}</h1>
    </div>
  )
}

export default NotFound