import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchClientes, handleAddCliente } from '../services/clienteService';

function ClientesPage() {
  const [clientes, setClientes] = useState([]);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const getClientes = async () => {
      const data = await fetchClientes();
      setClientes(data);
    };
    getClientes();
  }, []);

  const handleAdd = async () => {
    await handleAddCliente(nome, email);
    setNome('');
    setEmail('');
    const data = await fetchClientes();
    setClientes(data);
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Clientes</h1>
      <ul className="list-group mb-4">
        {clientes.map(cliente => (
          <li key={cliente.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <strong>{cliente.nome}</strong> - {cliente.email}
            </div>
            <Link to={`/pagamentos/${cliente.id}`} className="btn btn-info btn-sm">
              Ver Pagamentos
            </Link>
          </li>
        ))}
      </ul>
      <div className="card p-3">
        <h2 className="card-title mb-3">Adicionar Cliente</h2>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Nome"
            value={nome}
            onChange={e => setNome(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          />
        </div>
        <button onClick={handleAdd} className="btn btn-primary">
          Adicionar
        </button>
      </div>
    </div>
  );
}

export default ClientesPage;