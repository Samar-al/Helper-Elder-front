import PropTypes from 'prop-types';
import Post from './Post';

export default function PostsPannel({ title, posts }) {
  return (
    <div className="lastsposts_pannel">
      <div className="lastsposts_pannel_title"><h2>{title}</h2></div>
      <div className="lastsposts_pannel">
        {posts.map((post) => <Post key={post.id} {...post} />)}
      </div>
    </div>
  );
}

PostsPannel.propTypes = {
  title: PropTypes.string.isRequired,
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    picture: PropTypes.string.isRequired, // à modifier lorsqu'on saura comment récupérer l'avatar
    title: PropTypes.string.isRequired,
    zipcode: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
  })).isRequired,
};
