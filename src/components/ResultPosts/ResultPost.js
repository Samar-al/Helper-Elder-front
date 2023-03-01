import './styles.scss';
import PropTypes from 'prop-types';
import { Rating, Typography } from '@mui/material';

export default function ResultPost({
  picture,
  firstname,
  avgRating,
  title,
  postalCode,
  createdAt,
  content,
  id,
}) {
  console.log(title);
  return (
    <div className="post">
      <div className="post_left">
        <img className="post_left_picture" src={picture} alt={username} />
        <p className="post_left_username">{username}</p>
        <Typography component="legend" />
        <Rating name="note" value={note} readOnly />
      </div>
      <div className="post_right">
        <h3 className="post_right_title">{title}</h3>
        <span className="post_right_title_date">{city} - {zipcode} - {date}</span>
        <p className="post_right_content">{content}</p>
      </div>
    </div>
  );
}

ResultPost.propTypes = {
  picture: PropTypes.string.isRequired, // à modifier lorsqu'on saura comment récupérer l'avatar
  firstname: PropTypes.string.isRequired,
  avgRating: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  postalCode: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};
