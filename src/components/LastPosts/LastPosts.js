import PostsPannel from './PostsPannel';
import './styles.scss';
import data from './data'; // data temporaires

// Wrapper contenant les panneaux "dernières annonces"
export default function LastPosts() {
  return (
    <div className="lastposts">
      <PostsPannel title="Les dernières offres" posts={data} />
      <PostsPannel title="Les dernières demandes" posts={data} />
    </div>
  );
}
