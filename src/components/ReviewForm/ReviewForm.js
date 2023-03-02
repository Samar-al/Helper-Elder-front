import { TextField, Rating, Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { reviewFormHandleSubmit, reviewFormSelectRate, reviewFormTypeComment } from '../../actions/review';
import './styles.scss';

export default function ReviewForm() {
  const { rateInput, commentInput } = useSelector((state) => state.review);
  // current logged user :
  // const { user } = useSelector((state) => )
  const giverId = useSelector((state) => state.authentication.user.id);
  // TODO this needs to be a prop with the current logged user's id
  const takerId = 1; // TODO this needs to be a prop with the current page user's id
  const dispatch = useDispatch();

  function submitReview(e) {
    e.preventDefault();
    const review = {
      content: commentInput,
      rate: rateInput,
      user_giver_id: giverId,
      user_taker_id: takerId,
    };
    dispatch(reviewFormHandleSubmit(review));
  }

  return (
    <div className="create_review">
      <h2 className="create_review_title">Laissez un avis à l'utilisateur: </h2>
      <form className="create_review_form" onSubmit={(e) => submitReview(e)}>
        <div className="create_review_form_rate">
          <Rating
            name="simple-controlled"
            value={rateInput}
            onChange={(e) => dispatch(reviewFormSelectRate(Number(e.target.value)))}
          />
        </div>
        <div className="create_review_form_comment">
          <TextField
            className="form_input_content"
            rows={10}
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
