import './styles.scss';
import { NavLink } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SendIcon from '@mui/icons-material/Send';
import profile from '../../../public/img/placeholders/avatar_placeholder.png';
// import loader from '../../assets/img/icons/loader.gif';

export default function PrivateConversation() {
  const messages = [
    {
      id: 1,
      user: 'pseudo',
      content: 'Bonjour je serais intéressé par votre annonce',
    },
    {
      id: 2,
      user: 'moi',
      content: 'Bonjour, je peux répondre à vos questions si vous le souhaitez?',
    },
    {
      id: 3,
      user: 'pseudo',
      content: 'D\'accord, merci beaucoup!',
    },
    {
      id: 3,
      user: 'pseudo',
      content: 'D\'accord, merci beaucoup!',
    },
    {
      id: 2,
      user: 'moi',
      content: 'Bonjour, je peux répondre à vos questions si vous le souhaitez?',
    },
  ];
  return (
    <main className="message">
      <div className="message_header">
        <div className="message_header_button">
          <NavLink to="/mon-profil/conversation">
            <ArrowBackIcon />
          </NavLink>
          <p>Retour</p>
        </div>
        <div className="message_header_user">
          <p>Avril Lavigne</p>
        </div>
      </div>
      <div className="message_conversation">
        {messages.map((message, index) => (
          <div
            key={message.id}
            className={`message_conversation_talk ${message.user === 'moi' ? 'right' : 'left'}`}
          >
            {index === 0 || messages[index - 1].user !== message.user ? (
              <div>
                <img src={profile} alt="profil" />
                <div className="username">{message.user}</div>
              </div>
            ) : null }
            <p>{message.content}</p>
          </div>
        ))}
      </div>
      {/*  <div className="message_conversation_loader">
        <img src={loader} alt="Loading..." />
      </div> */}
      <form className="message_form">
        <div className="message_form_container">
          <div className="message_form_container_text">
            <textarea placeholder="Entrez votre message" />
          </div>
          <button type="button" className="message_form_container_button">
            <SendIcon />
          </button>
        </div>
      </form>
    </main>
  );
}
