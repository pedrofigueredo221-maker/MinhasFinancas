import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function NovoLancamento({ onAdicionar }) {
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');
  const [tipo, setTipo] = useState('ganho');

  const navigate = useNavigate();

  const handleSalvar = (e) => {
    e.preventDefault();

    if (!descricao || !valor) {
      alert('Por favor, preencha todos os campos!');
      return;
    }

    onAdicionar({ descricao, valor: parseFloat(valor), tipo });
    navigate('/');
  };

  return (
    <div className="formulario">
      <h2>Novo Lançamento</h2>
      <form onSubmit={handleSalvar}>
        <div className="campo">
          <label>Descrição:</label>
          <input 
            type="text" 
            placeholder="Ex: Mercado, Conta de Luz..."
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />
        </div>

        <div className="campo">
          <label>Valor (R$):</label>
          <input 
            type="number" 
            step="0.01" 
            placeholder="0.00"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
          />
        </div>

        <div className="campo">
          <label>Tipo:</label>
          <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
            <option value="ganho">Ganho (Entrada)</option>
            <option value="despesa">Despesa (Saída)</option>
            <option value="investimento">Investimento (Saída)</option>
          </select>
        </div>

        <button type="submit" className="btn-salvar">Salvar</button>
      </form>
    </div>
  );
}