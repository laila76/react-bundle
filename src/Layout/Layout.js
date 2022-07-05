import React from 'react';
import CardInformation from '../components/Card/CardInformation';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

const Layout = ({children}) => {
    return (
      <div className="p-10">
        <Navigation />
        <main className='flex'>
          <CardInformation/>
          <div className='p-10'>
            {children}
          </div>
        </main>
        <Footer />
      </div>
    );
}

export default Layout;
