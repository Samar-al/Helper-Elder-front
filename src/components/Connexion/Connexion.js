import './styles.scss';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
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
  const navigate = useNavigate();
  // this code is necessary to make the redirection to the homepage after the user connexion
  // useEffect was used for fixing a BrowserRouter error :
  // https://stackoverflow.com/questions/72160276/warning-cannot-update-a-component-browserrouter-while-rendering-a-different
  useEffect(
    () => {
      if (user) navigate('/');
    },
    [user],
  );

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
