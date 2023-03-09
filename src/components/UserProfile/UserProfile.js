import './styles.scss';
import {
  Button,
  Rating,
} from '@mui/material';
import { useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import avatarPlaceholder from '../../../public/img/placeholders/avatar_placeholder.png';
import { formatDate } from '../../utils/functions';
import { clearPageUser, fetchPageUser } from '../../actions/userprofile';
import FormModal from '../FormModal/FormModal';
import { convFormClear } from '../../actions/conversation';
import { redirectAction, showFormModal } from '../../actions/app';
import ReviewPannel from '../ReviewPannel/ReviewPannel';

export default function UserProfile() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authentication);
  const { currentPageUser } = useSelector((state) => state.userprofile);
  const { formModalIsVisible } = useSelector((state) => state.app);
  const { conversationList } = useSelector((state) => state.conversation);
  const location = useLocation();
  const isMyProfile = location.pathname === '/mon-profil';
  const navigate = useNavigate();

  // if the current page is '/mon-profil'
  // this component will use the logged user to display its information
  // otherwise it will fetch the user corresponding to the id in the url and use this one instead
  const pageUser = isMyProfile ? user : currentPageUser;

  function displayGender() {
    if (pageUser.gender === 1) {
      return 'Homme';
    }
    if (pageUser.gender === 2) {
      return 'Femme';
    }

    return 'Ne préfère pas répondre';
  }

  useEffect(
    () => {
      if (Number(location.pathname.split('/').pop()) === user.id) dispatch(redirectAction('/mon-profil'));
      else if (!isMyProfile) dispatch(fetchPageUser(location.pathname.split('/').pop()));

      return () => {
        dispatch(clearPageUser());
        dispatch(convFormClear());
      };
    },
    [],
  );

  return (
    <>
      <div className="userprofile">
        {pageUser && (
        <>
          <div className="userprofile_info_media">
            <img alt="userprofile" className="userprofile_picture" src={pageUser.picture ? pageUser.picture : avatarPlaceholder} />
            <div className="userprofile_rating">
              <Rating name="note" value={pageUser.avgRating} readOnly />
            </div>
            <div className="userprofile_button">
              {isMyProfile && (
              <>
                <div className="userprofile_button_add_post">
                  <Button className="userprofile_button_add_post" variant="contained">
                    <NavLink
                      to="/poster-une-annonce"
                    >
                      Poster une annonce
                    </NavLink>
                  </Button>
                </div>
                <div className="userprofile_button_message">
                  <Button variant="contained">
                    <NavLink
                      to="/conversation"
                    >
                      Messagerie
                    </NavLink>
                  </Button>
                </div>
              </>
              )}
              {!isMyProfile && (
                <>
                  <div className="userprofile_button_message">
                    <Button
                      onClick={() => {
                        // eslint-disable-next-line max-len
                        const conversation = conversationList.find((conv) => conv.interlocutorId === pageUser.id);
                        if (conversation) navigate(`/conversation/${conversation.id}`);
                        else dispatch(showFormModal('conversation'));
                      }}
                      variant="contained"
                    >Envoyer un message
                    </Button>
                  </div>
                  <div className="userprofile_button_review">
                    <Button
                      onClick={() => {
                        dispatch(showFormModal('review'));
                      }}
                      variant="contained"
                    >Laisser un avis
                    </Button>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="userprofile_info_text">
            {isMyProfile && (
            <div className="userprofile_button_modify">
              <Button variant="contained">
                <NavLink
                  to="/mon-profil/modifier"
                >
                  Modifier
                </NavLink>
              </Button>
            </div>
            )}
            <div className="userprofile_info_text_paragraph">
              <p><span>Prénom :</span> {pageUser.firstname} </p>
              {isMyProfile && (
                <>
                  <p><span>Nom :</span> {pageUser.lastname} </p>
                  <p><span>Date de naissance :</span> {formatDate(pageUser.birthdate)} </p>
                  <p><span>Email :</span> {pageUser.email} </p>
                </>
              )}
              <p><span>Localisation :</span> {pageUser.postalCode} </p>
              <p><span>Sexe :</span> {displayGender(pageUser.gender)} </p>
            </div>

            <div className="userprofile_input">
              <div className="userprofile_input_description">
                <h1> Description </h1>
                <p> {pageUser.description} </p>
              </div>
            </div>
          </div>
          {formModalIsVisible && <FormModal targetUser={pageUser} />}
        </>
        )}
      </div>
      {pageUser
      && pageUser.reviewsTaker.length !== 0
      && <ReviewPannel reviews={pageUser.reviewsTaker} />}
    </>
  );
}
