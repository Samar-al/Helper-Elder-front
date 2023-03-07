import './styles.scss';
// import { Pagination } from '@mui/material';
// import data from './data';
import { useSelector } from 'react-redux';
import ResultPost from './ResultPost';

export default function ResultPosts() {
  const { postsList } = useSelector((state) => state.post);

  return (
    <div className="resultposts">
      <div className="list_posts">
        {/*  <p className="list_posts_result">4 résultats sur 357</p>
        TODO to be implemented in a later version */}
        <div className="posts">
          {postsList.map((post) => <ResultPost key={post.id} {...post} />)}
        </div>
        {/* <div className="pagination">
          <Pagination count={10} variant="outlined" />
        </div> TODO to be implemented in a later version */ }
      </div>
    </div>
  );
}
