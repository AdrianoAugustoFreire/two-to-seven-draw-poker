import { IonContent, IonHeader, IonPage, IonRange, IonTitle, IonToolbar } from '@ionic/react';
import { IonCol, IonGrid, IonRow } from '@ionic/react';
import { IonList, IonItem } from '@ionic/react';

import PlayingCard from '../components/PlayingCard';
import Suits from '../components/Suits';

import './Tab1.css';
import { useState } from 'react';
import Deck, { fullDeck } from '../components/Deck';

// const [ players, setPlayers ] = useState<Player[]> ([])

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
        <IonGrid fixed={true}>
          <IonRow className='cards'>
            <IonCol><PlayingCard suit={Suits.spades} value={'2'} open={true} width={88} height={124}></PlayingCard></IonCol>
            <IonCol><PlayingCard suit={Suits.clubs} value={'3'} open={true} width={88} height={124}></PlayingCard></IonCol>
            <IonCol><PlayingCard suit={Suits.hearts} value={'5'} open={true} width={88} height={124}></PlayingCard></IonCol>
            <IonCol><PlayingCard suit={Suits.spades} value={'7'} open={true} width={88} height={124}></PlayingCard></IonCol>
            <IonCol><PlayingCard suit={Suits.diamonds} value={'4'} open={false} width={88} height={124}></PlayingCard></IonCol>
          </IonRow>
          <IonRow className='cards'>
            <IonCol><PlayingCard suit={Suits.spades} value={'12'} open={true} width={88} height={124}></PlayingCard></IonCol>
            <IonCol><PlayingCard suit={Suits.clubs} value={'3'} open={true} width={88} height={124}></PlayingCard></IonCol>
            <IonCol><PlayingCard suit={Suits.hearts} value={'9'} open={true} width={88} height={124}></PlayingCard></IonCol>
            <IonCol><PlayingCard suit={Suits.diamonds} value={'12'} open={true} width={88} height={124}></PlayingCard></IonCol>
            <IonCol><PlayingCard suit={Suits.spades} value={'7'} open={true} width={88} height={124}></PlayingCard></IonCol>
          </IonRow>
          <Deck display={'full'}></Deck>
          <Deck display={'shuffled'}></Deck>
        </IonGrid>
        {/* <IonItem>
          <Deck state={'shuffled'}></Deck>
        </IonItem> */}
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
