import './styles.scss';
import { Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';
import Searchbar from '../Searchbar/Searchbar';
import Homepage from '../Homepage/Homepage';
import Footer from '../Footer/Footer';
import Background from '../Background/Background';
import Connexion from '../Connexion/Connexion';

function App() {
  return (
    <div className="app">
      <Background />
      <div className="wrapper">
        <Header />
        <Searchbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/connexion" element={<Connexion />} />
        </Routes>
        {/*
        Searchbar
        ToggleFontSizeBtn
        LastPostsList
        Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
