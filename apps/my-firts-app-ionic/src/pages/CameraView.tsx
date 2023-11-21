// CameraView.tsx
import React from 'react';
import { IonCard, IonCardContent } from '@ionic/react';
import BotonComponent from '../components/BotonComponent';
import EncabezadoComponent from '../components/EncabezadoComponent';
import { useAppContext } from './AppContext';

const CameraView: React.FC = () => {
  const { state, dispatch } = useAppContext();
  const [caption, setCaption] = React.useState('');

  const handleUpdatePhoto = (id: string) => {
    const updatedPhoto = { id, caption };
    dispatch({ type: 'UPDATE_PHOTO', payload: { id, data: updatedPhoto } });
    setCaption('');
  };

  return (
    <IonCard>
      <IonCardContent>
        <EncabezadoComponent title="Camera View" />
        <IonCardContent>
          <BotonComponent
            onClick={() => handleUpdatePhoto(state.photos[0].id)}
            label="Actualizar Foto"
          />
        </IonCardContent>
      </IonCardContent>
    </IonCard>
  );
};

export default CameraView;
