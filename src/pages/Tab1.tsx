import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { IonCol, IonGrid, IonRow } from '@ionic/react';

import PlayingCard from '../components/PlayingCard';
import Suits from '../components/Suits';

import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid fixed={true}>
          <IonRow>
            <IonCol><PlayingCard suit={Suits.spades} value={'2'} open={true}></PlayingCard></IonCol>
            <IonCol><PlayingCard suit={Suits.clubs} value={'3'} open={true}></PlayingCard></IonCol>
            <IonCol><PlayingCard suit={Suits.diamonds} value={'4'} open={false}></PlayingCard></IonCol>
            <IonCol><PlayingCard suit={Suits.hearts} value={'5'} open={true}></PlayingCard></IonCol>
            <IonCol><PlayingCard suit={Suits.spades} value={'7'} open={true}></PlayingCard></IonCol>
          </IonRow>
          <IonRow>
            <IonCol><PlayingCard suit={Suits.spades} value={'12'} open={true}></PlayingCard></IonCol>
            <IonCol><PlayingCard suit={Suits.clubs} value={'3'} open={true}></PlayingCard></IonCol>
            <IonCol><PlayingCard suit={Suits.diamonds} value={'14'} open={false}></PlayingCard></IonCol>
            <IonCol><PlayingCard suit={Suits.hearts} value={'5'} open={true}></PlayingCard></IonCol>
            <IonCol><PlayingCard suit={Suits.spades} value={'7'} open={true}></PlayingCard></IonCol>
          </IonRow>          
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
