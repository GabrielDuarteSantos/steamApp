import { Routes, Route } from 'react-router-dom';

import Home from './pages/home/Home.jsx';

import './App.css';

function App() {

    return (
        <main>
            <div id="main-container">
                <div id="main-inner-container">
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='*' element={<h1>NOT FOUND</h1>} />
                    </Routes>
                </div>
            </div>
        </main>
    );
}

export default App;
