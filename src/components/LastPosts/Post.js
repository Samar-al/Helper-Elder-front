import './styles.scss';
import PropTypes from 'prop-types';

// une annonce parmis les annonces à afficher en homepage
export default function Post({
  picture,
  title,
  zipcode,
  city,
  date,
  content,
}) {
  return (
    <div className="lastsposts_pannel_postslist">
      <div className="lastsposts_pannel_postslist_post">
        <div className="lastsposts_pannel_postslist_post_info">
          <img alt={title} src={picture} className="lastsposts_pannel_postslist_post_info_picture" />
          <h3 className="lastsposts_pannel_postslist_post_info_title">{title}</h3>
          <p className="lastsposts_pannel_postslist_post_info_city">{zipcode} - {city}</p>
          <p className="lastsposts_pannel_postslist_post_info_date">{date}</p>
        </div>
        <p className="lastsposts_pannel_postslist_post_content">{content}</p>
      </div>
    </div>
  );
}

Post.propTypes = {
  picture: PropTypes.string.isRequired, // à modifier lorsqu'on saura comment récupérer l'avatar
  title: PropTypes.string.isRequired,
  zipcode: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
};
