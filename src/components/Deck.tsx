import { IonCol, IonGrid, IonRow, IonItem } from '@ionic/react';

import DeckTypes from './DeckTypes';
import PlayingCard from './PlayingCard';

interface ContainerProps {
	display: string;
}
export interface Deck {
	cards: [];
	deckType: DeckTypes;
}

export interface Card {
	suit: number,
	value: string
}

const Deck: React.FC<ContainerProps> = ({ display }) => {
	if (display === 'full') {
		return (<>{fullDeck()}</>)
	} else {
		return (<>{getShuffledDeck()}</>)
	}
};

export function fullDeck(): React.ReactNode {

	const fullDeck = getCardsOfFullDeck();

	return renderDeck(fullDeck);
}

export function getShuffledDeck(): React.ReactNode {

	const shuffledCards = shuffleArray(getCardsOfFullDeck());

	return renderDeck(shuffledCards);
}

export function getCardsOfFullDeck(): Card[] {
  	const values: string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"];
	const deck: Card[] = [];
	for (var s = 0; s < 4; s++) {
		for (const value of values) {
			deck.push({ suit: s, value });
		}
	}
	return deck;
}

export function shuffleArray<T>(array: T[]): T[] {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

function renderDeck(cardsToRender: Card[]): React.ReactNode {
	return  <>
		<IonRow className='deck'>
			{cardsToRender.slice(0, 13).map( card =>
				<IonCol>
					<PlayingCard suit={card.suit} value={card.value} open={true} width={44} height={62}></PlayingCard>
				</IonCol>
			)}
		</IonRow>
		<IonRow className='deck'>
			{cardsToRender.slice(13, 26).map(card =>
				<IonCol>
					<PlayingCard suit={card.suit} value={card.value} open={true} width={44} height={62}></PlayingCard>
				</IonCol>
			)}
		</IonRow>
		<IonRow className='deck'>
			{cardsToRender.slice(26, 39).map(card =>
				<IonCol>
					<PlayingCard suit={card.suit} value={card.value} open={true} width={44} height={62}></PlayingCard>
				</IonCol>
			)}
		</IonRow>
		<IonRow className='deck'>
			{cardsToRender.slice(39, 52).map(card =>
				<IonCol>
					<PlayingCard suit={card.suit} value={card.value} open={true} width={44} height={62}></PlayingCard>
				</IonCol>
			)}
		</IonRow>
	</>
}

export default Deck;