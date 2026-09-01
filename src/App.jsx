import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import NovoLancamento from './pages/NovoLancamento';
import './App.css';

export default function App() {
  const [transacoes, setTransacoes] = useState([
    { id: 1, descricao: 'Salário', valor: 2000, tipo: 'ganho' },
    { id: 2, descricao: 'Trufas', valor: 800, tipo: 'ganho' },
    { id: 3, descricao: 'Amortizar parcela do carro', valor: 300, tipo: 'investimento' },
    { id: 4, descricao: 'Reserva de emergência', valor: 250, tipo: 'investimento' },
    { id: 5, descricao: 'Parcela do carro', valor: 556, tipo: 'despesa' },
    { id: 6, descricao: 'Luxos / Gastos pessoais', valor: 500, tipo: 'despesa' },
    { id: 7, descricao: 'Gasolina mensal', valor: 400, tipo: 'despesa' },
    { id: 8, descricao: 'Imprevistos do mês', valor: 300, tipo: 'despesa' },
    { id: 9, descricao: 'Cartão', valor: 206.91, tipo: 'despesa' },
    { id: 10, descricao: 'Corte de cabelo', valor: 50, tipo: 'despesa' },
    { id: 11, descricao: 'Corte de cabelo', valor: 50, tipo: 'despesa' },
    { id: 12, descricao: 'Plano da claro', valor: 30, tipo: 'despesa' }
    

  ]);

  const adicionarTransacao = (novaTransacao) => {
    setTransacoes([...transacoes, { ...novaTransacao, id: Date.now() }]);
  };

  return (
    <BrowserRouter>
      <div className="container">
        <header className="cabecalho">
          <h1>Pedro | Minhas Finanças</h1>
          <nav>
            <Link to="/" className="link">Voltar</Link>
            <Link to="/novo" className="link btn-novo">Adicionar Lançamento</Link>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home transacoes={transacoes} />} />
          <Route path="/novo" element={<NovoLancamento onAdicionar={adicionarTransacao} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}