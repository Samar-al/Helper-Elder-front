import { TextField, Rating, Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import {
  reviewFormClear,
  reviewFormHandleSubmit,
  reviewFormSelectRate,
  reviewFormTypeComment
} from '../../actions/review';
import './styles.scss';

export default function ReviewForm({ id, firstname }) {
  const { rateInput, commentInput } = useSelector((state) => state.review);
  const giverId = useSelector((state) => state.authentication.user.id);
  const dispatch = useDispatch();

  function submitReview(e) {
    e.preventDefault();
    const review = {
      content: commentInput,
      rate: rateInput,
      userGiver: giverId,
      userTaker: id,
    };
    dispatch(reviewFormHandleSubmit(review));
  }

  useEffect(
    () => () => dispatch(reviewFormClear()),
    [],
  );

  return (
    <div className="create_review">
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
