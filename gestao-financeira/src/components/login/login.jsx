import React, { useState } from 'react';
import './login.css';
import { Link } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert(isLogin ? 'Login realizado!' : 'Cadastro realizado!');
    }, 1500);
  };

  return (
    <div className="page-container">
      {/* Lado Esquerdo - Login */}
      <div className="login-section">
        <div className="login-card">
          <div className="login-header">
            <div className="logo">
              <span className="logo-icon">💰</span>
            </div>
            <h1>FinFamily</h1>
            <p className="subtitle">Gestão Financeira em Família</p>
          </div>

          <div className="login-form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={loading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Senha</label>
              <input
                type="password"
                id="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={loading}
              />
            </div>

            {isLogin && (
                <Link to="/esqueceu">Esqueceu senha?</Link>
            )}

            <button 
              onClick={handleSubmit}
              className="submit-btn"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="spinner"></span>
                  {isLogin ? 'Entrando...' : 'Criando conta...'}
                </>
              ) : isLogin ? (
                'Entrar'
              ) : (
                'Criar Conta'
              )}
            </button>
          </div>

          <div className="form-toggle">
            <p>
              {isLogin ? 'Não tem conta?' : 'Já tem conta?'}{' '}
              {isLogin ? (
                <Link to="/cadastro">Cadastrar?</Link>
                
              ) : (
                <button
                  type="button"
                  onClick={() => setIsLogin(!isLogin)}
                  className="toggle-btn"
                  disabled={loading}
                >
                  Faça login
                </button>
              )}
            </p>
          </div>
        </div>

        <div className="login-footer">
          <p>© 2025 FinFamily. Todos os direitos reservados.</p>
        </div>
      </div>

      {/* Lado Direito - Imagem */}
      <div className="image-section">
       
          <img src="./img/despesas.png" alt="" />
        
      </div>
    </div>
  );
}