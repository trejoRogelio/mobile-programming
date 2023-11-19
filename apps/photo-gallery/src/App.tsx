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
<<<<<<< Updated upstream
<<<<<<< Updated upstream
import { images, camera } from 'ionicons/icons';
=======
import {  camera, images } from 'ionicons/icons';
>>>>>>> Stashed changes
=======
import {  camera, images } from 'ionicons/icons';
>>>>>>> Stashed changes
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';

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

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/tab1">
            <Tab1 />
          </Route>
          <Route exact path="/tab2">
            <Tab2 />
          </Route>
          <Route exact path="/">
            <Redirect to="/tab1" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/tab1">
            <IonIcon aria-hidden="true" icon={images} />
            <IonLabel>Gallery</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/tab2">
            <IonIcon aria-hidden="true" icon={camera} />
<<<<<<< Updated upstream
<<<<<<< Updated upstream
            <IonLabel>Camera</IonLabel>
=======
            <IonLabel>Tab 2</IonLabel>
>>>>>>> Stashed changes
=======
            <IonLabel>Tab 2</IonLabel>
>>>>>>> Stashed changes
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
