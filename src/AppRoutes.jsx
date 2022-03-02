import { Routes, Route } from "react-router-dom";

import App from "./App";
import Home from './pages/home/Home.jsx';
import Login from './pages/login/Login.jsx';

export default function AppRoutes() {

    return (
        <Routes>
            <Route path='/' element={<App />}>
                <Route index element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='*' element={<h1>NOT FOUND</h1>} />
            </Route>
        </Routes>
    );

}