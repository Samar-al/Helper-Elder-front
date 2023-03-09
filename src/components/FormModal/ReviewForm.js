import { TextField, Rating, Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import {
  reviewFormClear,
  reviewFormErrorsThrow,
  reviewFormHandleSubmit,
  reviewFormSelectRate,
  reviewFormTypeComment,
} from '../../actions/review';
import './styles.scss';
import FormErrors from '../FormErrors/FormErrors';

export default function ReviewForm({ id, firstname }) {
  const { rateInput, commentInput, errors } = useSelector((state) => state.review);
  const giverId = useSelector((state) => state.authentication.user.id);
  const dispatch = useDispatch();

  /* Fills an array with potential error and pushes it into the state.
  If there is no error, pushes an empty array and returns a valid object.
  If there are error, returns false. */
  function validateReview() {
    const formErrors = [];
    if (commentInput.trim().length < 20 || commentInput.trim().length > 150) formErrors.push('Le commentaire doit contenir entre 20 et 150 caractères.');

    dispatch(reviewFormErrorsThrow(formErrors));
    if (formErrors.length !== 0) {
      return false;
    }

    return {
      content: commentInput.trim(),
      rate: rateInput,
      userGiver: giverId,
      userTaker: id,
    };
  }

  function submitReview(e) {
    e.preventDefault();
    const review = validateReview();
    if (review) dispatch(reviewFormHandleSubmit(review));
  }

  useEffect(
    () => () => dispatch(reviewFormClear()),
    [],
  );

  return (
    <div className="create_review">
      {errors.length !== 0 && <FormErrors errors={errors} />}
      <h2 className="create_review_legend">Laissez un avis à l'utilisateur : <span className="create_conversation_legend_recipient">{firstname}</span></h2>
      <form className="create_review_form" onSubmit={(e) => submitReview(e)}>
        <div className="create_review_form_item">
          <Rating
            name="simple-controlled"
            value={rateInput}
            onChange={(e) => dispatch(reviewFormSelectRate(Number(e.target.value)))}
          />
        </div>
        <div className="create_review_form_item">
          <TextField
            required
            fullWidth
            size="small"
            multiline
            label="Commentaire"
            value={commentInput}
            onChange={(e) => dispatch(reviewFormTypeComment(e.target.value))}
          />
        </div>
        <div className="create_review_form_button">
          <Button type="submit" variant="contained">Envoyer</Button>
        </div>
      </form>
    </div>
  );
}

ReviewForm.propTypes = {
  id: PropTypes.number.isRequired,
  firstname: PropTypes.string.isRequired,
};
