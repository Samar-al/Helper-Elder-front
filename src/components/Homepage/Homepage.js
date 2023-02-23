import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadLastPosts } from '../../actions/homepage';
import Intro from '../Intro/Intro';
import LastPosts from '../LastPosts/LastPosts';
import ServiceCards from '../ServiceCards/ServiceCards';
import './styles.scss';

export default function Homepage() {
  const dispatch = useDispatch();

  useEffect(
    () => {
      dispatch(loadLastPosts());
    },
    [],
  );

  return (
    <>
      <Intro />
      <ServiceCards />
      <LastPosts />
    </>
  );
}
