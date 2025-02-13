import api from '../api/api';

export const fetchClienteById = async (clienteId) => {
    const response = await api.get(`/clientes/${clienteId}`);
    return response.data;
  };

export const fetchClientes = async () => {
  try {
    const response = await api.get('/clientes');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar clientes:', error);
    throw error;
  }
};

export const handleAddCliente = async (nome, email) => {
  if (!nome || !email) {
    alert('Nome e Email são obrigatórios!');
    return;
  }
  try {
    await api.post('/clientes', { nome, email });
  } catch (error) {
    console.error('Erro ao adicionar cliente:', error);
    throw error;
  }
};