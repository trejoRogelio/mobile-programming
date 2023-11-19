// App.tsx
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { images, square, planet, camera } from 'ionicons/icons';

import GalleryPage from './pages/GalleryPage';
import TakePhotoPage from './pages/TakePhotoPage';
import Tab3 from './pages/Tab3';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

// Agrega un nuevo archivo CSS para tus estilos personalizados
import './App.css';

setupIonicReact();

const App: React.FC = () => (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/tab2">
              <GalleryPage />
            </Route>
            <Route exact path="/tab2/take-photo">
              <TakePhotoPage />
            </Route>
            <Route path="/tab3">
              <Tab3 />
            </Route>
          </IonRouterOutlet>
          <IonTabBar slot="bottom" className="custom-tab-bar">
            <IonTabButton tab="tab2" href="/tab2" className="custom-tab-button">
              <IonIcon icon={images} className="custom-tab-icon" />
              <IonLabel class="custom-tab-label">Gallery</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab2/take-photo" href="/tab2/take-photo" className="custom-tab-button">
              <IonIcon icon={camera} className="custom-tab-icon" />
              <IonLabel class="custom-tab-label">Take Photo</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
  
  export default App;