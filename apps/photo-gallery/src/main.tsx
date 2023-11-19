<<<<<<< Updated upstream
import { defineCustomElements } from '@ionic/pwa-elements/loader';

// Call the element loader before the render call
defineCustomElements(window);
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
=======
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
defineCustomElements(window);
>>>>>>> Stashed changes

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);