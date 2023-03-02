import { Button } from '@mui/material';
import { TextField, Rating } from '@mui/material';
import './styles.scss';

export default function ReviewForm() {
  return (
    <div className="create_review">
      <h2 className="create_review_title">Laissez un avis à l'utilisateur: </h2>
      <p className="create_review_subtitle">Test</p>
      <form className="create_review_form">
        <div className="create_review_form_rate">
          <Rating
            name="simple-controlled"
            value={0}
            // onChange={(event, newValue) => {
            //   setValue(newValue);
            // }}
          />
        </div>
        <div className="create_review_form_comment">
          <TextField
            fullWidth
            rows={5}
            multiline
            label="Commentaire"
            // value={contentInput}
            // onChange={(event) => dispatch(typeContent(event.target.value))}
          />
        </div>
        <div className="create_review_form_button">
          <Button type="submit" variant="contained">Envoyer</Button>
        </div>
      </form>
    </div>
  );
}
