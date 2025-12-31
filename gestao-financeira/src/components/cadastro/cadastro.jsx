import React, { useState } from 'react';
import './cadastro.css';
import { Link } from 'react-router-dom';

export default function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
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
    
    if (!nome.trim()) {
      setError('Por favor, insira seu nome completo.');
      return;
    }

    if (!email) {
      setError('Por favor, insira seu email.');
      return;
    }

    if (!validateEmail(email)) {
      setError('Por favor, insira um email válido.');
      return;
    }

    if (!password) {
      setError('Por favor, insira uma senha.');
      return;
    }

    if (password.length < 6) {
      setError('A senha deve ter no mínimo 6 caracteres.');
      return;
    }

    if (password !== confirmPassword) {
      setError('As senhas não coincidem.');
      return;
    }

    setLoading(true);
    
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setNome('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      
      // Reseta a mensagem de sucesso após 5 segundos
      setTimeout(() => {
        setSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="page-container">
      {/* Lado Esquerdo - Cadastro */}
      <div className="cadastro-section">
        <div className="cadastro-card">
          <Link to="/">← Voltar</Link>

          <div className="cadastro-header">
            <div className="logo">
              <span className="logo-icon">💰</span>
            </div>
            <h1>Criar Conta</h1>
            <p className="subtitle">Junte-se ao FinFamily hoje</p>
          </div>

          {success && (
            <div className="success-message">
              <p>✓ Conta criada com sucesso! Bem-vindo ao FinFamily!</p>
            </div>
          )}

          {error && (
            <div className="error-message">
              <p>✗ {error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="cadastro-form">
            <div className="form-group">
              <label htmlFor="nome">Nome Completo</label>
              <input
                type="text"
                id="nome"
                placeholder="João Silva"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
                disabled={loading || success}
              />
            </div>

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
                disabled={loading || success}
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirmar Senha</label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                disabled={loading || success}
              />
            </div>

            <button 
              type="submit"
              className="submit-btn"
              disabled={loading || success}
            >
              {loading ? (
                <>
                  <span className="spinner"></span>
                  Criando conta...
                </>
              ) : (
                'Criar Conta'
              )}
            </button>
          </form>

          <div className="form-toggle">
            <p>
              Já tem conta? <Link to="/">Faça login</Link>
            </p>
          </div>
        </div>

        <div className="cadastro-footer">
          <p>© 2025 FinFamily. Todos os direitos reservados.</p>
        </div>
      </div>

      {/* Lado Direito - Imagem */}
      <div className="image-section">
        <img src="./img/despesas.png" alt="Criar conta" />
      </div>
    </div>
  );
}