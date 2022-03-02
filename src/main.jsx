import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import AppRoutes from './AppRoutes';

import './index.css';

let mainElm = (
    <BrowserRouter>
        <AppRoutes />
    </BrowserRouter>
);

let rootElm = document.getElementById('root');

ReactDOM.render(mainElm, rootElm);
