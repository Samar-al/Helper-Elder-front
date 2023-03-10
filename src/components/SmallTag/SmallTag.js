import './styles.scss';
import PropTypes from 'prop-types';

export default function SmallTag({ type, label }) {
  return (
    <div className={`small_tag small_tag--${type}`}>{label}</div>
  );
}

SmallTag.propTypes = {
  type: PropTypes.string.isRequired, // frequency or service
  label: PropTypes.string.isRequired,
};
