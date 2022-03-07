import './ProfileSearch.css';

export default function ProfileSearch() {

    return (
        <div id="search-container">
            <p>Insira o id de um perfil da Steam<br />para ver suas informações</p>
            <div id="search-field">
                <input type="text" />
                <button id="search-btn">Buscar</button>
            </div>
        </div>
    );

}