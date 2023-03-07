import './styles.scss';
import { NavLink } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import profile from '../../../public/img/placeholders/avatar_placeholder.png';
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
        <div className="conversation_header_button">
          <NavLink to="/mon-profil">
            <button type="button">
              <ArrowBackIcon />
            </button>
          </NavLink>
        </div>
        <div className="conversation_header_title">Messages</div>
      </div>
      {conversationList.map((conversation) => (
        <NavLink to={`/mon-profil/conversation/${conversation.id}`}>
          <div className="conversation_section">
            <div className="conversation_section_list">
              <div className="conversation_section_list_picture">
                <img src={profile} alt="profil" />
              </div>
              <div className="conversation_section_list_content">
                <p className="conversation_section_list_content_name">{conversation.user2_id}</p>
                <p className="conversation_section_list_content_content">{conversation.title}</p>
              </div>
              <div className="conversation_section_list_date">
                <p className="conversation_section_list_date_time">{conversation.created_at}</p>
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
