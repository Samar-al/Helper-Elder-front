import './styles.scss';
import PropTypes from 'prop-types';

export default function Announcement({
  picture,
  title,
}) {
  return (
    <div className="post_left">
      <img src={picture} alt={title} />
      <p>{title}</p>
    </div>
  );
}

Announcement.propTypes = {
  picture: PropTypes.string.isRequired, // à modifier lorsqu'on saura comment récupérer l'avatar
  title: PropTypes.string.isRequired,
};
