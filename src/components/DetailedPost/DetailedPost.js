import { Button, Rating, Typography } from '@mui/material';
import './styles.scss';
import PropTypes from 'prop-types';

export default function DetailedPost({ user }) {
  console.log(user);
  return (
    <div className="main">
      <div className="detailed-post">
        <div className="detailed-post_left">
          <img src="#" alt="profil" />
          <p className="detailed-post_left_user">José</p>
          <Typography component="legend" />
          <Rating name="note" value={3} readOnly />
          <ul className="detailed-post_left_service">
            Services proposés:
            <li className="detailed-post_left_service_item">Compagnie</li>
            <li className="detailed-post_left_service_item">Courses</li>
            <li className="detailed-post_left_service_item">Chauffeur</li>
            <li className="detailed-post_left_service_item">Cuisine</li>
            <li className="detailed-post_left_service_item">Ménage</li>
          </ul>
          <p>Tarifs 12€ de l'heure</p>
        </div>
        <div className="detailed-post_right">
          <div className="detailed-post_right_header">
            <h1 className="detailed-post_right_title">Titre de l'annonce <span className="detailed-post_right_subtitle">Service Ponctuel</span></h1>
            <Button type="submit" variant="contained">Envoyer un message</Button>
          </div>
          <p className="detailed-post_right_content">Blablabla</p>
        </div>
      </div>
      <div className="view">
        <h2 className="view_title">Les avis:</h2>
        <div className="view_item">
          <p className="view_item_user">Thierry - note</p>
          <p className="view_item_content">content</p>
        </div>
      </div>
    </div>
  );
}

DetailedPost.propTypes = {
  user: PropTypes.arrayOf(
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
};
