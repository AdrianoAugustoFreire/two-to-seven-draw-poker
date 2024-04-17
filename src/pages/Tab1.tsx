import { IonContent, IonHeader, IonPage, IonRange, IonTitle, IonToolbar } from '@ionic/react';
import { IonCol, IonGrid, IonRow } from '@ionic/react';

import PlayingCard from '../components/PlayingCard';

import './Tab1.css';
import { useState } from 'react';
import Player from '../components/Player';
import { getCardsOfFullDeck, shuffleArray } from '../components/Deck';

const Tab1: React.FC = () => {

  const [plqyerCount, setPlayerCount] = useState<number>(3)

  const shuffledDeck = shuffleArray(getCardsOfFullDeck());

  const playerCards = shuffledDeck.splice(0, 5);

	const handlePlayerCardClick = () => {

	}

  function handlePlayerCountChange(event: CustomEvent) {
    const newValue = event.detail.value as number;
    setPlayerCount(newValue);
  }

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
        <IonGrid fixed={true}>
          <IonRow>
            <IonCol size='8'>
              <IonRange
                min={1}
                max={7}
                step={1}
                snaps={true}
                value={plqyerCount}
                onIonChange={handlePlayerCountChange}>
             </IonRange>
            </IonCol>
            <IonCol>Players {plqyerCount}</IonCol>
          </IonRow>
          {Array.from({ length: plqyerCount }, (_, index) => (
            <IonRow key={index}>
              <IonCol>
                <Player value={index} selected={false} cards={shuffledDeck.splice(0, 5)} />
              </IonCol>
            </IonRow>
          ))}
          <IonRow>
            <IonCol>Your Cards</IonCol>
          </IonRow>
          <IonRow className='cards'>
            {playerCards.map( card =>
              <IonCol>
                <PlayingCard
                  suit={card.suit}
                  value={card.value}
                  open={true}
                  width={88}
                  height={124}
                  selected={false}
                  onClick={handlePlayerCardClick}>
                </PlayingCard>
              </IonCol>
            )}
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
