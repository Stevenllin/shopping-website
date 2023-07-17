import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/types';
import { PiShoppingCartSimpleBold } from 'react-icons/pi'
import { BsFillPersonFill } from 'react-icons/bs';
import { AiOutlineLogout } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { setModalVisibleAction } from '../../../store/ui/actions';
import { ModalNamesEnum } from '../../../core/enums/ui/modals';
import commonService from '../../../core/services/commonService';
import { ROUTES } from '../../../core/router/paths';

const Header: React.FC = () => {
  const routerLocation = useLocation();
  const routerHistory = useHistory();
  const dispatch = useDispatch();
  /** 啟用/關閉 menu bar */
  const [menuBarActive, setMenuBarActive] = useState<boolean>(false);
  /** 購物車數量 */
  const [productsCount, setProductsCount] = useState<number>(0);
  /** 取得所有的類別 */
  const categories = useSelector((state: RootState) => state.common.category);
  /** 取得使用者 token */
  const authState = useSelector((state: RootState) => state.features.login.token);
  /** 取得使用者購物車 */
  const carts = useSelector((state: RootState) => state.features.cart.products);

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
   * @description 計算購物車數量
   */
  useEffect(() => {
    if (carts) {
      const counts: number = carts.reduce((accumulator, currentValue) => accumulator + currentValue.quantity, 0)
      setProductsCount(counts)
    }
  }, [carts])

  /** 
   * @description 開啟「會員登入」Modal
   */
  const handleOpenLoginModal = () => {
    dispatch(setModalVisibleAction(ModalNamesEnum.MemberLoginModal, true))
  }

  /** 
   * @description 導去結帳畫面
   */
  const handleGoToPayProccess = () => {
    /** 未登入，跳出窗口 */
    if (!authState) dispatch(setModalVisibleAction(ModalNamesEnum.RemindModal, true))
    /** 已登入，導向結帳畫面 */
    if (authState) routerHistory.push(ROUTES.PAY_CONFIRMINFO);
  }

  return (
    <header>
      {/** navbar section */}
      <nav className={'navbar fixed-top navbar-expand' + (menuBarActive ? ' header-nav-slide-out' : '')}>
        <div className="context">
          <img src={require('../../../../assets/img/logo.png')} className='logo' alt='logo' />
          <div className="d-flex header-icons-container">
            {/** 登入 icons */}
            {
              authState === '' && (
                <button type="button" className="me-3">
                  <BsFillPersonFill className="icons-white icons-sm" onClick={handleOpenLoginModal} />
                </button>
              )
            }
            {/** 登出 icons */}
            {
              authState !== '' && (
                <button type="button" className="me-3" onClick={commonService.handleExecuteLogout}>
                  <AiOutlineLogout className="icons-white icons-sm" />
                </button>
              )
            }
            {/** 購物車 icons */}
            <button type="button" onClick={handleGoToPayProccess}>
              <PiShoppingCartSimpleBold className="icons-white icons-sm" />
            </button>
            {/** 購物車數量 */}
            {
              authState !== '' && (
                <div className="header-cart">
                  <span>{productsCount}</span>
                </div>
              )
            }
          </div>
        </div>
      </nav>
      {/** menubar section */}
      {
        routerLocation.pathname.includes(ROUTES.HOME) && (
          <div className="menu-bar">
            <div id="menu-bar" className={'container' + (menuBarActive ? ' menu-bar-slide-in' : '')}>
              <ul>
                {categories.map((source) => (
                  <li key={source}>
                    <a href="/#" onClick={(event) => commonService.handleWindowScrollToTargetSection(event, source)}>
                      {source.toUpperCase()}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )
      }
    </header>
  )
}

export default Header;
