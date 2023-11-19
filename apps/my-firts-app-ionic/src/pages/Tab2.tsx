// Tab2.tsx
import React from 'react';
import { IonPage, IonRouterOutlet, IonTabs, IonTabBar, IonTabButton, IonLabel, IonIcon } from '@ionic/react';
import { Route, Redirect } from 'react-router-dom';
import TakePhotoPage from './TakePhotoPage';
import GalleryPage from './GalleryPage';
import { camera, images } from 'ionicons/icons';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/tab2/take-photo" component={TakePhotoPage} exact={true} />
          <Route path="/tab2/gallery" component={GalleryPage} exact={true} />
          <Redirect from="/tab2" to="/tab2/gallery" />
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="take-photo" href="/tab2/take-photo">
            <IonIcon icon={camera} />
            <IonLabel>Take Photo</IonLabel>
          </IonTabButton>

          <IonTabButton tab="gallery" href="/tab2/gallery">
            <IonIcon icon={images} />
            <IonLabel>Gallery</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonPage>
  );
};

export default Tab2;
