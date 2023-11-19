import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { PhotoProvider } from './hooks/PhotoContext';
defineCustomElements(window);
const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <PhotoProvider>
      <App />
    </PhotoProvider>
  </React.StrictMode>
);