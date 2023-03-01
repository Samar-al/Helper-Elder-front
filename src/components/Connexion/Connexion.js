import './styles.scss';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button,
  TextField,
  FormControl,
} from '@mui/material';
import { typeEmail, typePassword } from '../../actions/connexion';
import { handleLogin } from '../../actions/authentication';

export default function Connexion() {
  const { emailInput, passwordInput } = useSelector((state) => state.connexion);
  const { user } = useSelector((state) => state.authentication);

  // redirects to homepage if a user is logged in
  if (user) return <Navigate to="/" />;

  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(handleLogin());
  };

  return (
    <div className="connexion">
      <div className="connexion_title"> Connexion </div>
      <form className="connexion_form" onSubmit={handleSubmit}>
        <div className="connexion_form_item">
          <FormControl fullWidth size="small">
            <TextField
              label="E-mail"
              size="small"
              value={emailInput}
              onChange={(e) => dispatch(typeEmail(e.target.value))}
            />
          </FormControl>
        </div>
        <div className="connexion_form_item">
          <FormControl fullWidth size="small">
            <TextField
              type="password"
              label="Mot de passe"
              size="small"
              value={passwordInput}
              onChange={(e) => dispatch(typePassword(e.target.value))}
            />
          </FormControl>
        </div>
        <div className="connexion_login_button">
          <Button type="submit" variant="contained">Se connecter</Button>
        </div>
      </form>
    </div>
  );
}
