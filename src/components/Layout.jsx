import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ location, children }) => {

  const isForm = location.pathname === '/login' || location.pathname === '/register';

  return (
    <div className='App'>
      <Header isForm={isForm} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
