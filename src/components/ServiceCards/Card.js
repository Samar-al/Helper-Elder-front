import './styles.scss';
import PropTypes from 'prop-types';
import servicePlaceHolder from '../../../public/img/placeholders/service_placeholder.png';

export default function Card({ name, logo }) {
  return (
    <div className="card">
      <img alt={name} className="card_logo" src={logo || servicePlaceHolder} />
      <h1 className="card_title">{name}</h1>
    </div>
  );
}

Card.propTypes = {
  logo: PropTypes.string,
  name: PropTypes.string.isRequired,
};

Card.defaultProps = {
  logo: 'img/placeholders/service_placeholder.png',
};
