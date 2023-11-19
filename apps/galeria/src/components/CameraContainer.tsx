import './CameraCointainer.css';
import { camera, trash, close } from 'ionicons/icons';
import {
  IonFab,
  IonFabButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
} from '@ionic/react';
import { usePhotoGallery } from '../hooks/usePhotoGallery';

interface ContainerProps {
  name: string;
  takePhoto: ()=> void;
}

const CameraContainer: React.FC<ContainerProps> = ({ name, takePhoto }) => {
  return (
    <div>
      <div className="container">
        <strong>{name}</strong>
      </div>
      <div>
      </div>
      <div>
        <IonFab vertical="bottom" horizontal="center" slot="fixed">
          <IonFabButton onClick={() => takePhoto()}>
            <IonIcon icon={camera}/>
          </IonFabButton>
        </IonFab>
      </div>
    </div>
  );
};

export default CameraContainer;