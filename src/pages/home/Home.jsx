import ProfileSearch from '../../components/profileSearch/ProfileSearch.jsx';

import './Home.css';

export default function Home() {

    return (
        <div id="home-container">
            <div className="inner-container">
                <h1>Steam Project</h1>
                <ProfileSearch />
                <button id="access-btn">Acessar</button>
            </div>
        </div>
    );

}