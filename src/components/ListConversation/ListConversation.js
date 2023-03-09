import './styles.scss';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { loadConversations } from '../../actions/conversation';

export default function ListConversation() {
  const { conversationList } = useSelector((state) => state.conversation);
  const dispatch = useDispatch();

  useEffect(
    () => {
      dispatch(loadConversations());
    },
    [],
  );
  return (
    <main>
      <div className="conversation_header">
        Mes Conversations
      </div>
      {conversationList.map((conversation) => (
        <NavLink key={conversation.id} to={`/mon-profil/conversation/${conversation.id}`}>
          <div className="conversation_section">
            <div className="conversation_section_list">
              <div className="conversation_section_list_picture">
                <img src={conversation.picture} alt="profil" />
              </div>
              <div className="conversation_section_list_content">
                <p className="conversation_section_list_content_name">{conversation.interlocutor}</p>
                <p className="conversation_section_list_content_content">{conversation.title}</p>
                <p className="conversation_section_list_content_content">Dernier message: {conversation.lastMessage}</p>
              </div>
              <div className="conversation_section_list_date">
                <p className="conversation_section_list_date_time">{conversation.updateDate}</p>
                {/* If there are new messages */}
                {/* <p className="conversation_section_list_date_num">2</p> */}
              </div>
            </div>
          </div>
        </NavLink>
      ))}
    </main>
  );
}
