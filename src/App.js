import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './pages/loginPage';
import DashboardPage from './pages/dashboardPage';
import AviaryDetailsPage from './pages/aviaryDetailsPage';
import TankDetailsPage from './pages/tankDetailsPage';
import LogoutPage from './pages/logoutPage'
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import './firebase/firebase';
import loadingGif from './assets/images/loading.gif'

import './assets/styles/App.css';

function App() {


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
    
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    if (loading) {
        return (
            <div style={{width:'100%', height:'100vh', display:'flex', justifyContent:"center", alignItems:'center'}}>
                <img src={loadingGif} alt='Loading...' />
            </div>
        );
    }

    return (
        <Router>
            <div className="container">
                <Routes>
                    <Route path="/login" element={!user ? <LoginPage /> : <Navigate to="/dashboard" />} />
                    <Route path="/dashboard" element={user ? <DashboardPage /> : <Navigate to="/login" />} />
                    {aviarios.map(aviary => (
                        <Route key={aviary.id} path={`/dashboard/aviario/${aviary.id}`} element={user ? <AviaryDetailsPage aviaryId={aviary.id}/> : <Navigate to="/dashboard" />} />
                    ))}       
                    {tanques.map(tank => (
                        <Route key={tank.id} path={`/dashboard/tanque/${tank.id}`} element={user ? <TankDetailsPage tankId={tank.id}/> : <Navigate to="/dashboard" />} />
                    ))}
                    <Route path="/logout" element={user ? <LogoutPage /> : <Navigate to="/login" />} />
                    <Route path="*" element={<Navigate to="/login" />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
