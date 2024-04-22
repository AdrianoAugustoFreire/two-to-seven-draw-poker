import { IonButton, IonButtons, IonContent, IonHeader, IonInput, IonItem, IonPage, IonRange, IonTitle, IonToolbar, useIonModal } from '@ionic/react';
import { IonCol, IonGrid, IonRow } from '@ionic/react';
import { OverlayEventDetail } from '@ionic/core/components';

import PlayingCard from '../components/PlayingCard';

import './Tab1.css';
import { useRef, useState } from 'react';
import Player from '../components/Player';
import { getCardsOfFullDeck, shuffleArray } from '../components/Deck';

const Tab1: React.FC = () => {

  const [plqyerCount, setPlayerCount] = useState<number>(3)

  const shuffledDeck = shuffleArray(getCardsOfFullDeck());

  const playerCards = shuffledDeck.splice(0, 5);

	const handlePlayerCardClick = () => {
    openModal();
	}

  function handlePlayerCountChange(event: CustomEvent) {
    const newValue = event.detail.value as number;
    setPlayerCount(newValue);
  }

  const ModalExample = ({
    onDismiss,
  }: {
    onDismiss: (data?: string | null | undefined | number, role?: string) => void;
  }) => {
    const inputRef = useRef<HTMLIonInputElement>(null);
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonButton color="medium" onClick={() => onDismiss(null, 'cancel')}>
                Cancel
              </IonButton>
            </IonButtons>
            <IonTitle>Welcome</IonTitle>
            <IonButtons slot="end">
              <IonButton onClick={() => onDismiss(inputRef.current?.value, 'confirm')} strong={true}>
                Confirm
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonItem>
            <IonInput ref={inputRef} labelPlacement="stacked" label="Enter your name" placeholder="Your name" />
          </IonItem>
        </IonContent>
      </IonPage>
    );
  };

  const [present, dismiss] = useIonModal(ModalExample, {
    onDismiss: (data: string, role: string) => dismiss(data, role),
  });
  const [message, setMessage] = useState('This modal example uses the modalController to present and dismiss modals.');

  function openModal() {
    present({
      onWillDismiss: (ev: CustomEvent<OverlayEventDetail>) => {
        if (ev.detail.role === 'confirm') {
          setMessage(`Hello, ${ev.detail.data}!`);
        }
      },
    });
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
