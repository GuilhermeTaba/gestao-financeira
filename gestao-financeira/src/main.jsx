import { StrictMode } from 'react'
import { createRoot} from 'react-dom/client'
import { Route, BrowserRouter, Routes } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Login from './components/login/login.jsx'
import Esqueceu from './components/esqueceu/esqueceu.jsx';
import Cadastro from './components/cadastro/cadastro.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/esqueceu' element={<Esqueceu/>}/>
      <Route path='/cadastro' element={<Cadastro/>}/>
    </Routes>
    </BrowserRouter>
    
  </StrictMode>,
)
