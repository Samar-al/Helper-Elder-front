import { useSelector } from 'react-redux';
import PostsPannel from './PostsPannel';
import './styles.scss';

// Wrapper contenant les panneaux "dernières annonces"
export default function LastPosts() {
  const { lastOffers, lastRequests } = useSelector((state) => state.homepage);

  return (
    <div className="lastposts">
      <PostsPannel title="Les dernières offres" posts={lastOffers} />
      <PostsPannel title="Les dernières demandes" posts={lastRequests} />
    </div>
  );
}
