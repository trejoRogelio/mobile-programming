// BotonComponent.tsx
import React from 'react';
import { IonButton } from '@ionic/react';

const BotonComponent: React.FC<{ onClick: () => void; label: string }> = ({ onClick, label }) => (
  <IonButton onClick={onClick}>{label}</IonButton>
);

export default BotonComponent;
