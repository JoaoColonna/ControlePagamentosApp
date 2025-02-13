import api from '../api/api';

export const fetchPagamentos = async (clienteId) => {
  try {
    const response = await api.get(`/pagamentos?clienteId=${clienteId}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar pagamentos:', error);
    throw error;
  }
};

export const handleAddPagamento = async (clienteId, valor) => {
  if (!valor) {
    alert('Valor é obrigatório!');
    return;
  }
  try {
    await api.post('/pagamentos', { clienteId, valor });
  } catch (error) {
    console.error('Erro ao adicionar pagamento:', error);
    throw error;
  }
};

export const handleUpdateStatus = async (pagamentoId, novoStatus) => {
  try {
    await api.put(`/pagamentos/${pagamentoId}/status`, {status: novoStatus});
  } catch (error) {
    console.error('Erro ao atualizar status:', error);
    throw error;
  }
};