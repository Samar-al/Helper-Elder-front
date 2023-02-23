import PropTypes from 'prop-types';
import Post from './Post';

// panneau dernières annonces (offre/demande)
export default function PostsPannel({ title, posts }) {
  return (
    <div className="lastposts_pannel">
      <div className="lastposts_pannel_title"><h2>{title}</h2></div>
      <div className="lastposts_pannel_postlist">
        {posts.map((post) => <Post key={post.id} {...post} />)}
      </div>
    </div>
  );
}

PostsPannel.propTypes = {
  title: PropTypes.string.isRequired,
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    picture: PropTypes.string, // à modifier lorsqu'on saura comment récupérer l'avatar
    title: PropTypes.string.isRequired,
    zipcode: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
  })).isRequired,
};
