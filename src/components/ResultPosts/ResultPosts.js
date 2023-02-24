import './styles.scss';
import data from './data';
import Announcements from './Announcements';

export default function ResultPosts() {
  return (
    <div className="resultposts">
      <Announcements posts={data} />
    </div>
  );
}
