import './styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { typeEmail, typePassword } from '../../actions/connexion';
import {
  Button,
  TextField,
  FormControl
} from '@mui/material';

export default function Connexion() {
  const { emailInput } = useSelector((state) => state.connexion);
  const { passwordInput } = useSelector((state) => state.connexion);
  const dispatch = useDispatch();
  return (
          <div className="connexion">
              <div className="connexion_title"> Connexion </div>
                <form className="connexion_form">
                  <div className="connexion_form_item">
                    <FormControl fullWidth className="connexion_form_item_type" size="small">
                    <TextField label="E-mail" size="small" value={emailInput} onChange={(e) => dispatch(typeEmail(e.target.value))} />
                    <TextField label="Mot de passe" size="small" value={passwordInput} onChange={(e) => dispatch(typePassword(e.target.value))} />
                    </FormControl>
                  </div> 
                  <button
                    className="connexion_button"
                    type="submit"
                    > Se connecter
                  </button>

                </form>
          </div>
  );
}


