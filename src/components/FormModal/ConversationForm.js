import { Button, TextField } from '@mui/material';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  convFormClear,
  convFormSubmitConv,
  convFormTypeMsg,
  convFormTypeTitle,
} from '../../actions/conversation';
import './styles.scss';

export default function ConversationForm({ id, firstname }) {
  const dispatch = useDispatch();
  const { titleInput, messageInput } = useSelector((state) => state.conversation);
  const { user } = useSelector((state) => state.authentication);

  function submitConv(e) {
    e.preventDefault();
    const message = {
      title: titleInput,
      content: messageInput,
      userSender: user.id,
      userRecipient: id,
    };
    dispatch(convFormSubmitConv(message));
  }

  useEffect(
    () => () => dispatch(convFormClear()),
    [],
  );

  return (
    <div className="create_conversation">
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
