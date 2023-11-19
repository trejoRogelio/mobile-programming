import React from 'react'
import { IonIcon } from '@ionic/react';
import { camera, trash, close } from 'ionicons/icons';
import { UserPhoto } from '../hooks/usePhotoGallery';
interface Tab1Props {
    deletePhoto: (photo: UserPhoto) => Promise<void>;
    photos: UserPhoto[];
    takePhoto: () => Promise<void>;
  }
const TrashButton: React.FC<Tab1Props> = ({ deletePhoto, photos, takePhoto })=> {
  return (
    
      <IonIcon
                  icon={trash}
                //   onClick={() => setPhotoToDelete(photo)}
                  style={{
                    position: 'absolute',
                    top: '5px',
                    right: '5px',
                    color: 'red',
                    cursor: 'pointer',
                  }}
                />
  )
   
}

export default TrashButton
