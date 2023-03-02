import './styles.scss';
import aboutPicture from '../../../public/img/a-propos-picture.jpg';

export default function About() {
  return (
    <div className="about">
      <img className="about_picture" alt="logo" src={aboutPicture} />
      <div className="about_text">
        <h1 className="about_title">À propos de nous</h1>
        <p className="about_content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
      </div>
    </div>
  );
}

// TODO Add picture credit
