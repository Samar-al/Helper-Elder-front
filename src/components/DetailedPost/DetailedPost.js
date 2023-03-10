import { Button, Rating } from '@mui/material';
import './styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useLocation, NavLink, useNavigate } from 'react-router-dom';
import { loadPost } from '../../actions/detailedpost';
import FormModal from '../FormModal/FormModal';
import { showFormModal } from '../../actions/app';
import { convFormClear, convFormTypeTitle } from '../../actions/conversation';
import ReviewPannel from '../ReviewPannel/ReviewPannel';
import SmallTag from '../SmallTag/SmallTag';
import { formatDateWithHour } from '../../utils/functions';

export default function DetailedPost() {
  const dispatch = useDispatch();
  const location = useLocation();
  const { currentPost, currentReviews } = useSelector((state) => state.post);
  const { formModalIsVisible } = useSelector((state) => state.app);
  const { user } = useSelector((state) => state.authentication);
  const { conversationList } = useSelector((state) => state.conversation);
  const navigate = useNavigate();

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
            <p className="detailed-post_left_service_rate">Tarifs {currentPost.hourlyRate}€ de l'heure</p>
            <p>{currentPost.postalCode}</p> {/* TODO MAP */}
          </div>
          <div className="detailed-post_right">
            <div className="detailed-post_right_top">
              <h1 className="detailed-post_right_top_title">{currentPost.title}</h1>
              <span className="detailed-post_right_top_date">| {currentPost.user.type === 1 ? 'Demande' : 'Offre' } postée le {formatDateWithHour(currentPost.createdAt)}</span>
            </div>
            <div className="detailed-post_right_content">
              <p className="detailed-post_right_content_text">{currentPost.content}</p>
              <div className="detailed-post_right_content_service">
                <SmallTag type="dark" label={`Service ${currentPost.workType ? 'ponctuel' : 'régulier'}`} />
                {currentPost.tag.map((service) => (
                  <SmallTag key={service.id} type="dark" label={service.name} />
                ))}
              </div>
            </div>
            <div className="detailed-post_right_message">
              {user && (
                <Button
                  onClick={() => {
                    // eslint-disable-next-line max-len
                    const conversation = conversationList.find((conv) => conv.interlocutorId === currentPost.user.id);
                    if (conversation) navigate(`/conversation/${conversation.id}`);
                    else {
                      dispatch(showFormModal('conversation'));
                      dispatch(convFormTypeTitle(`RE: ${currentPost.title}`));
                    }
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
