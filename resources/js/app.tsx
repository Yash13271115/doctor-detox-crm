import './bootstrap'
import React from 'react'
import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from './components/theme-provider'
import Layout from './components/layout'

createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.tsx', { eager: true })
    return pages[`./Pages/${name}.tsx`]
  },
  setup({ el, App, props }) {
    createRoot(el).render(
      <React.StrictMode>
        <ThemeProvider>
          <Layout>
            <App {...props} />
          </Layout>
        </ThemeProvider>
      </React.StrictMode>
    )
  },
})
