import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { ThemeProvider } from "@/components/ui/theme-provider";



const rootElement = document.getElementById('root')!;
createRoot(rootElement).render(
  <StrictMode>
          <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <BrowserRouter>
    <App />
  </BrowserRouter>
  </ThemeProvider>
  </StrictMode>
);
