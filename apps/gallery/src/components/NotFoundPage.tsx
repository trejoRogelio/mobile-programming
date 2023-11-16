import { IonCard, IonCardHeader, IonCardTitle, IonImg } from '@ionic/react';
type TxtProps = {
  text: string;
};
export const NotFoundPage = ({ text }: TxtProps) => {
  return (
    <IonCard
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <div style={{ maxWidth: 300 }}>
        <IonImg
          src='https://cdn.iconscout.com/icon/premium/png-256-thumb/404-1531421-1297242.png'
          alt='Regresate'
        />
      </div>
      <IonCardHeader>
        <IonCardTitle>{text}</IonCardTitle>
      </IonCardHeader>
    </IonCard>
  );
};
