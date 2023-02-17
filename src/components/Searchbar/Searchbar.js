import './styles.scss';

export default function Searchbar() {
  return (
    <div className="searchbar">
      <div className="searchbar_label">Je cherche une</div>
      <form className="searchbar_form">
        <select className="searchbar_form_type">
          <option>-- type d'annonce --</option>
          <option>Offre</option>
          <option>Demande</option>
        </select>
        <div className="searchbar_form_service">
          <div className="searchbar_form_service_select">
            <select>
              <option>Type de service</option>
            </select>
            <div className="searchbar_form_service_select_over" />
          </div>
          <div className="searchbar_form_service_options">
            <label htmlFor="compagnie">
              <input type="checkbox" id="compagnie" />Compagnie
            </label>
            <label htmlFor="course">
              <input type="checkbox" id="course" />Courses
            </label>
            <label htmlFor="toilette">
              <input type="checkbox" id="toilette" />Toilette
            </label>
          </div>
        </div>
        {/* <div className="searchbar_form_service">
          <select>
            <option>Type de service</option>
          </select>
          <div className="searchbar_form_service_options">
            <label htmlFor="compagnie">
              <input type="checkbox" id="compagnie" />Compagnie
            </label>
            <label htmlFor="course">
              <input type="checkbox" id="course" />Courses
            </label>
            <label htmlFor="toilette">
              <input type="checkbox" id="toilette" />Toilette
            </label>
          </div>
        </div> */}
        à
        <input type="text" className="searchbar_form_adress" placeholder="Code postal" />
        <button type="submit">Rechercher</button>
      </form>
    </div>
  );
}
