import { useSelector } from 'react-redux';
import './styles.scss';

export default function InfoModal() {
  const { infoMessages } = useSelector((state) => state.app);

  return (
    <div className={infoMessages.find((message) => message.slice(0, 6) === 'Erreur') ? 'info_modal info_modal--error' : 'info_modal'}>
      <h2 className="info_modal_title">Information</h2>
      <hr className="info_modal_separator" />
      {infoMessages.map((message) => <p key={message} className="info_modal_messages">{message}</p>)}
    </div>
  );
}
