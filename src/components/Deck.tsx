import { useState } from 'react';
import DeckTypes from './DeckTypes';
import PlayingCard from './PlayingCard';
import Suits from './Suits';

export interface Deck {
	cards: [];
	deckType: DeckTypes;
}

export interface Card {
	suit: string,
	value: string
}

export function getFullDeck(): Card[] {
  	const values: string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"];
	const deck: Card[] = [];
	for (var s = 0; s <= 4; s++) {
		for (const value of values) {
			deck.push({ suit: Suits[s], value });
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

const Deck: React.FC<ContainerProps> = ({ cards, deckType }) => {
	return (

		<div className="container">
			<img width={88} height={140} src='assets/imgs/deck.png'></img>
		</div>
	);
};

export default Deck;