import { Button, Rating, Typography } from '@mui/material';
import './styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
// import reviews from './data-reviews';
import { useLocation } from 'react-router-dom';
import { loadPost, loadReview } from '../../actions/detailedpost';

export default function DetailedPost() {
  const dispatch = useDispatch();
  const location = useLocation();
  const { currentPost } = useSelector((state) => state.post);
  const { currentReview } = useSelector((state) => state.post);

  useEffect(
    () => {
      // split() divdes a string into an ordered list of substrings
      // pop() return the last element from an array
      dispatch(loadPost(location.pathname.split('/').pop()));
      dispatch(loadReview(location.pathname.split('/').pop()));
    },
    [],
  );
  console.log(currentReview);
  return (
    <div className="main">
      {currentPost !== null && (
      <div className="detailed-post">
        <div className="detailed-post_left">
          <img className="detailed-post_left_picture" src={currentPost.user.picture} alt={currentPost.user.firstname} />
          <p className="detailed-post_left_user">{currentPost.user.firstname} {currentPost.user.lastname}</p>
          <Typography component="legend" />
          <Rating name="note" value={currentPost.user.avgRating} readOnly />
          <ul className="detailed-post_left_service">
            Services proposés:
            <li className="detailed-post_left_service_item">Compagnie</li>
            <li className="detailed-post_left_service_item">Courses</li>
            <li className="detailed-post_left_service_item">Chauffeur</li>
            <li className="detailed-post_left_service_item">Cuisine</li>
            <li className="detailed-post_left_service_item">Ménage</li>
          </ul>
          <p className="detailed-post_left_service_rate">Tarifs {currentPost.hourlyRate}€ de l'heure</p>
          <p>{currentPost.postalCode}</p> {/* TODO MAP */}
        </div>
        <div className="detailed-post_right">
          <div className="detailed-post_right_header">
            <h1 className="detailed-post_right_title">{currentPost.title} / <span className="detailed-post_right_subtitle">Service {currentPost.workType ? 'ponctuel' : 'régulier'} </span></h1>
            <Button type="submit" variant="contained">Envoyer un message</Button>
          </div>
          <p className="detailed-post_right_content">{currentPost.content}</p>
        </div>
      </div>
      )}
      {currentPost !== null && (
      <div className="views">
        <h2 className="view_title">Les avis:</h2>
        <div className="view_item">
          <p className="view_item_user">{currentPost.user.reviewsTaker} - <Typography component="legend" />
            <Rating name="note" value={currentPost.title} readOnly />
          </p>
          <p className="view_item_content">{currentPost.user.messageSender}</p>
        </div>
      </div>
      )}
    </div>
  );
}
