import './styles.scss';
import background from '../../../public/background_intro.png';

export default function Intro() {
  return (
    <div className="intro">
      <img src={background} alt="background" />
      <div className="content">
        <h1 className="intro_title">HELPERS-ELDERS</h1>
        <p className="intro_content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    </div>
  );
}
