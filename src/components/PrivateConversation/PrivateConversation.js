import './styles.scss';
import back from '../../assets/img/icons/fleche-gauche.png';
import profile from '../../assets/img/icons/user.png';
import send from '../../assets/img/icons/envoyer.png';

export default function PrivateConversation() {
  return (
    <main className="message">
      <div className="message_header">
        <div className="message_header_button">
          <img src={back} alt="Retour" />
          <p>Retour</p>
        </div>
        <div className="message_header_user">
          <p>Avril Lavigne</p>
        </div>
      </div>
      <div className="message_conversation">
        <div className="message_conversation_talk left">
          <div>
            <img src={profile} alt="profil" />
            <div className="username">pseudo</div>
          </div>
          <p>Bonjour je serais intéressée par votre annonce</p>
        </div>
        <div className="message_conversation_talk right">
          <p>Bonjour, je peux répondre à vos questions si vous le souhaitez?</p>
          <div>
            <img src={profile} alt="profil" />
            <div className="username">pseudo</div>
          </div>
        </div>
        <div className="message_conversation_talk left">
          <div>
            <img src={profile} alt="profil" />
            <div className="username">pseudo</div>
          </div>
          <p>Oui j'aurai 2/3 questions à vous poser effectivement !</p>
        </div>
        <div className="message_conversation_talk right">
          <p>Je vous écoute, dîtes-moi tout ^^</p>
          <div>
            <img src={profile} alt="profil" />
            <div className="username">pseudo</div>
          </div>
        </div>
        <div className="message_conversation_talk left">
          <div>
            <img src={profile} alt="profil" />
            <div className="username">pseudo</div>
          </div>
          <p>Bonjour je serais intéressée par votre annonce</p>
        </div>
        <div className="message_conversation_talk right">
          <p>Bonjour, je peux répondre à vos questions si vous le souhaitez?</p>
          <div>
            <img src={profile} alt="profil" />
            <div className="username">pseudo</div>
          </div>
        </div>
        <div className="message_conversation_talk left">
          <div>
            <img src={profile} alt="profil" />
            <div className="username">pseudo</div>
          </div>
          <p>Oui j'aurai 2/3 questions à vous poser effectivement !</p>
        </div>
        <div className="message_conversation_talk right">
          <p>Je vous écoute, dîtes-moi tout ^^</p>
          <div>
            <img src={profile} alt="profil" />
            <div className="username">pseudo</div>
          </div>
        </div>
      </div>
      <form className="message_form">
        <div className="message_form_container">
          <div className="message_form_container_text">
            <textarea placeholder="Entrez votre message" />
          </div>
          <button type="button" className="message_form_container_button">
            <img src={send} alt="Envoyer" />
          </button>
        </div>
      </form>
    </main>
  );
}
