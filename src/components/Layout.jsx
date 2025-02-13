import React from 'react';

function Layout({ children }) {
  return (
    <div className="d-flex flex-column min-vh-100">
      <main className="flex-grow-1 d-flex justify-content-center align-items-center">
        {children}
      </main>
    </div>
  );
}

export default Layout;