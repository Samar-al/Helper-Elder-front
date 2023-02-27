import './styles.scss';
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from '../Header/Header';
import Searchbar from '../Searchbar/Searchbar';
import Homepage from '../Homepage/Homepage';
import Footer from '../Footer/Footer';
import Background from '../Background/Background';
import Connexion from '../Connexion/Connexion';
import CreatePostForm from '../CreatePostForm/CreatePostForm';
// import FontSizeToggler from '../FontSizeToggler/FontSizeToggler';
import { loadServices } from '../../actions/app';
import { useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const {largeFontSize} = useSelector ((state) => state.app);

  // loading services on first app render for searchbar and post creation form
  useEffect(
    () => {
      dispatch(loadServices());
    },
    [],
  );

  return (
    <div className={largeFontSize ? 'app app--large' : 'app'}>
      <Background />
      <div className="wrapper">
        <div>
          <Header />
          <Searchbar />
          {/* <FontSizeToggler /> */}
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/connexion" element={<Connexion />} />
            <Route path="/poster-une-annonce" element={<CreatePostForm />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
