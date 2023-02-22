import './styles.scss';
import {
  Button,
  TextField,
} from '@mui/material';

export default function Connexion() {
  return (
          <div className="connexion">
              <div className="connexion_title"> Connexion </div>
                <form className="connexion_form">
                  <input
                    className="connexion_input_email"
                    identifier="email"
                    placeholder="Adresse e-mail"
                    label="E-mail"
                  />

                  <input
                    className="connexion_input_password"
                    identifier="password"
                    placeholder="Mot de passe"
                    label="Mot de passe"
                    type="password"
                  />

                  <button
                    className="connexion_button"
                    type="submit"
                    > Se connecter
                  </button>

                </form>
          </div>
  );
}


{/* <div className="connexion_form_item">
<FormControl fullWidth className="connexion_form_item_type" size="small">
<TextField label="E-mail" size="small" value={emailInput} onChange={(e) => dispatch(typeEmail(e.target.value))} />
<TextField label="Mot de passe" size="small" value={passwordInput} onChange={(e) => dispatch(typePassword(e.target.value))} />
</FormControl>
</div> */}
