import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import './ProfileSearch.css';

export default function ProfileSearch() {

    const navigate = useNavigate();
    const [requestSuccess, setRequestSuccess] = useState(-1);

    async function updateHistory() {

        try {

            let res = await axios.get('http://localhost:5001');

            setRequestSuccess(+(res.status == 200));

        } catch (err) {

            setRequestSuccess(false);

            console.error(err);

        }

    }

    return (
        <div id="search-container">
            <p>Insira o id de um perfil da Steam<br />para ver suas informações</p>
            <div id="search-field">
                <input type="text" />
                <button id="search-btn" onClick={updateHistory}>Buscar</button>
            </div>
            { requestSuccess != -1 ? (requestSuccess ? <div>Sucesso</div> : <div>Falha</div>) : '' }
        </div>
    );

}