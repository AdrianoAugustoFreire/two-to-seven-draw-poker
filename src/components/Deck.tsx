import { IonCol, IonGrid, IonRow, IonContent, IonItem } from '@ionic/react';

import DeckTypes from './DeckTypes';
import PlayingCard from './PlayingCard';
import Suits from './Suits';

export interface Deck {
	cards: [];
	deckType: DeckTypes;
}

export interface Card {
	suit: number,
	value: string
}

export function getFullDeck(): Card[] {
  	const values: string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"];
	const deck: Card[] = [];
	for (var s = 0; s <= 4; s++) {
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

export function fullDeck() {
	<IonItem>
		<IonGrid fixed={true}>
			<IonRow>
				{
					getFullDeck().map( card =>
						<IonCol><PlayingCard suit={card.suit} value={card.value} open={true}></PlayingCard></IonCol>
				)}
			</IonRow>
		</IonGrid>
	</IonItem>
}

export function shuffledDeck() {
	<IonItem>
		<IonGrid fixed={true}>
			<IonRow>
				{
					shuffleArray(getFullDeck()).map( card =>
						<IonCol><PlayingCard suit={card.suit} value={card.value} open={true}></PlayingCard></IonCol>
				)}
			</IonRow>
		</IonGrid>
	</IonItem>
}

export default Deck;