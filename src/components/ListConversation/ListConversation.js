import './styles.scss';
import { NavLink } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useSelector } from 'react-redux';
import profile from '../../../public/img/placeholders/avatar_placeholder.png';

export default function ListConversation() {
  const { conversation } = useSelector((state) => state.conversation);
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
      <NavLink to="/mon-profil/conversation/1">
        {console.log(conversation)}
        <div className="conversation_section">
          <div className="conversation_section_list">
            <div className="conversation_section_list_picture">
              <img src={profile} alt="profil" />
            </div>
            <div className="conversation_section_list_content">
              <p className="conversation_section_list_content_name">Avril Lavigne</p>
              <p className="conversation_section_list_content_content">Haha a + dans le bus !</p>
            </div>
            <div className="conversation_section_list_date">
              <p className="conversation_section_list_date_time">13:00 PM</p>
              {/* If there are new messages */}
              {/* <p className="conversation_section_list_date_num">2</p> */}
            </div>
          </div>
        </div>
      </NavLink>
    </main>
  );
}
