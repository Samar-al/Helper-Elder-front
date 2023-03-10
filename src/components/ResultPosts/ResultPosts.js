import './styles.scss';
// import { Pagination } from '@mui/material';
import { useSelector } from 'react-redux';
import ResultPost from './ResultPost';
import FormErrors from '../FormErrors/FormErrors';

export default function ResultPosts() {
  const { postsList } = useSelector((state) => state.post);
  const { errors } = useSelector((state) => state.searchbar);

  return (
    <div className="search_results">
      {/*  <p className="//TODO">4 résultats sur 357</p>
        TODO to be implemented in a later version */}
      <div className="search_results_list">
        {postsList.map((post) => <ResultPost key={post.id} {...post} />)}
        {postsList.length === 0 && errors.length === 0 && (
          <div className="search_results_list_empty">
            <h2>Oops !</h2>
            <p>Aucun résultat correspondant à votre recherche n'a été trouvé.</p>
            <p>Vous pouvez modifier vos critères de recherche pour trouver des annonces</p>
          </div>
        )}
        {errors.length !== 0 && <FormErrors errors={errors} /> }
      </div>
      {/* <div className="//TODO">
          <Pagination count={10} variant="outlined" />
        </div> TODO to be implemented in a later version */ }
    </div>
  );
}
