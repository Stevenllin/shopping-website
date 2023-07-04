import React, { useState, useEffect } from 'react';
import { PiShoppingCartSimpleBold } from 'react-icons/pi'
import { BsFillPersonFill } from 'react-icons/bs'
import { useDispatch } from 'react-redux';
import { setModalVisibleAction } from '../../../store/ui/actions';
import { ModalNamesEnum } from '../../../core/enums/ui/modals';

const Header: React.FC = () => {
  const [menuBarActive, setMenuBarActive] = useState<boolean>(false);
  const dispatch = useDispatch();
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

  /** 
   * @description 開啟「會員登入」Modal
   */
  const handleOpenLoginModal = () => {
    dispatch(setModalVisibleAction(ModalNamesEnum.MemberLoginModal, true))
  }

  return (
    <header>
      <nav className="navbar fixed-top">
        <div className="context">
          <img src={require('../../../../assets/img/logo.png')} className='logo' alt='logo' />
          <div className="d-flex">
            <button type="button" className="me-3">
              <BsFillPersonFill className="icons" onClick={handleOpenLoginModal} />
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
