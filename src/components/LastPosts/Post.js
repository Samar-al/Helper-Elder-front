import './styles.scss';
import PropTypes from 'prop-types';

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
          <p className="lastposts_pannel_postlist_post_header_info_date">{Date.parse(createdAt)}</p>
        </div>
      </div>
      <p className="lastposts_pannel_postlist_post_content">{content}</p>
    </div>
  );
}

Post.propTypes = {
  picture: PropTypes.string.isRequired, // à modifier lorsqu'on saura comment récupérer l'avatar
  title: PropTypes.string.isRequired,
  zipcode: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  // createdAt: PropTypes.instanceOf(Date).isRequired,
};
