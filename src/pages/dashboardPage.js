import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/dashboardpage.css';
import '../firebase/firebase.js';
import firebaseService from '../firebase/firebase.js';




const DashboardPage = () => {

    const aviarios = [
        { id: 1, nome: 'Cria/Recria 1 - Ovonovo' },
        { id: 2, nome: 'Cria/Recria 3.1 - Ovonovo' },
        { id: 3, nome: 'Cria/Recria 3.2 - Ovonovo' }
    ];

    const tanques = [
        {id: 4, nome: 'Fase 1 - Oasis'},
        {id: 5, nome: 'Fase 2 - Oasis'},
        {id: 6, nome: 'Fase 3 - Oasis'}
    ];

   // const a = firebaseService.getDatabaseInfo();
   // console.log(a);
    return (
        <>
                <h1 className='main-header'>Dashboard</h1>
                <div className='cards-container'>
                    {aviarios.map(aviary => (
                        <div key={aviary.id} className="card">
                            <h2 className="card-title">
                            <Link to={`/dashboard/aviario/${aviary.id}`}>{aviary.nome}</Link>
                            </h2>
                        </div>
                    ))}
                </div>
                <div className='cards-container'>
                {tanques.map(tank => (
                        <div key={tank.id} className="card">
                            <h2 className="card-title">
                            <Link to={`/dashboard/tanque/${tank.id}`}>{tank.nome}</Link>
                            </h2>
                        </div>
                    ))}
                </div>
           
        </>
    );
};

export default DashboardPage;