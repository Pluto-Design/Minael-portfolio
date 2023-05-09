import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { TranslateProvider } from './contexts/useTranslate.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <TranslateProvider>
      <App />
    </TranslateProvider>
  </React.StrictMode>,
)