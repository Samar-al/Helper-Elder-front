import './styles.scss';
import PropTypes from 'prop-types';
import { Pagination } from '@mui/material';
import data from './data';

export default function ResultPosts() {
  return (
    <div className="resultposts">
      <div className="list_posts">
        <p className="list_posts_result">4 résultats sur 357</p>
        <div className="posts">
          {posts.map((post) => <ResultPosts key={post.id} {...post} />)}
        </div>
        <div className="pagination">
          <Pagination count={10} variant="outlined" />
        </div>
      </div>
    </div>
  );
}

ResultPosts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    picture: PropTypes.string.isRequired, // à modifier lorsqu'on saura comment récupérer l'avatar
    title: PropTypes.string.isRequired,
    zipcode: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    date: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.instanceOf(Date),
    ]).isRequired,
  })).isRequired,
};
