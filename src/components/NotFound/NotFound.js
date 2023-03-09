import { useEffect, useState } from 'react';
import notFoundImg from '../../assets/img/notFoundImg.png';
import './styles.scss';

export default function NotFound() {
  const [randomText, setRandomText] = useState('');

  useEffect(() => {
    const phrases = [
      'Désolé, nous ne proposons pas encore d\'aide informatique.',
      'Oh non ! Vous êtes perdu(e) dans le labyrinthe de notre site ! Mais ne vous inquiétez pas, on va vous sortir de là !',
      'Désolé, il semblerait que vous vous soyez égaré(e) dans notre site. Mais vous êtes toujours au bon endroit pour trouver de l\'aide.',
      'Hmmm, cette page n\'est pas ici. Mais on vous promet qu\'on a beaucoup d\'autres astuces pour vous aider.',
      'Oups, vous êtes tombé(e) sur notre page 404. Mais pas d\'inquiétude, nous allons vous aider à trouver ce que vous cherchez.',
    ];
    const randomIndex = Math.floor(Math.random() * phrases.length);
    setRandomText(phrases[randomIndex]);
  }, []);

  return (
    <div className="not-found">
      <h1>Oops ! Page Non Trouvée</h1>
      <img src={notFoundImg} alt="helpers elders 404" className="not-found_img" />
      <p>{randomText}</p>
    </div>
  );
}
