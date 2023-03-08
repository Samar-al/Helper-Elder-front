/* eslint-disable max-len */
import './styles.scss';
import { NavLink, useLocation } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SendIcon from '@mui/icons-material/Send';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import profile from '../../../public/img/placeholders/avatar_placeholder.png';
import { loadMessages, sendMessage, submitMessage } from '../../actions/conversation';
// import loader from '../../assets/img/icons/loader.gif';

export default function PrivateConversation() {
  const { messagesList } = useSelector((state) => state.conversation);
  const { messageInput } = useSelector((state) => state.conversation);
  const { user } = useSelector((state) => state.authentication);
  const dispatch = useDispatch();
  const location = useLocation();
  // sort() sorts the elements of the array making it possible to compare the message sending dates to display the last message sent at the end of the conversation.
  const sortedMessages = [...messagesList].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  function getInterlocutor() {
    if (messagesList[0].userSender.id === user.id) return messagesList[0].userRecipient;
    return messagesList[0].userSender;
  }

  function submitMsg(e) {
    e.preventDefault();
    const message = {
      title: '',
      content: messageInput,
      userSender: user.id,
      userRecipient: getInterlocutor().id,
    };
    if (messageInput.trim() !== '') {
      dispatch(submitMessage(message));
    }
    console.log('message envoyé:', message);
  }

  useEffect(() => {
    dispatch(loadMessages(location.pathname.split('/').pop()));
  }, []);

  return (
    <main className="message">
      <div className="message_header">
        <div className="message_header_button">
          <div className="message_header_back">
            <NavLink to="/mon-profil/conversation">
              <ArrowBackIcon />
            </NavLink>
            <p>Retour</p>
          </div>
          <div>
            <p>{ messagesList.length !== 0 && messagesList[0].conversation.title}</p>
          </div>
          <div className="message_header_user">
            <p>{messagesList.length !== 0 && getInterlocutor().firstname}</p>
          </div>
        </div>
      </div>
      <div className="message_conversation">
        {/* slice() creates a copy of the list of messages before reversing it with reverse() */}
        { sortedMessages.length !== 0 && sortedMessages.slice().reverse().map((message, index) => {
          const currentUserIsSender = message.userSender.id === user.id;
          const previousMessage = messagesList[index - 1];
          const previousMessageIsFromSameUser = previousMessage && previousMessage.userSender.id === message.userSender.id;
          return (
            <div
              key={message.id}
              className={`message_conversation_talk ${currentUserIsSender ? 'right' : 'left'}`}
            >
              {!previousMessageIsFromSameUser && (
                <div>
                  <img src={profile} alt="profil" />
                  <div className="username">{message.userSender.firstname}</div>
                </div>
              )}
              <p>{message.content}</p>
            </div>
          );
        })}
      </div>
      {/*  <div className="message_conversation_loader">
        <img src={loader} alt="Loading..." />
      </div> */}
      <form
        className="message_form"
        onSubmit={(e) => submitMsg(e)}
      >
        <div className="message_form_container">
          <div className="message_form_container_text">
            <input
              placeholder="Entrez votre message"
              value={messageInput}
              onChange={(e) => dispatch(sendMessage(e.target.value))}
            />
          </div>
          <button
            type="submit"
            className="message_form_container_button"
          >
            <SendIcon />
          </button>
        </div>
      </form>
    </main>
  );
}
