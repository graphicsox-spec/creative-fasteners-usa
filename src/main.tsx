import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@fontsource-variable/sora';
import '@fontsource-variable/space-grotesk';
import App from './App';
import './styles/global.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
