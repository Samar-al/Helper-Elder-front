import './styles.scss';
// import TestCharte from '../TestCharte/testCharte';
import Header from '../Header/Header';
import Intro from '../Intro/Intro';
import Searchbar from '../Searchbar/Searchbar';

function App() {
  return (
    <div className="app">
      <Header />
      <Intro />
      <Searchbar />
      {/*
      Searchbar
      ToggleFontSizeBtn
      ServiceCard
      LastPostsList
      Footer */}
    </div>
  );
}

export default App;
