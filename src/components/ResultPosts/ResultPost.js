import './styles.scss';
import PropTypes from 'prop-types';
import { Rating, Typography } from '@mui/material';

export default function ResultPost({
  user,
  title,
  postalCode,
  createdAt,
  content,
}) {
  return (
    <div className="post">
      <div className="post_left">
        <img className="post_left_picture" src={user.picture} alt={user.firstname} />
        <p className="post_left_username">{user.firstname}</p>
        <Typography component="legend" />
        <Rating name="note" value={user.avgRating} readOnly />
      </div>
      <div className="post_right">
        <h3 className="post_right_title">{title}</h3>
        <span className="post_right_title_date">{postalCode} - {createdAt}</span>
        <p className="post_right_content">{content}</p>
      </div>
    </div>
  );
}

ResultPost.propTypes = {
  user:
    PropTypes.shape({
      picture: PropTypes.string.isRequired,
      firstname: PropTypes.string.isRequired,
      avgRating: PropTypes.number.isRequired,
    }).isRequired,
  title: PropTypes.string.isRequired,
  postalCode: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};
