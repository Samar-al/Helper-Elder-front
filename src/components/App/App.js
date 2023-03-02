import './styles.scss';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../Header/Header';
import Searchbar from '../Searchbar/Searchbar';
import Homepage from '../Homepage/Homepage';
import Footer from '../Footer/Footer';
import Background from '../Background/Background';
import Connexion from '../Connexion/Connexion';
import CreatePostForm from '../CreatePostForm/CreatePostForm';
import DetailedPost from '../DetailedPost/DetailedPost';
import PrivateRoute from './PrivateRoute';
import About from '../About/About';
import { loadServices, redirectDone } from '../../actions/app';

function App() {
  const dispatch = useDispatch();
  const { redirectPath, largeFontSize } = useSelector((state) => state.app);
  const navigate = useNavigate();

  // loading services on first app render for searchbar and post creation form
  useEffect(
    () => {
      dispatch(loadServices());
    },
    [],
  );

  // global redirection system
  // redirectAction(path) can be dispatched from anywhere to put the said path into the state.
  // whenever the App component sees a redirection path in the state, it redirects to it
  // and then empties state.app.redirectPath by dispatching redirectDone()
  useEffect(
    () => {
      if (redirectPath !== '') {
        const path = redirectPath;
        dispatch(redirectDone());
        navigate(path);
      }
    },
    [redirectPath],
  );

  return (
    <div className={largeFontSize ? 'app app--large' : 'app'}>
      <Background />
      <div className="wrapper">
        <div>
          <Header />
          <Searchbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/connexion" element={<Connexion />} />
            <Route path="/annonce/:id" element={<DetailedPost />} />
            <Route path="/a-propos" element={<About />} />
            <Route path="/poster-une-annonce" element={<PrivateRoute element={<CreatePostForm />} />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
