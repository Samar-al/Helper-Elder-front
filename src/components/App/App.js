import './styles.scss';
// import TestCharte from '../TestCharte/testCharte';
import Header from '../Header/Header';
import Intro from '../Intro/Intro';
import Searchbar from '../Searchbar/Searchbar';
import ServiceCards from '../ServiceCards/ServiceCards';

function App() {
  return (
    <div className="app">
      <Header />
      <Intro />
      <Searchbar />
      <ServiceCards />
      {/*
      Searchbar
      ToggleFontSizeBtn
      LastPostsList
      Footer */}
    </div>
  );
}

export default App;
