import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

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
import TakePictureTab from './pages/tabs/TakePictureTab';
import GalleryTab from './pages/tabs/GalleryTab';
import {
    PHOTO_STORAGE,
    UserPhoto,
    usePhotoGallery,
} from './hooks/UserPhotoGallery';
import { useEffect, useState } from 'react';
import { Preferences } from '@capacitor/preferences';

setupIonicReact();

const App: React.FC = () => {
    const { photos: savedPhotos, takePhoto } = usePhotoGallery();

    // Photos
    const [photos, setPhotos] = useState<UserPhoto[]>();

    useEffect(() => {
        setPhotos(savedPhotos);
    }, [savedPhotos]);

    const TakePhotoHandler = () => {
        takePhoto();
    };

    const DeletePhotoByFilePath = (filepath: string) => {
        const arrPhotos = [...photos!];
        const photo = photos!.find(
            (photo: UserPhoto) => photo.filepath == filepath
        );
        const index = arrPhotos.indexOf(photo!, 0);
        if (index > -1) {
            arrPhotos.splice(index, 1);
            setPhotos(arrPhotos);
            Preferences.set({
                key: PHOTO_STORAGE,
                value: JSON.stringify(arrPhotos),
            });
        }
    };

    return (
        <IonApp>
            <IonReactRouter>
                <IonRouterOutlet>
                    <Route exact path="/home">
                        <Home />
                    </Route>
                    <Route exact path="/">
                        <Redirect to="/home" />
                    </Route>
                    <Route path="/takepicture">
                        <TakePictureTab takePhoto={TakePhotoHandler} />
                    </Route>
                    <Route path="/gallery">
                        <GalleryTab
                            photos={photos}
                            deletePhoto={DeletePhotoByFilePath}
                        />
                    </Route>
                </IonRouterOutlet>
            </IonReactRouter>
        </IonApp>
    );
};
export default App;
