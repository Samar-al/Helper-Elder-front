import './styles.scss';
import PropTypes from 'prop-types';

export default function SmallTag({ type, label }) {
  return (
    <span className={`small_tag small_tag--${type}`}>{label}</span>
  );
}

SmallTag.propTypes = {
  type: PropTypes.string.isRequired, // frequency or service
  label: PropTypes.string.isRequired,
};
