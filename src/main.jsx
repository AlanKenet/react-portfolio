import React from 'react'
import ReactDOM from 'react-dom/client'

import App from '@/App'

import { Analytics } from '@vercel/analytics/react'

import '@/styles/index.css'
import '@/styles/utils.css'
import '@/styles/animations.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Analytics />
  </React.StrictMode>
)
