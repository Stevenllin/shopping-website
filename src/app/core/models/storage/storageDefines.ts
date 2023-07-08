import { StorageKeysEnum, StorageTypesEnum } from '../../enums/storage';
/** 
 * Storage 組合
 */
export const StorageDefines: Readonly<Record<StorageKeysEnum, StorageTypesEnum>> = {
  /** 登入授權 (Access Token) */
  [StorageKeysEnum.Authorization]: StorageTypesEnum.Local,
  /** Username */
  [StorageKeysEnum.Username]: StorageTypesEnum.Local
}