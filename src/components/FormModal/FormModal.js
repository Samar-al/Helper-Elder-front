import PropTypes from 'prop-types';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
import ConversationForm from './ConversationForm';
import './styles.scss';
import { hideFormModal } from '../../actions/app';
import ReviewForm from './ReviewForm';

export default function FormModal({ targetUser }) {
  const dispatch = useDispatch();
  const { formModalType } = useSelector((state) => state.app);

  return (
    <div className="dimmer">
      <div className="modal_wrapper">
        {formModalType === 'conversation' && <ConversationForm {...targetUser} />}
        {formModalType === 'review' && <ReviewForm {...targetUser} />}
        <CloseIcon onClick={() => dispatch(hideFormModal())} className="modal_wrapper_close" />
      </div>
    </div>
  );
}

FormModal.propTypes = {
  targetUser: PropTypes.shape({
    id: PropTypes.number.isRequired,
    firstname: PropTypes.string.isRequired,
  }).isRequired,
};
