import { Button, Rating, Typography } from '@mui/material';
import './styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import { loadPost } from '../../actions/detailedpost';
import FormModal from '../FormModal/FormModal';
import { showFormModal } from '../../actions/app';
import { convFormClear, convFormTypeTitle } from '../../actions/conversation';

export default function DetailedPost() {
  const dispatch = useDispatch();
  const location = useLocation();
  const { currentPost, currentReviews } = useSelector((state) => state.post);
  const { formModalIsVisible } = useSelector((state) => state.app);
  const { user } = useSelector((state) => state.authentication);

  useEffect(
    () => {
      // split() divdes a string into an ordered list of substrings
      // pop() return the last element from an array
      dispatch(loadPost(location.pathname.split('/').pop()));
      // dispatch(loadReview(location.pathname.split('/').pop()));

      // clear conversation form when unmounting component
      return () => dispatch(convFormClear());
    },
    [],
  );

  return (
    <>
      <div className="main">
        {currentPost !== null && (
        <div className="detailed-post">
          <div className="detailed-post_left">
            <img className="detailed-post_left_picture" src={currentPost.user.picture} alt={currentPost.user.firstname} />
            <p className="detailed-post_left_user">
              <NavLink
                to={`/profil/${currentPost.user.id}`}
              >
                {currentPost.user.firstname}
              </NavLink>
            </p>
            <Rating name="note" value={currentPost.user.avgRating} readOnly />
            <ul className="detailed-post_left_service">
              Services proposés:
              {currentPost.tag.map((service) => (
                <li key={service.id} className="detailed-post_left_service_item">{service.name}</li>
              ))}
            </ul>
            <p className="detailed-post_left_service_rate">Tarifs {currentPost.hourlyRate}€ de l'heure</p>
            <p>{currentPost.postalCode}</p> {/* TODO MAP */}
          </div>
          <div className="detailed-post_right">
            <div className="detailed-post_right_header">
              <h1 className="detailed-post_right_title">{currentPost.title} <span className="detailed-post_right_title_subtitle">Service {currentPost.workType ? 'ponctuel' : 'régulier'} </span></h1>
              {user && (
              <Button
                onClick={() => {
                  dispatch(showFormModal('conversation'));
                  dispatch(convFormTypeTitle(`RE: ${currentPost.title}`));
                }}
                variant="contained"
              >Envoyer un message
              </Button>
              )}
            </div>
            <p className="detailed-post_right_content">{currentPost.content}</p>
          </div>
        </div>
        )}
        {currentReviews !== null && (
          <div className="views">
            <h2 className="view_title">Les avis:</h2>
            {currentReviews.map((review) => (
              <div className="view_item" key={review.id}>
                <p className="view_item_user">{review.id} - <Typography component="legend" />
                  <Rating name="note" value={review.rate} readOnly />
                </p>
                <p className="view_item_content">{review.content}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      {formModalIsVisible && currentPost !== null && <FormModal targetUser={currentPost.user} />}
    </>
  );
}
