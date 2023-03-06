import './styles.scss';

export default function FormErrors() {
  const errors = ['le lavabo il est bo', 'le bidet il est laid'];

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
