import React, { useState } from 'react';
import './esqueceu.css';

import { Link } from 'react-router-dom';
export default function Esqueceu({ onBack }) {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    if (!email) {
      setError('Por favor, insira seu email.');
      return;
    }

    if (!validateEmail(email)) {
      setError('Por favor, insira um email válido.');
      return;
    }

    setLoading(true);
    
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setEmail('');
      
      // Reseta a mensagem de sucesso após 5 segundos
      setTimeout(() => {
        setSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="page-container">
      {/* Lado Esquerdo - Recuperação de Senha */}
      <div className="forgot-password-section">
        <div className="forgot-password-card">
            <Link to="/">← Voltar</Link>

          <div className="forgot-password-header">
            <div className="logo">
              <span className="logo-icon">💰</span>
            </div>
            <h1>Recuperar Senha</h1>
            <p className="subtitle">Insira seu email para receber um link de recuperação</p>
          </div>

          {success && (
            <div className="success-message">
              <p>✓ Email de recuperação enviado com sucesso! Verifique sua caixa de entrada.</p>
            </div>
          )}

          {error && (
            <div className="error-message">
              <p>✗ {error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="forgot-password-form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={loading || success}
              />
              <span className="help-text">
                Enviaremos um link de recuperação para este endereço de email.
              </span>
            </div>

            <button 
              type="submit"
              className="submit-btn"
              disabled={loading || success}
            >
              {loading ? (
                <>
                  <span className="spinner"></span>
                  Enviando...
                </>
              ) : (
                'Enviar Link de Recuperação'
              )}
            </button>
          </form>

          <div style={{
            textAlign: 'center',
            marginTop: '20px',
            fontSize: '14px',
            color: '#666'
          }}>
           

          </div>
        </div>


      </div>

      {/* Lado Direito - Imagem */}
      <div className="image-section">
        <img src="./img/despesas.png" alt="Recuperar senha" />
      </div>
    </div>
  );
}