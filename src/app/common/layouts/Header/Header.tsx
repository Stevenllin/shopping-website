import React, { useState, useEffect } from 'react';
import { PiShoppingCartSimpleBold } from 'react-icons/pi'
import { BsFillPersonFill } from 'react-icons/bs'

const Header: React.FC = () => {
  const [menuBarActive, setMenuBarActive] = useState<boolean>(false);
  console.log('menuBarActive', menuBarActive);

  /**
   * @description 處理視窗滾動控制 Menu 顯示/隱藏
   */
   useEffect(() => {
    window.addEventListener('scroll', () => {
      const indexShowcaseSectionMenu = document.getElementsByClassName('menu')[0];
      if (indexShowcaseSectionMenu) {
        const active = indexShowcaseSectionMenu.getBoundingClientRect().top < 0;
        setMenuBarActive(active);
      } else {
        setMenuBarActive(false);
      }
    });
  }, []);

  return (
    <header>
      <nav className="navbar fixed-top">
        <div className="context">
          <img src={require('../../../../assets/img/logo.png')} className='logo' alt='logo' />
          <div className="d-flex">
            <button type="button" className="me-3">
              <BsFillPersonFill className="icons" />
            </button>
            <button type="button">
              <PiShoppingCartSimpleBold className="icons" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header;
