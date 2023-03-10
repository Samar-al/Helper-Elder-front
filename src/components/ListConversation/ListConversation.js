import './styles.scss';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { formatDateWithHour } from '../../utils/functions';
import avatarPlaceholder from '../../../public/img/placeholders/avatar_placeholder.png';
import { loadConversations } from '../../actions/conversation';

export default function ListConversation() {
  const { conversationList } = useSelector((state) => state.conversation);
  const dispatch = useDispatch();

  // no second parameter so conversations will reload every time
  useEffect(
    () => {
      if (conversationList.length === 0) dispatch(loadConversations());
    },
  );

  return (
    <div className="conversation">
      <div className="conversation_header">
        Mes Conversations
      </div>
      {conversationList.length === 0 && (
        <div className="conversation_message"> Vous n'avez aucune conversation.</div>
      )}
      {conversationList.map((conversation) => (
        <div key={conversation.id} className="conversation_section">
          <NavLink className="conversation_section_list" to={`/conversation/${conversation.id}`}>
            <div className="conversation_section_list_picture">
              <img src={conversation.picture || avatarPlaceholder} alt="user avatar" />
            </div>
            <div className="conversation_section_list_content">
              <p className="conversation_section_list_content_name">{conversation.interlocutor}</p>
              <p className="conversation_section_list_content_content">{conversation.title}</p>
              <p className="conversation_section_list_content_content">Dernier message: {conversation.lastMessage}</p>
            </div>
            <div className="conversation_section_list_date">
              <p className="conversation_section_list_date_time">Le {formatDateWithHour(conversation.updateDate)}</p>
              {/* If there are new messages */}
              {/* <p className="conversation_section_list_date_num">2</p> */}
            </div>
          </NavLink>
        </div>
      ))}
    </div>
  );
}
