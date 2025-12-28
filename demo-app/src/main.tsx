import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'rsuite/dist/rsuite.min.css'
import './index.css'
import App from './App.tsx'
import { ThemeProvider, CustomProvider } from '@eha/design-system'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CustomProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </CustomProvider>
  </StrictMode>,
)
