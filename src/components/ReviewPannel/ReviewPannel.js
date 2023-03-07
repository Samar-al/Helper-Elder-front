import './styles.scss';
import PropTypes from 'prop-types';
import { Rating } from '@mui/material';

export default function ReviewPannel({ reviews }) {
  return (
    <div className="reviews">
      <div className="reviews_pannel">
        <h2 className="reviews_pannel_title">Avis sur cet utilisateur :</h2>
        {reviews.map((review) => (
          <div className="reviews_pannel_item" key={review.id}>
            <div className="reviews_pannel_item_giver">
              {/* // TODO display the first name of review giver here */}
              Avis anonyme
            </div>
            <div className="reviews_pannel_item_content">
              <div className="reviews_pannel_item_content_rate">
                <Rating value={review.rate} readOnly />
              </div>
              <p className="reviews_pannel_item_content_comment">{review.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

ReviewPannel.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    rate: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
  })).isRequired,
};
