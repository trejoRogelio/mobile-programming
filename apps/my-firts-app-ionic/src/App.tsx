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
import Pag1 from './pages/Pag1';
import Pag2 from './pages/Pag2';
import Pag3 from './pages/Pag3';

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
                    <Route exact path="/Pag1">
                        <Pag1 />
                    </Route>
                    <Route exact path="/Pag2">
                        <Pag2 />
                    </Route>
                    <Route path="/Pag3">
                        <Pag3 />
                    </Route>
                    <Route exact path="/">
                        <Redirect to="/Pag1" />
                    </Route>
                </IonRouterOutlet>
                <IonTabBar slot="bottom">
                    <IonTabButton tab="Pag1" href="/Pag1">
                        <IonIcon aria-hidden="true" icon={planet} />
                        <IonLabel>Inicio</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="Pag2" href="/Pag2">
                        <IonIcon icon={camera} />
                        <IonLabel>Cámara</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="Pag3" href="/Pag3">
                        <IonIcon aria-hidden="true" icon={images} />
                        <IonLabel>Galería</IonLabel>
                    </IonTabButton>
                </IonTabBar>
            </IonTabs>
        </IonReactRouter>
    </IonApp>
);

export default App;
