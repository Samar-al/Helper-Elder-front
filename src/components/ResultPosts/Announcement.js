import './styles.scss';
import PropTypes from 'prop-types';
import { Rating, Typography } from '@mui/material';

export default function Announcement({
  picture,
  username,
  note,
  title,
  city,
  zipcode,
  date,
  content,
}) {
  return (
    <>
      <div className="post_left">
        <img className="post_left_picture" src={picture} alt={username} />
        <p className="post_left_username">{username}</p>
        <Typography component="legend" />
        <Rating name="note" value={note} readOnly />
      </div>
      <div className="post_right">
        <h3 className="post_right_title">{title} - {city} - {zipcode}</h3>
        <span className="post_right_title_date">{date}</span>
        <p className="post_right_content">{content}</p>
      </div>
    </>
  );
}

Announcement.propTypes = {
  picture: PropTypes.string.isRequired, // à modifier lorsqu'on saura comment récupérer l'avatar
  username: PropTypes.string.isRequired,
  note: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  zipcode: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  content: PropTypes.string.isRequired,
};
