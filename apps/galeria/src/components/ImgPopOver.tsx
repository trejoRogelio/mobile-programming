import { IonButton, IonCol, IonContent, IonGrid, IonRow } from '@ionic/react';
import React from 'react';

interface ImgPopOverProps {
  id: number;
  onDelete: (id: number) => void;
  onUpdate: (id: number) => void;
}
export const ImgPopOver = ({ id, onDelete, onUpdate }: ImgPopOverProps) => {
  return (
    <div>
      <IonContent class="ion-padding">
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonButton color={'secondary'} size="small" onClick={() => onUpdate(id)}>
                Re-take
              </IonButton>
            </IonCol>
            <IonCol>
              <IonButton
                color={'danger'}
                size="small"
                onClick={() => onDelete(id)}
              >
                Delete
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </div>
  );
};