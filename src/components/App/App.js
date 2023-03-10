import './styles.scss';
import {
  Route,
  Routes,
  useNavigate,
  Navigate,
  useLocation
} from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../Header/Header';
import Searchbar from '../Searchbar/Searchbar';
import Homepage from '../Homepage/Homepage';
import Footer from '../Footer/Footer';
import Background from '../Background/Background';
import Connexion from '../Connexion/Connexion';
import CreatePostForm from '../CreatePostForm/CreatePostForm';
import ResultPosts from '../ResultPosts/ResultPosts';
import DetailedPost from '../DetailedPost/DetailedPost';
import UserProfile from '../UserProfile/UserProfile';
import UserProfileEdit from '../UserProfile/UserProfileEdit';
import PrivateRoute from './PrivateRoute';
import ListConversation from '../ListConversation/ListConversation';
import PrivateConversation from '../PrivateConversation/PrivateConversation';
import About from '../About/About';
import Contact from '../Contact/Contact';
import { clearInfoModal, loadServices, redirectDone } from '../../actions/app';
import InfoModal from '../InfoModal/InfoModal';
import LegalMentions from '../LegalMentions/LegalMentions';
import Registration from '../Registration/Registration';
import NotFound from '../NotFound/NotFound';
import { loadConversations } from '../../actions/conversation';

function App() {
  const dispatch = useDispatch();
  const { redirectPath, largeFontSize, infoMessages } = useSelector((state) => state.app);
  const { user } = useSelector((state) => state.authentication);
  const navigate = useNavigate();
  const location = useLocation();

  // on first app render
  useEffect(
    () => {
      // loading services for searchbar and post creation form
      dispatch(loadServices());
      if (user) dispatch(loadConversations());
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

  /* when a message is dispatched, a timer is set after which
  the message is cleared and the modal disappears */
  useEffect(
    () => {
      if (infoMessages.length !== 0) setTimeout(() => dispatch(clearInfoModal()), 4000);
    },
    [infoMessages],
  );

  return (
    <div className={largeFontSize ? 'app app--large' : 'app'}>
      <Background />
      <Header />
      {!location.pathname.split('/').includes('conversation') && <Searchbar />}
      {infoMessages.length !== 0 && <InfoModal />}
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/inscription" element={<Registration />} />

          {/* posts */}
          <Route path="/annonce" element={<ResultPosts />} />
          <Route path="/annonce/:id" element={<DetailedPost />} />
          <Route path="/poster-une-annonce" element={<PrivateRoute element={<CreatePostForm />} />} />

          {/* profiles */}
          <Route path="/profil/:id" element={<PrivateRoute element={<UserProfile />} />} />
          <Route path="/mon-profil" element={<PrivateRoute element={<UserProfile />} />} />
          <Route path="/mon-profil/modifier" element={<PrivateRoute element={<UserProfileEdit />} />} />

          {/* conversation */}
          <Route path="/conversation" element={<PrivateRoute element={<ListConversation />} />} />
          <Route path="/conversation/:id" element={<PrivateRoute element={<PrivateConversation />} />} />

          {/* others */}
          <Route path="/mentions-légales" element={<LegalMentions />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* error 404 */}
          <Route path="/404" element={<NotFound />} />
          <Route path="/*" element={<Navigate to="/404" />} />

        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
