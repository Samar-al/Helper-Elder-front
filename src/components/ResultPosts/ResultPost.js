import './styles.scss';
import PropTypes from 'prop-types';
import { Rating } from '@mui/material';
import { NavLink } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';
import { amber } from '@mui/material/colors';
import { formatDateWithHour } from '../../utils/functions';
import SmallTag from '../SmallTag/SmallTag';
import avatarPlaceholder from '../../../public/img/placeholders/avatar_placeholder.png';

export default function ResultPost({
  user,
  title,
  postalCode,
  createdAt,
  content,
  id,
  tag,
  workType,
  radius,
}) {
  return (
    <div className="search_results_list_item">
      <NavLink to={`/profil/${user.id}`} className="search_results_list_item_user">
        <div className="search_results_list_item_user_picture"><img src={user.picture || avatarPlaceholder} alt="user avatar" /></div>
        <div className="search_results_list_item_user_name">{user.firstname}</div>
        <div className="search_results_list_item_user_rating--large"><Rating value={user.avgRating} size="small" readOnly /></div>
        <div className="search_results_list_item_user_rating--small">{user.avgRating} <StarIcon sx={{ fontSize: 12, color: amber[500] }} /></div>
      </NavLink>
      <NavLink to={`/annonce/${id}`} className="search_results_list_item_post">
        <h3 className="search_results_list_item_post_title">{title}</h3>
        <div className="search_results_list_item_post_localisation">Localisation : {postalCode}{radius > 0 ? ` (rayon: ${radius} km)` : ''}</div>
        <div className="search_results_list_item_post_date"><strong>{user.type === 1 ? 'Demande' : 'Offre' }</strong> postée le {formatDateWithHour(createdAt)}</div>
        <div className="search_results_list_item_post_content"><p className="search_results_list_item_post_content_text">{content}</p></div>
        <div className="search_results_list_item_post_services">
          <SmallTag type="light" label={`Service ${workType ? 'ponctuel' : 'régulier'}`} />
          {tag.map((service) => <SmallTag type="light" key={service.name} label={service.name} />)}
        </div>
      </NavLink>
    </div>
  );
}

ResultPost.propTypes = {
  user:
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      picture: PropTypes.string.isRequired,
      firstname: PropTypes.string.isRequired,
      avgRating: PropTypes.number.isRequired,
      type: PropTypes.number.isRequired,
    }).isRequired,
  title: PropTypes.string.isRequired,
  postalCode: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  tag: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  workType: PropTypes.bool.isRequired,
  radius: PropTypes.number.isRequired,
};
