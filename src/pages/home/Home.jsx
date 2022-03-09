import ProfileSearch from '../../components/profileSearch/ProfileSearch.jsx';

import './Home.css';

export default function Home() {

    function toggleProfileSearch() {

        let containerELm = document.querySelector('#home-container');
        let classFn = containerELm.classList.contains('active') ? 'remove' : 'add';

        containerELm.classList[classFn]('active');

    }

    return (
        <div id="home-container">
            <div className="inner-container">
                <h1>Steam Project</h1>
                <ProfileSearch />
                <button id="access-btn" onClick={toggleProfileSearch}>Acessar</button>
            </div>
        </div>
    );

}