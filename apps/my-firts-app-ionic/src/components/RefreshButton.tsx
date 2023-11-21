// RefreshButton.tsx
import React from 'react';
import { IonButton, IonIcon } from '@ionic/react';
import { refresh } from 'ionicons/icons';

interface RefreshButtonProps {
  onClick: () => void;
}

const RefreshButton: React.FC<RefreshButtonProps> = ({ onClick }) => (
  <IonButton onClick={() => { onClick(); window.location.reload(); }}>
    <IonIcon icon={refresh} />
    Update to show recent images
  </IonButton>
);

export default RefreshButton;
