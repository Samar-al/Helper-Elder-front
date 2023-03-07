import './styles.scss';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { formatDate } from '../../utils/functions';

// une annonce parmis les annonces à afficher en homepage
export default function Post({
  picture,
  title,
  postalCode,
  createdAt,
  content,
  id,
}) {
  return (
    <div className="lastposts_pannel_postlist_post">
      <NavLink to={`/annonce/${id}`}>
        <div className="lastposts_pannel_postlist_post_header">
          <img alt={title} src={picture} className="lastposts_pannel_postlist_post_header_picture" />
          <div className="lastposts_pannel_postlist_post_header_info">
            <h3 className="lastposts_pannel_postlist_post_header_info_title">{title}</h3>
            <p className="lastposts_pannel_postlist_post_header_info_city">{postalCode}</p>
            <p className="lastposts_pannel_postlist_post_header_info_date">le {formatDate(createdAt)}</p>
          </div>
        </div>
        <p className="lastposts_pannel_postlist_post_content">{content}</p>
      </NavLink>
    </div>
  );
}

Post.propTypes = {
  picture: PropTypes.string,
  title: PropTypes.string.isRequired,
  postalCode: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

Post.defaultProps = {
  picture: 'img/placeholders/avatar_placeholder.png',
};
