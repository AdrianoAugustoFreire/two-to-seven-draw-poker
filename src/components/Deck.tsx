import { IonCol, IonRow } from '@ionic/react';

import DeckTypes from './DeckTypes';
import PlayingCard from './PlayingCard';
import { useState } from 'react';
import Card from './Card';

interface ContainerProps {
	display: string;
	cards: Card[] | undefined;
}
export interface Deck {
	cards: Card[];
	deckType: DeckTypes;
}

const Deck: React.FC<ContainerProps> = ({ display, cards }) => {

	if (display === 'full') {
		return (<>{fullDeck()}</>)
	} else if (display === 'game' && cards) {
		return (<>{deckWithPreviouslyTakenCardsUnavailable( cards )}</>)
	} else {
		return (<>{getShuffledDeck()}</>)
	}
};

export function deckWithPreviouslyTakenCardsUnavailable( remainingCards: Card[] ): React.ReactNode {
	const deck = getCardsOfFullDeck();
	for ( const card of deck ) {
		card.onHand = remainingCards.findIndex(c => c.value === card.value && c.suit === card.suit) !== -1;
	}
	return renderDeck(deck);
}

export function fullDeck(): React.ReactNode {

	const fullDeck = getCardsOfFullDeck();

	return renderDeck(fullDeck);
}

export function getShuffledDeck(): React.ReactNode {

	const shuffledCards = shuffleArray(getCardsOfFullDeck());

	return renderDeck(shuffledCards);
}

export function getCardsOfFullDeck(): Card[] {
	console.debug(`getCardsFullDeck()`);
  	const values: string[] = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K"];
	const deck: Card[] = [];
	for (var s = 0; s < 4; s++) {
		for (const value of values) {
			deck.push({
				suit: s,
				value,
				onHand: false });
		}
	}
	return deck;
}

export function shuffleArray<T>(array: T[]): T[] {
  console.debug(`ShuffleArray array ${array.length}`);
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

function renderDeck(cardsToRender: Card[]): React.ReactNode {

	const [selected, setSelected] = useState<boolean>(false);

	const handleCardClick = () => {
		setSelected(!selected);
	};

	return  <>
		<IonRow className='deck'>
			{cardsToRender.slice(0, 13).map( card =>
				<IonCol>
					<PlayingCard suit={card.suit} value={card.value} open={true} width={44} height={62} selected={false} unavailable={card.onHand} onClick={card.onHand ? undefined: handleCardClick}></PlayingCard>
				</IonCol>
			)}
		</IonRow>
		<IonRow className='deck'>
			{cardsToRender.slice(13, 26).map(card =>
				<IonCol>
					<PlayingCard suit={card.suit} value={card.value} open={true} width={44} height={62} selected={false} unavailable={card.onHand} onClick={card.onHand ? undefined: handleCardClick}></PlayingCard>
				</IonCol>
			)}
		</IonRow>
		<IonRow className='deck'>
			{cardsToRender.slice(26, 39).map(card =>
				<IonCol>
					<PlayingCard suit={card.suit} value={card.value} open={true} width={44} height={62} selected={false} unavailable={card.onHand} onClick={card.onHand ? undefined: handleCardClick}></PlayingCard>
				</IonCol>
			)}
		</IonRow>
		<IonRow className='deck'>
			{cardsToRender.slice(39, 52).map(card =>
				<IonCol>
					<PlayingCard suit={card.suit} value={card.value} open={true} width={44} height={62} selected={false} unavailable={card.onHand} onClick={card.onHand ? undefined: handleCardClick}></PlayingCard>
				</IonCol>
			)}
		</IonRow>
	</>
}

export default Deck;