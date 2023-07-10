import { StorageKeysEnum } from '../enums/storage';
import { GetSingleProductResp } from '../../api/models/get/getSingleProduct';
import storageService from './storageService';
import store from '../../store';
import { ModalNamesEnum } from '../enums/ui/modals';
import { setModalVisibleAction } from '../../store/ui/actions';
import { executeAddProductCartAction } from '../../store/features/cart/actions';

/**
 * @description 處理視窗滾動至目標 Section
 * @param event event object
 * @param sectionId Section Id
 * @param delay 延遲時間
*/
const handleWindowScrollToTargetSection = (event: React.SyntheticEvent | null, sectionId: string, delay: number = 0) => {
  if (event) event.preventDefault();
  /** 取得 nav 的元素 */
  const headerNavElem = document.getElementsByTagName('nav')[0];
  /** 取得 nav 的高度 top */
  const headerHeight = headerNavElem.offsetHeight;
  /** 取得目標的區塊 */
  const targetSection = document.getElementById(sectionId);
  /** 取得目標的區塊裡的 title 元素 */
  const targetSectionTitle = targetSection?.querySelector('.section-title');
  if (targetSectionTitle) {
    /** 取得 title 的 margin bottom 大小 */
    const targetSectionTitleMarginBottom = parseInt(window.getComputedStyle(targetSectionTitle).marginBottom);
    const offsetY = (window.scrollY + targetSectionTitle.getBoundingClientRect().top) - (headerHeight + targetSectionTitleMarginBottom);
    window.scrollTo({ top: offsetY });
  } else {
    window.scrollTo({ top: 0 });
  }
}

/**
 * @description 加入購物車
 * 
 */
const handleAddProductToCart = (product: GetSingleProductResp) => {
  const auth = storageService.getItem(StorageKeysEnum.Authorization);
  if (!auth) {
    /** 開啟提醒 Modal */
    store.dispatch(setModalVisibleAction(ModalNamesEnum.RemindModal, true))
  } else {
    store.dispatch(executeAddProductCartAction(product))
  }
}

/** 
 * @description 執行 Logout
 */
const handleExecuteLogout = () => {
  /** 取得 token */
  const token = storageService.getItem(StorageKeysEnum.Authorization);
  if (token) {
    /** 移除 token */
    storageService.removeItem(StorageKeysEnum.Authorization);
    /** 移除個人資料 */
    storageService.removeItem(StorageKeysEnum.Username);
    /** 移除購物車資料 */
    // storageService.removeItem(StorageKeysEnum.Cart);
    /** 重新整理頁面 */
    window.location.reload()
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  handleWindowScrollToTargetSection,
  handleExecuteLogout,
  handleAddProductToCart
}