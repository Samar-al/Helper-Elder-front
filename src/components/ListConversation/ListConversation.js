import './styles.scss';
import back from '../../assets/img/icons/fleche-gauche.png';
import profile from '../../assets/img/icons/user.png';

export default function ListConversation() {
  return (
    <main>
      <div className="conversation_header">
        <div className="conversation_header_button">
          <button type="button">
            <img src={back} alt="Retour" />
          </button>
        </div>
        <div className="conversation_header_title">Messages</div>
      </div>
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
            <p className="conversation_section_list_date_num">2</p>
          </div>
        </div>
      </div>
    </main>
  );
}
