import React from 'react';

const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <img src={require('../../../../assets/img/logo.png')} className='logo' alt='logo' />
      </nav>
    </header>
  )
}

export default Header;
