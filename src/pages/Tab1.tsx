import { IonContent, IonHeader, IonPage, IonRange, IonTitle, IonToolbar } from '@ionic/react';
import { IonCol, IonGrid, IonRow } from '@ionic/react';
import { IonList, IonItem } from '@ionic/react';

import PlayingCard from '../components/PlayingCard';
import Suits from '../components/Suits';

import './Tab1.css';
import { useState } from 'react';

export interface Deck {
  Cards: []
}
export interface Player {
  Deck: Deck
}

const [ players, setPlayers ] = useState<Player[]> ([])

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Odds Calculator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Odds Calculator</IonTitle>
          </IonToolbar>
        </IonHeader>
          <IonItem>
            <IonRange min={1} max={7} labelPlacement='end' label='Number of Players'>
              {/* onIonChange={({ detail }) => console.log('ionChange emitted value: ' + detail.value)} */}
            </IonRange>
          </IonItem>
          <IonItem>
            <IonGrid fixed={true}>
              <IonRow>
                <IonCol><PlayingCard suit={Suits.spades} value={'2'} open={true}></PlayingCard></IonCol>
                <IonCol><PlayingCard suit={Suits.clubs} value={'3'} open={true}></PlayingCard></IonCol>
                <IonCol><PlayingCard suit={Suits.hearts} value={'5'} open={true}></PlayingCard></IonCol>
                <IonCol><PlayingCard suit={Suits.spades} value={'7'} open={true}></PlayingCard></IonCol>
                <IonCol><PlayingCard suit={Suits.diamonds} value={'4'} open={false}></PlayingCard></IonCol>
              </IonRow>
            </IonGrid>
          </IonItem>
          <IonItem>
            <IonGrid fixed={true}>
              <IonRow>
                <IonCol><PlayingCard suit={Suits.spades} value={'12'} open={true}></PlayingCard></IonCol>
                <IonCol><PlayingCard suit={Suits.clubs} value={'3'} open={true}></PlayingCard></IonCol>
                <IonCol><PlayingCard suit={Suits.hearts} value={'9'} open={true}></PlayingCard></IonCol>
                <IonCol><PlayingCard suit={Suits.diamonds} value={'12'} open={true}></PlayingCard></IonCol>
                <IonCol><PlayingCard suit={Suits.spades} value={'7'} open={true}></PlayingCard></IonCol>
              </IonRow>
            </IonGrid>
          </IonItem>
        
          <IonItem>
            <IonGrid fixed={true}>
              <IonRow class='chooser'>
                <IonCol><PlayingCard suit={Suits.clubs} value={'1'} open={true}></PlayingCard></IonCol>
                <IonCol><PlayingCard suit={Suits.clubs} value={'2'} open={true}></PlayingCard></IonCol>
                <IonCol><PlayingCard suit={Suits.clubs} value={'3'} open={true}></PlayingCard></IonCol>
                <IonCol><PlayingCard suit={Suits.clubs} value={'4'} open={true}></PlayingCard></IonCol>
                <IonCol><PlayingCard suit={Suits.clubs} value={'5'} open={true}></PlayingCard></IonCol>
                <IonCol><PlayingCard suit={Suits.clubs} value={'6'} open={true}></PlayingCard></IonCol>
                <IonCol><PlayingCard suit={Suits.clubs} value={'7'} open={true}></PlayingCard></IonCol>
                <IonCol><PlayingCard suit={Suits.clubs} value={'8'} open={true}></PlayingCard></IonCol>
                <IonCol><PlayingCard suit={Suits.clubs} value={'9'} open={true}></PlayingCard></IonCol>
                <IonCol><PlayingCard suit={Suits.clubs} value={'10'} open={true}></PlayingCard></IonCol>
                <IonCol><PlayingCard suit={Suits.clubs} value={'11'} open={true}></PlayingCard></IonCol>
                <IonCol><PlayingCard suit={Suits.clubs} value={'12'} open={true}></PlayingCard></IonCol>
                <IonCol><PlayingCard suit={Suits.clubs} value={'13'} open={true}></PlayingCard></IonCol>
              </IonRow>
              <IonRow class='chooser'>
                <IonCol><PlayingCard suit={Suits.diamonds} value={'1'} open={true}></PlayingCard></IonCol>
                <IonCol><PlayingCard suit={Suits.diamonds} value={'2'} open={true}></PlayingCard></IonCol>
                <IonCol><PlayingCard suit={Suits.diamonds} value={'3'} open={true}></PlayingCard></IonCol>
                <IonCol><PlayingCard suit={Suits.diamonds} value={'4'} open={true}></PlayingCard></IonCol>
                <IonCol><PlayingCard suit={Suits.diamonds} value={'5'} open={true}></PlayingCard></IonCol>
                <IonCol><PlayingCard suit={Suits.diamonds} value={'6'} open={true}></PlayingCard></IonCol>
                <IonCol><PlayingCard suit={Suits.diamonds} value={'7'} open={true}></PlayingCard></IonCol>
                <IonCol><PlayingCard suit={Suits.diamonds} value={'8'} open={true}></PlayingCard></IonCol>
                <IonCol><PlayingCard suit={Suits.diamonds} value={'9'} open={true}></PlayingCard></IonCol>
                <IonCol><PlayingCard suit={Suits.diamonds} value={'10'} open={true}></PlayingCard></IonCol>
                <IonCol><PlayingCard suit={Suits.diamonds} value={'11'} open={true}></PlayingCard></IonCol>
                <IonCol><PlayingCard suit={Suits.diamonds} value={'12'} open={true}></PlayingCard></IonCol>
                <IonCol><PlayingCard suit={Suits.diamonds} value={'13'} open={true}></PlayingCard></IonCol>
              </IonRow>
            </IonGrid>
          </IonItem>

      </IonContent>
    </IonPage>
  );
};

export default Tab1;
