import LastPosts from '../LastPosts/LastPosts';
import ServiceCards from '../ServiceCards/ServiceCards';
import './styles.scss';

export default function Homepage() {
  return (
    <>
      <ServiceCards />
      <LastPosts />
    </>
  );
}
