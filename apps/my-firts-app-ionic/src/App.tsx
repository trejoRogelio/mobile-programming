// App.tsx
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonIcon,
  IonLabel,
  IonContent,
  IonHeader,
  IonPage,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { planet, images, square } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import PhotoGallery from './pages/PhotoGallery';
import CameraView from './pages/CameraView';
import Tab3 from './pages/Tab3';
import { AppProvider } from './pages/AppContext';

const App: React.FC = () => (
  <IonApp>
    <AppProvider>
      <IonReactRouter>
        <IonPage>
          <IonHeader>
            <h1>My Ionic App</h1>
          </IonHeader>
          <IonContent>
            <IonTabs>
              <IonRouterOutlet>
                <Route exact path="/tab1">
                  <Tab1 />
                </Route>
                <Route exact path="/tab2">
                  <PhotoGallery />
                </Route>
                <Route exact path="/tab2/camera">
                  <CameraView />
                </Route>
                <Route path="/tab3">
                  <Tab3 />
                </Route>
                <Route exact path="/">
                  <Redirect to="/tab1" />
                </Route>
              </IonRouterOutlet>
              <IonTabBar slot="bottom">
                <IonTabButton tab="tab1" href="/tab1">
                  <IonIcon aria-hidden="true" icon={planet} />
                  <IonLabel>Tab 1</IonLabel>
                </IonTabButton>
                <IonTabButton tab="tab2" href="/tab2">
                  <IonIcon icon={images} />
                  <IonLabel>Photos</IonLabel>
                </IonTabButton>
                <IonTabButton tab="tab3" href="/tab3">
                  <IonIcon aria-hidden="true" icon={square} />
                  <IonLabel>Tab 3</IonLabel>
                </IonTabButton>
              </IonTabBar>
            </IonTabs>
          </IonContent>
        </IonPage>
      </IonReactRouter>
    </AppProvider>
  </IonApp>
);

export default App;
