import React from 'react';
import {
  IonModal,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
} from '@ionic/react';
import { close, checkmark } from 'ionicons/icons';

interface DeleteConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const DeleteConfirmationModal: React.FC<DeleteConfirmationModalProps> = ({ isOpen, onClose, onConfirm }) => {
  return (
    <IonModal isOpen={isOpen}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Delete Confirmation</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol size="12">
              <p>Are you sure you want to delete this photo?</p>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="6">
              <IonButton onClick={onConfirm} color="danger" expand="full">
                <IonIcon icon={checkmark} slot="start" />
                Yes
              </IonButton>
            </IonCol>
            <IonCol size="6">
              <IonButton onClick={onClose} color="light" expand="full">
                <IonIcon icon={close} slot="start" />
                No
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonModal>
  );
};

export default DeleteConfirmationModal;
