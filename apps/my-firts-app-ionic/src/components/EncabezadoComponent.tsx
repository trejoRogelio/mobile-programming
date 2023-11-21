// EncabezadoComponent.tsx
import React from 'react';
import { IonCardHeader, IonCardTitle } from '@ionic/react';

const EncabezadoComponent: React.FC<{ title: string }> = ({ title }) => (
  <IonCardHeader>
    <IonCardTitle>{title}</IonCardTitle>
  </IonCardHeader>
);

export default EncabezadoComponent;
