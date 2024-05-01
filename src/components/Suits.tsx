export enum Suits {
	clubs,
	diamonds,
	hearts,
	spades
}

export function getSuitValue(value: Suits): string {
    return Suits[value];
}

export default Suits;