import "../assets/styles/loginpage.css";
import React, { useState } from "react";
import logoNav from "../assets/images/smartrural_logo_named_white.png";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showErrorModal, setShowErrorModal] = useState(false);
  
  const auth = getAuth();
  const navigate = useNavigate();

  async function handleSignIn(e) {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User logged in:", user);
        navigate("/dashboard");
      })
      .catch((error) => {
        console.error("Login error:", error);
        setShowErrorModal(true);
      });
  }

  function closeErrorModal() {
    setShowErrorModal(false);
  }

  function handleKeyPress(e) {
    if (e.key === "Enter") {
      handleSignIn(e);
    }
  }

  return (
    <>
      <div className="elements">
        <img className="img-logo-login" src={logoNav} alt="logo" />
      </div>
      <div className="login-form">
        <div className="form-title">
          <h1>LOGIN</h1>
        </div>
        <div className="email">
          <div className="form-label">
            <label>EMAIL</label>
          </div>
          <div>
            <input
              type="email"
              className="form-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyPress={handleKeyPress}
            />
          </div>
        </div>
        <div className="password">
          <div className="form-label">
            <label>SENHA</label>
          </div>
          <div>
            <input
              type="password"
              className="form-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={handleKeyPress}
            />
          </div>
        </div>
        <div>
          <button type="submit" className="btn btn-primary" onClick={handleSignIn}>
            ENTRAR
          </button>
        </div>
      </div>

      {showErrorModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Erro ao logar</h2>
            <button className="btn btn-red" onClick={closeErrorModal}>OK</button>
          </div>
        </div>
      )}
    </>
  );
}

export default LoginPage;