import './styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { typeEmail, typePassword } from '../../actions/connexion';
import { handleLogin, handleLogout } from '../../actions/authentification';
import {
  Button,
  TextField,
  FormControl
} from '@mui/material';

export default function Connexion() {
  const { emailInput } = useSelector((state) => state.connexion);
  const { passwordInput } = useSelector((state) => state.connexion);
  const loggedMessage = useSelector((state) => state.authentification.loggedMessage);
  const isLogged = useSelector((state) => state.authentification.isLogged);
  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(handleLogin());
  };
  const handleSubmitLogout = () => {
    dispatch(handleLogout());
  };
  
  return (
            <div className="connexion_login">
              {isLogged && (
                <div className="connexion_login_islogged">
                  <p className="connexion_login_message"> Bienvenue {loggedMessage} ! </p>
                  {/* <div className="connexion_logout_button">
                    <Button variant="contained onClick={handleSubmitLogout}">Se déconnecter</Button>
                  </div> */}
                </div>
              )}

              {!isLogged && (
                  <div className="connexion">
                      <div className="connexion_title"> Connexion </div>
                        <form className="connexion_form" onSubmit={handleSubmit}>
                          <div className="connexion_form_item">
                            <FormControl fullWidth size="small">
                              <TextField 
                                  label="E-mail" size="small" 
                                  value={emailInput} 
                                  onChange={(e) => dispatch(typeEmail(e.target.value))} 
                              />
                            </FormControl>
                          </div>
                          <div className="connexion_form_item">
                            <FormControl fullWidth size="small">
                              <TextField 
                                label="Mot de passe" 
                                size="small" 
                                value={passwordInput} onChange={(e) => dispatch(typePassword(e.target.value))} 
                              />
                            </FormControl>
                          </div>
                          <div className="connexion_login_button">
                            <Button variant="contained">Se connecter</Button>
                          </div>
                        </form>
                  </div>
              )}
            </div>
        );
};

