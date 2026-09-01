import React from 'react';

export default function Home({ transacoes }) {
  const ganhos = transacoes
    .filter(t => t.tipo === 'ganho')
    .reduce((soma, t) => soma + Number(t.valor), 0);

  const despesas = transacoes
    .filter(t => t.tipo === 'despesa')
    .reduce((soma, t) => soma + Number(t.valor), 0);

  const investimentos = transacoes
    .filter(t => t.tipo === 'investimento')
    .reduce((soma, t) => soma + Number(t.valor), 0);

  const saldo = ganhos - (despesas + investimentos);

  return (
    <div>
      <div className="painel-saldo">

        <h3>Saldo Bancário: R$ {saldo.toFixed(2)}</h3>

        <p>Ganhos: R$ {ganhos.toFixed(2)} </p>
        <p>Despesas: R$ {despesas.toFixed(2)}</p>
        <p>Investimentos: R$ {investimentos.toFixed(2)}</p>
      </div>

      <h4>Conta Bancária</h4>
      
      {transacoes.length === 0 ? (
        <p>Nenhum lançamento cadastrado.</p>
      ) : (
        <ul className="lista">
          {transacoes.map((item) => (
            <li key={item.id} className={`item ${item.tipo}`}>
              <span>{item.descricao}</span>
              <strong>
                {item.tipo === 'ganho' ? '+' : '-'} R$ {Number(item.valor).toFixed(2)}
              </strong>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}