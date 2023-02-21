import './styles.scss';
import Card from './Card';
import cards from './data'; // data temporaires
import PropTypes from 'prop-types';

export default function ServiceCards() {
  return (
    <div className="servicecards">
      {cards.map ((card) => (
      <Card 
      key={card.id}
      {...card} 
      />
      ))}
      </div>
    );
  }
  
// ServiceCards.propTypes = {
//     cards: PropTypes.arrayOf(PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       logo: PropTypes.string.isRequired, // à modifier lorsqu'on saura comment récupérer l'avatar
//       name: PropTypes.string.isRequired,
//       description: PropTypes.string.isRequired,
//       date: PropTypes.instanceOf(Date).isRequired,
//     })).isRequired,
//   };
  