import React from 'react'
import { IonContent, IonImg } from '@ionic/react'
import logo from '../images/logo.png'

export function Home() {
    <IonContent fullscreen className="ion-padding">
        <div className="biography-container">
          <h1>Galeria de Fotos</h1>
          <IonImg src={logo} alt="Mark Zuckerberg" className="biography-image" />
          <p>
            Esta aplicaion funciona con el Framework Ionic
          </p>
        </div>
      </IonContent>
}

