import './PlayingCardSelector.css';
import Suits from './Suits';

interface ContainerProps {
	suit: Suits;
	value: string;
}

const PlayingCardSelector: React.FC<ContainerProps> = ({ suit, value }) => {

	let	imageName = 'assets/imgs/' + suit + '-' + value + '.png'
	return (
		<div className="container">
			<img width={44} height={62} src={imageName}></img>
		</div>
	);
};

export default PlayingCardSelector;