import { Outlet } from 'react-router-dom';

import './App.css';

function App() {

    return (
        <main>
            <div id="main-container">
                <div id="main-inner-container">
                    <Outlet />
                </div>
            </div>
        </main>
    );
}

export default App;
