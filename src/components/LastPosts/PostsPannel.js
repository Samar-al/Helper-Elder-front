import PropTypes from 'prop-types';
import Post from './Post';
import avatarPlaceholder from '../../../public/img/placeholders/avatar_placeholder.png';

// panneau dernières annonces (offre/demande)
export default function PostsPannel({ title, posts }) {
  return (
    <div className="lastposts_pannel">
      <div className="lastposts_pannel_title"><h2>{title}</h2></div>
      <div className="lastposts_pannel_postlist">
        {posts.map((post) => <Post key={post.id} picture={post.user.picture ? post.user.picture : avatarPlaceholder} {...post} />)}
      </div>
    </div>
  );
}

PostsPannel.propTypes = {
  title: PropTypes.string.isRequired,
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    picture: PropTypes.string,
    title: PropTypes.string.isRequired,
    zipcode: PropTypes.string, // .isRequired, // commented as long as field is null in fixtures
    city: PropTypes.string, // .isRequired, // commented as long as field is null in fixtures
    content: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
  })).isRequired,
};
