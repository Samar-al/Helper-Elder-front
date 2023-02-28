import './styles.scss';
import PropTypes from 'prop-types';

export default function Card({ name, logo, date }) {
  return (
    <div className="card">
      <img alt="website logo" className="card_logo" src={logo} />
      <h1 className="card_title">{name}</h1>
    </div>
  );
}

Card.propTypes = {
  logo: PropTypes.string.isRequired, // à modifier lorsqu'on saura comment récupérer l'avatar
  name: PropTypes.string.isRequired,
};
