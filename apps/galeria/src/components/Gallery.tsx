import { IonCol, IonGrid, IonImg, IonPopover, IonRow } from '@ionic/react';
import { UserPhoto } from '../types/userPhoto';
import { ImgPopOver } from './ImgPopOver';

interface GalleryProps {
  photos: UserPhoto[];
  deletePhoto: (id: number) => void;
  replacePhoto: (id: number) => void;
}
export const Gallery = ({
  photos,
  deletePhoto,
  replacePhoto,
}: GalleryProps) => {
  return (
    <div>
      <IonGrid>
        <IonRow>
          {photos.map((photo) => (
            <IonCol size="6" key={photo.filepath}>
              {photo.webviewPath && (
                <IonImg src={photo.webviewPath} id={`img-${photo.id}`} />
              )}
              <IonPopover trigger={`img-${photo.id}`} triggerAction="click">
                <ImgPopOver
                  id={photo.id}
                  onDelete={deletePhoto}
                  onUpdate={replacePhoto}
                />
              </IonPopover>
            </IonCol>
          ))}
        </IonRow>
      </IonGrid>
    </div>
  );
};