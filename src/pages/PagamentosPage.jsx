import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchPagamentos, handleAddPagamento, handleUpdateStatus } from '../services/pagamentoService';
import { fetchClienteById } from '../services/clienteService';
import { FaArrowLeft } from 'react-icons/fa';

function PagamentosPage() {
  const { clienteId } = useParams();
  const [nome, setNome] = useState('');
  const [pagamentos, setPagamentos] = useState([]);
  const [valor, setValor] = useState('');

  useEffect(() => {
    const getCliente = async () => {
      const cliente = await fetchClienteById(clienteId);
      setNome(cliente.nome);
    };

    const getPagamentos = async () => {
      const data = await fetchPagamentos(clienteId);
      setPagamentos(data);
    };

    getCliente();
    getPagamentos();
  }, [clienteId]);

  const handleAdd = async () => {
    await handleAddPagamento(clienteId, valor);
    setValor('');
    const data = await fetchPagamentos(clienteId);
    setPagamentos(data);
  };

  const handleUpdate = async (pagamentoId, novoStatus) => {
    await handleUpdateStatus(pagamentoId, novoStatus);
    const data = await fetchPagamentos(clienteId);
    setPagamentos(data);
  };

  const formatCurrency = (value) => {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  return (
    <div className="container mt-4 d-flex justify-content-center">
      <div className="col-md-8">
        <Link to="/" className="btn btn-secondary mb-4">
          <FaArrowLeft /> Voltar
        </Link>
        <h1 className="mb-4">Pagamentos do Cliente {nome}</h1>
        <ul className="list-group mb-4">
          {pagamentos.map(pagamento => (
            <li key={pagamento.id} className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <strong>Valor:</strong> {formatCurrency(pagamento.valor)} <br />
                <small>Status: {pagamento.status}</small>
              </div>
              {pagamento.status === 'Pendente' && (
                <div>
                  <button 
                    onClick={() => handleUpdate(pagamento.id, 'Pago')}
                    className="btn btn-success btn-sm me-2"
                  >
                    Marcar como Pago
                  </button>
                  <button 
                    onClick={() => handleUpdate(pagamento.id, 'Cancelado')}
                    className="btn btn-danger btn-sm"
                  >
                    Cancelar
                  </button>
                </div>
              )}
            </li>
          ))}
        </ul>
        <div className="card p-3">
          <h2 className="card-title mb-3">Adicionar Pagamento</h2>
          <div className="mb-3">
            <input
              type="number"
              className="form-control"
              placeholder="Valor"
              value={valor}
              onChange={e => setValor(e.target.value)}
            />
          </div>
          <button onClick={handleAdd} className="btn btn-primary">
            Adicionar Pagamento
          </button>
        </div>
      </div>
    </div>
  );
}

export default PagamentosPage;