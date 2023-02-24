import './styles.scss';
import data from './data';
import AnnouncementList from './AnnouncementList';

export default function ResultPosts() {
  return (
    <div className="resultposts">
      <AnnouncementList posts={data} />
    </div>
  );
}
