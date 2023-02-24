import './styles.scss';
import PropTypes from 'prop-types';
import Announcement from './Announcement';

export default function Announcements({
  posts,
}) {
  return (
    <div className="list_posts">
      <p>4 résultats sur 357</p>
      <div className="post">
        {posts.map((post) => <Announcement key={post.id} {...post} />)}
      </div>
    </div>
  );
}

Announcements.propTypes = {
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
