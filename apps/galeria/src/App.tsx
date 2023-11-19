import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonBadge,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { camera, image } from 'ionicons/icons';
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
import { usePhotoGallery } from './hooks/usePhotoGallery';

setupIonicReact();

const App: React.FC = () => {
  const {
    photos,
    takePhoto,
    newPhotosCount,
    resetNewPhotosCounter,
    deletePhoto,
    replacePhoto
  } = usePhotoGallery();
  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/tab1">
              <Tab1 takePhoto={takePhoto} />
            </Route>
            <Route exact path="/tab2">
              <Tab2
                photos={photos}
                resetNewPhotosCounter={resetNewPhotosCounter}
                deletePhoto={deletePhoto}
                replacePhoto={replacePhoto}
              />
            </Route>
            <Route exact path="/">
              <Redirect to="/tab1" />
            </Route>
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="tab1" href="/tab1">
              <IonIcon aria-hidden="true" icon={camera} />
              <IonLabel>Camera</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab2" href="/tab2">
              {newPhotosCount > 0 && (
                <IonBadge color="danger">{newPhotosCount}</IonBadge>
              )}
              <IonIcon aria-hidden="true" icon={image} />
              <IonLabel>Galeria</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;