import { Button, TextField } from '@mui/material';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  convFormClear,
  convFormErrorsThrow,
  convFormSubmitConv,
  convFormTypeMsg,
  convFormTypeTitle,
} from '../../actions/conversation';
import FormErrors from '../FormErrors/FormErrors';
import './styles.scss';

export default function ConversationForm({ id, firstname }) {
  const dispatch = useDispatch();
  const { titleInput, messageInput, errors } = useSelector((state) => state.conversation);
  const { user } = useSelector((state) => state.authentication);

  /* Fills an array with potential error and pushes it into the state.
  If there is no error, pushes an empty array and returns a valid object.
  If there are error, returns false. */
  function validateMessage() {
    const formErrors = [];
    if (titleInput.trim().length < 1 || titleInput.trim().length > 255) formErrors.push('Le titre doit contenir entre 1 et 255 caractères.');
    if (messageInput.trim().length < 1) formErrors.push('Le message doit contenir au moins 1 caractère.');

    dispatch(convFormErrorsThrow(formErrors));
    if (formErrors.length !== 0) {
      return false;
    }

    return {
      title: titleInput.trim(),
      content: messageInput.trim(),
      userSender: user.id,
      userRecipient: id,
    };
  }

  function submitConv(e) {
    e.preventDefault();
    const message = validateMessage();
    dispatch(convFormSubmitConv(message));
  }

  useEffect(
    () => () => dispatch(convFormClear()),
    [],
  );

  return (
    <div className="create_conversation">
      {errors.length !== 0 && <FormErrors errors={errors} />}
      <h2 className="create_conversation_legend">
        Ecrire à l'utilisateur :
        <span className="create_conversation_legend_recipient"> {firstname}</span>
      </h2>
      <form className="create_conversation_form" onSubmit={(e) => submitConv(e)}>
        <div className="create_conversation_form_item">
          <TextField
            label="Titre"
            size="small"
            fullWidth
            required
            value={titleInput}
            onChange={(e) => dispatch(convFormTypeTitle(e.target.value))}
          />
        </div>
        <div className="create_conversation_form_item">
          <TextField
            size="small"
            multiline
            label="Message"
            fullWidth
            required
            value={messageInput}
            onChange={(e) => dispatch(convFormTypeMsg(e.target.value))}
          />
        </div>
        <div className="create_conversation_form_button">
          <Button type="submit" variant="contained">Envoyer</Button>
        </div>
      </form>
    </div>
  );
}

ConversationForm.propTypes = {
  id: PropTypes.number.isRequired,
  firstname: PropTypes.string.isRequired,
};
