import { getSuitValue } from './Suits';

export default interface Card {
	id: number;
	suit: number;
	value: string;
	playerIndex: number | undefined; // user = -1, player index
}

export function cardToString(card: Card) {
	return `${card.value} of ${getSuitValue(card.suit)}`;
}