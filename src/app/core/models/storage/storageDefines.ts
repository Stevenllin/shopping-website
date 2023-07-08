import { StorageKeysEnum, StorageTypesEnum } from '../../enums/storage';
/** 
 * Storage 組合
 */
export const StorageDefines: Readonly<Record<StorageKeysEnum, StorageTypesEnum>> = {
  /** 登入授權 (Access Token) */
  [StorageKeysEnum.Authorization]: StorageTypesEnum.Local,
  /** 使用者 Username */
  [StorageKeysEnum.Username]: StorageTypesEnum.Local,
  /** 購物車 Cart */
  [StorageKeysEnum.Cart]: StorageTypesEnum.Local
}