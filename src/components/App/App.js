import './styles.scss';
import { Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';
import Searchbar from '../Searchbar/Searchbar';
import Homepage from '../Homepage/Homepage';
import Footer from '../Footer/Footer';
import Intro from '../Intro/Intro';

function App() {
  return (
    <div className="app">
      <Header />
      <Intro />
      <Searchbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
      {/*
      Searchbar
      ToggleFontSizeBtn
      LastPostsList
      Footer */}
      <Footer />
    </div>
  );
}

export default App;
