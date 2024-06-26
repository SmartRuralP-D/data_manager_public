import React, { useEffect } from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from "react-router-dom";

function LogoutPage() {
    const auth = getAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const disconnect = async () => {
            try {
                console.log(auth)
                await signOut(auth);
                navigate("/login");
            } catch (error) {
                console.log("Falha ao desconectar.", error);
            }
        };

        disconnect();
    }, [auth, navigate]);

    return (
        <div>
            Desconectando...
        </div>
    );
}

export default LogoutPage;
