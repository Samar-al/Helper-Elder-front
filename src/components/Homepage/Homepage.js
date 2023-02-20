import Intro from '../Intro/Intro';
import LastPosts from '../LastPosts/LastPosts';
import ServiceCards from '../ServiceCards/ServiceCards';
import './styles.scss';

export default function Homepage() {
  return (
    <>
      <Intro />
      <ServiceCards />
      <LastPosts />
    </>
  );
}
