import { useSelector } from 'react-redux';
import './styles.scss';

export default function InfoModal() {
  const { infoMessages } = useSelector((state) => state.app);
  /* when the infoMessages array is empty, the modal is not shown */
  return (
    <div className={infoMessages.length !== 0 ? 'info_modal' : 'info_modal info_modal-hidden'}>
      <h2 className="info_modal_title">Information</h2>
      <hr className="info_modal_separator" />
      {infoMessages.map((message) => <p key={message} className="info_modal_messages">{message}</p>)}
    </div>
  );
}
