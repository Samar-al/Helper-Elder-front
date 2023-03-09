import './styles.scss';
// import { Pagination } from '@mui/material';
// import data from './data';
import { useSelector } from 'react-redux';
import ResultPost from './ResultPost';

export default function ResultPosts() {
  const { postsList } = useSelector((state) => state.post);

  return (
    <div className="search_results">
      {/*  <p className="//TODO">4 résultats sur 357</p>
        TODO to be implemented in a later version */}
      <div className="search_results_list">
        {postsList.map((post) => <ResultPost key={post.id} {...post} />)}
      </div>
      {/* <div className="//TODO">
          <Pagination count={10} variant="outlined" />
        </div> TODO to be implemented in a later version */ }
    </div>
  );
}
