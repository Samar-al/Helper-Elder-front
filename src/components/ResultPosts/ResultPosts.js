import './styles.scss';
import { Pagination } from '@mui/material';
// import data from './data';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import ResultPost from './ResultPost';
import { loadPostsElders, loadPostsHelpers } from '../../actions/resultposts';

export default function ResultPosts() {
  const dispatch = useDispatch();
  const { postsListHelpers, postsListElders } = useSelector((state) => state.post);

  useEffect(
    () => {
      dispatch(loadPostsHelpers);
      dispatch(loadPostsElders);
    },
    [],
  );

  console.log(postsListHelpers);
  return (
    <div className="resultposts">
      <div className="list_posts">
        <p className="list_posts_result">4 résultats sur 357</p>
        <div className="posts">
          {postsListHelpers.map((postHelper) => <ResultPost key={postHelper.id} {...postHelper} />)}
          {postsListElders.map((postElder) => <ResultPost key={postElder.id} {...postElder} />)}
        </div>
        <div className="pagination">
          <Pagination count={10} variant="outlined" />
        </div>
      </div>
    </div>
  );
}
