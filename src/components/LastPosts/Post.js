import './styles.scss';
import PropTypes from 'prop-types';
import { formatDate } from '../../utils/functions';

// une annonce parmis les annonces à afficher en homepage
export default function Post({
  picture,
  title,
  zipcode,
  city,
  createdAt,
  content,
}) {
  return (
    <div className="lastposts_pannel_postlist_post">
      <div className="lastposts_pannel_postlist_post_header">
        <img alt={title} src={picture} className="lastposts_pannel_postlist_post_header_picture" />
        <div className="lastposts_pannel_postlist_post_header_info">
          <h3 className="lastposts_pannel_postlist_post_header_info_title">{title}</h3>
          <p className="lastposts_pannel_postlist_post_header_info_city">{zipcode} - {city}</p>
          <p className="lastposts_pannel_postlist_post_header_info_date">le {formatDate(createdAt)}</p>
        </div>
      </div>
      <p className="lastposts_pannel_postlist_post_content">{content}</p>
    </div>
  );
}

Post.propTypes = {
  picture: PropTypes.string,
  title: PropTypes.string.isRequired,
  zipcode: PropTypes.string, // .isRequired, // commented as long as field is null in fixtures
  city: PropTypes.string, // .isRequired, // commented as long as field is null in fixtures
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

Post.defaultProps = {
  picture: 'img/placeholders/avatar_placeholder.png',
  zipcode: '75001',
  city: 'Paris',
};
