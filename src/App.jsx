import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ClientesPage from './pages/ClientesPage';
import PagamentosPage from './pages/PagamentosPage';
import Layout from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<ClientesPage />} />
          <Route path="/pagamentos/:clienteId" element={<PagamentosPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
