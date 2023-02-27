import { Button, Rating, Typography } from '@mui/material';
import './styles.scss';
import PropTypes from 'prop-types';
import post from './data';
import reviews from './data-reviews';

export default function DetailedPost() {
  return (
    <div className="main">
      <div className="detailed-post">
        <div className="detailed-post_left">
          <img className="detailed-post_left_picture" src={post.picture} alt={post.username} />
          <p className="detailed-post_left_user">{post.username}</p>
          <Typography component="legend" />
          <Rating name="note" value={post.note} readOnly />
          <ul className="detailed-post_left_service">
            Services proposés:
            <li className="detailed-post_left_service_item">Compagnie</li>
            <li className="detailed-post_left_service_item">Courses</li>
            <li className="detailed-post_left_service_item">Chauffeur</li>
            <li className="detailed-post_left_service_item">Cuisine</li>
            <li className="detailed-post_left_service_item">Ménage</li>
          </ul>
          <p className="detailed-post_left_service_rate">Tarifs {post.rate}€ de l'heure</p>
          <p>MAP</p>
        </div>
        <div className="detailed-post_right">
          <div className="detailed-post_right_header">
            <h1 className="detailed-post_right_title">{post.title} / <span className="detailed-post_right_subtitle">Service {post.subtitle} </span></h1>
            <Button type="submit" variant="contained">Envoyer un message</Button>
          </div>
          <p className="detailed-post_right_content">{post.content}</p>
        </div>
      </div>
      <div className="views">
        <h2 className="view_title">Les avis:</h2>
        <div className="view_item">
          <p className="view_item_user">{reviews.username} - <Typography component="legend" />
            <Rating name="note" value={reviews.note} readOnly />
          </p>
          <p className="view_item_content">{reviews.content}</p>
        </div>
      </div>
    </div>
  );
}

DetailedPost.propTypes = {
  post: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      username: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      zipcode: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,

  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string.isRequired,
      note: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
