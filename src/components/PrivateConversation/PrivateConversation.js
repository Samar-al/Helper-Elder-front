import './styles.scss';
import { NavLink, useLocation } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SendIcon from '@mui/icons-material/Send';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import profile from '../../../public/img/placeholders/avatar_placeholder.png';
import { loadMessages } from '../../actions/conversation';
// import loader from '../../assets/img/icons/loader.gif';

export default function PrivateConversation() {
  const { messagesList } = useSelector((state) => state.conversation);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(
    () => {
      dispatch(loadMessages(location.pathname.split('/').pop()));
    },
    [],
  );
  console.log(messagesList);
  console.log(location.pathname);
  return (
    <main className="message">
      {messagesList.map((messages) => (
        <>
          <div className="message_header">
            <div className="message_header_button">
              <NavLink to="/mon-profil/conversation">
                <ArrowBackIcon />
              </NavLink>
              <p>Retour</p>
            </div>
            <div className="message_header_user">
              <p>{messages.userRecipient.firstname}</p>
            </div>
          </div>
          <div className="message_conversation">
            {messagesList.map((message, index) => (
              <div
                key={message.id}
                className={`message_conversation_talk ${message.user === 'moi' ? 'right' : 'left'}`}
              >
                {index === 0 || messagesList[index - 1].user !== message.user ? (
                  <div>
                    <img src={profile} alt="profil" />
                    <div className="username">{messages.userRecipient.firstname}</div>
                  </div>
                ) : null}
                <p>{messages.conversation.title}</p>
              </div>
            ))}
          </div>
        </>
      ))}

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
