/* eslint-disable max-len */
import './styles.scss';
import aboutPicture from '../../../public/img/a-propos-picture.jpg';

export default function About() {
  return (
    <div className="about">
      <div className="about_picture">
        <img alt="logo" src={aboutPicture} />
      </div>
      <div className="about_text">
        <h1 className="about_title">À propos de nous</h1>
        <div className="about_content">
          <p>
            Ce site a pour but de faciliter les échanges entre les personnes âgées et des personnes proposant leur aide.
          </p>
          <p>
            Nous l'avons conçu afin que des personnes âgées à mobilité réduite, ou ayant un
            besoin spécifique (compagnie, toilette, etc.), puissent rentrer en contact avec des Helpers
            grâce à un système d'annonces et de messagerie.
          </p>
          <p>
            Un système que nous avons également mis à disposition des Helpers, particuliers ou professionnels de santé, pour qu'ils puissent
            par eux même offrir leurs différents services.
          </p>
        </div>
      </div>
    </div>
  );
}
