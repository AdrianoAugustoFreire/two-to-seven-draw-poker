import './PlayingCardSelector.css';
import Suits from './Suits';

interface ContainerProps {
	suit: Suits;
	value: string;
	size: string;
}

const PlayingCardSelector: React.FC<ContainerProps> = ({ suit, value, size }) => {

	let	imageName = 'assets/imgs/' + suit + '-' + value + '.png'
	return (
		<div className="container">
			<img width={size == 'small' ? 22 : 44} height={size == 'small' ? 31: 62} src={imageName}></img>
		</div>
	);
};

export default PlayingCardSelector;