import './styles.scss';
import PropTypes from 'prop-types';

export default function FormErrors({ errors }) {
  return (
    <div className="form_errors">
      <h3 className="form_errors_title">Echec lors de l'envoi du formulaire :</h3>
      <hr />
      <ul className="form_errors_list">
        {errors.map((error) => <li className="form_errors_list_error" key={error}>{error}</li>)}
      </ul>
    </div>
  );
}

FormErrors.propTypes = {
  errors: PropTypes.arrayOf(PropTypes.string).isRequired,
};
