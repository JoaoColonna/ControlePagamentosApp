# Controle de Pagamentos Front-End

Este é o front-end da aplicação de controle de pagamentos, desenvolvido com React e Vite. A aplicação permite gerenciar clientes e seus pagamentos.

## Tecnologias Utilizadas

- React
- Vite
- Axios
- React Router
- Bootstrap
- React Icons

## Estrutura do Projeto

- `src/`
  - `api/`
    - `api.js`: Configuração do Axios para chamadas à API.
  - `components/`
    - `Layout.jsx`: Componente de layout para a aplicação.
  - `pages/`
    - `ClientesPage.jsx`: Página para gerenciar clientes.
    - `PagamentosPage.jsx`: Página para gerenciar pagamentos de um cliente específico.
  - `services/`
    - `clienteService.jsx`: Serviço para operações relacionadas a clientes.
    - `pagamentoService.jsx`: Serviço para operações relacionadas a pagamentos.
  - `App.jsx`: Componente principal da aplicação.
  - `main.jsx`: Ponto de entrada da aplicação.
  - `index.css`: Estilos globais da aplicação.

## Instalação

1. Clone o repositório:

   ```sh
   git clone https://github.com/seu-usuario/controle-pagamentos-front.git
   ```

2. Navegue até o diretório do projeto:

   ```sh
   cd controle-pagamentos-front
   ```

3. Instale as dependências:

   ```sh
   npm install
   # ou
   yarn install
   ```

## Configuração

1. Crie um arquivo .env na raiz do projeto e adicione a URL base da API:

   ```env
   VITE_API_BASE_URL=http://localhost:5058/api
   ```

## Executando a Aplicação

1. Inicie o servidor de desenvolvimento:

   ```sh
   npm run dev
   # ou
   yarn dev
   ```

2. Abra o navegador e acesse `http://localhost:3000`.

## Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento.
- `npm run build`: Compila a aplicação para produção.
- `npm run preview`: Visualiza a aplicação compilada.
- `npm run lint`: Executa o linter para verificar problemas no código.
