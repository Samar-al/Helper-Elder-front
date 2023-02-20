import PostsPannel from './PostsPannel';
import './styles.scss';
import data from './data'; // data temporaires

export default function LastPosts() {
  return (
    <div className="lastsposts">
      <PostsPannel title="Les dernières offres" posts={data} />
      <PostsPannel title="Les dernières demandes" posts={data} />
    </div>
  );
}
