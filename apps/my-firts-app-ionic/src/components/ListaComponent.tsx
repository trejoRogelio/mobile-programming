// ListaComponent.tsx
import React from 'react';
import { IonList, IonItem } from '@ionic/react';

const ListaComponent: React.FC<{ items: string[] }> = ({ items }) => (
  <IonList>
    {items.map((item, index) => (
      <IonItem key={index}>{item}</IonItem>
    ))}
  </IonList>
);

export default ListaComponent;
