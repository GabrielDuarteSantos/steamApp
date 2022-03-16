import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

import './index.css';

let mainElm = (
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

let rootElm = document.getElementById('root');

ReactDOM.render(mainElm, rootElm);
