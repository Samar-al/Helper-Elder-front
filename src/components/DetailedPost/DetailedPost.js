import { Button, Rating } from '@mui/material';
import './styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import { loadPost } from '../../actions/detailedpost';
import FormModal from '../FormModal/FormModal';
import { showFormModal } from '../../actions/app';
import { convFormClear, convFormTypeTitle } from '../../actions/conversation';
import ReviewPannel from '../ReviewPannel/ReviewPannel';

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

      // clear conversation form when unmounting component
      return () => dispatch(convFormClear());
    },
    [],
  );

  return (
    <>
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
            <Rating value={currentPost.user.avgRating} readOnly />
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
            <h1 className="detailed-post_right_title">{currentPost.title} <span className="detailed-post_right_title_subtitle">Service {currentPost.workType ? 'ponctuel' : 'régulier'} </span></h1>
            <p className="detailed-post_right_content">{currentPost.content}</p>
            <div className="detailed-post_right_message">
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
              {!user && (
                <p>
                  <NavLink className="detailed-post_right_message_link" to="/connexion">Connectez-vous</NavLink> ou <NavLink className="detailed-post_right_message_link" to="/inscription">créez un compte</NavLink> pour répondre à cette annonce.
                </p>
              )}
            </div>
          </div>
        </div>
      )}
      {currentReviews.length !== 0 && <ReviewPannel reviews={currentReviews} />}
      {formModalIsVisible && currentPost !== null && <FormModal targetUser={currentPost.user} />}
    </>
  );
}
