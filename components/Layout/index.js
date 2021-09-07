import React from 'react';

import Header from '../Header';
import Footer from '../Footer';

const Layout = ({ children }) => {
  return (
    <main className="bgPrincipal">
      <Header />
      <section className="container mx-auto">{children}</section>
      <Footer />
    </main>
  );
};

export default Layout;
