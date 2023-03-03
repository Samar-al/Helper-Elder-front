/* eslint-disable max-len */
import './styles.scss';
import aboutPicture from '../../../public/img/a-propos-picture.jpg';

export default function About() {
  return (
    <div className="about">
      <img className="about_picture" alt="logo" src={aboutPicture} />
      <div className="about_text">
        <h1 className="about_title">À propos de nous</h1>
        <p className="about_content"> Notre site s’adresse autant aux particuliers qu’aux professionnels de la santé.
          Il est conçu pour que des personnes âgées à mobilité réduite ou ayant un besoin spécifique dans
          le cadre des services proposés sur le site puissent rentrer en contact/

          Les “Helpers” (particuliers et/ou professionnels) peuvent être des étudiants, des professionnels de santé,
          des personnes sans qualification particulière. Ils peuvent proposer leurs services pour venir en aide aux Elders.
          Les modalités de mise en œuvre des différentes prestations seront à définir entre utilisateurs via la messagerie.
        </p>
      </div>
    </div>
  );
}

// TODO Add picture credit
