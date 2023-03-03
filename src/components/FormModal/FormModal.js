import PropTypes from 'prop-types';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from 'react-redux';
import ConversationForm from './ConversationForm';
import './styles.scss';
import { hideFormModal } from '../../actions/app';

export default function FormModal({ formType, targetUser }) {
  const dispatch = useDispatch();

  return (
    <div className="dimmer">
      <div className="modal_wrapper">
        {formType === 'conversation' && <ConversationForm {...targetUser} />}
        <CloseIcon onClick={() => dispatch(hideFormModal())} className="modal_wrapper_close" />
      </div>
    </div>
  );
}

FormModal.propTypes = {
  formType: PropTypes.string.isRequired,
  targetUser: PropTypes.shape({
    id: PropTypes.number.isRequired,
    firstname: PropTypes.string.isRequired,
  }).isRequired,
};
