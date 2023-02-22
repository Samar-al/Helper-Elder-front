import './styles.scss';

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


