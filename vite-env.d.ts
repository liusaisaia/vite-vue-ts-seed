/*
 * @Descripttion:
 * @Author: LiuSaiSai
 * @Date: 2023-05-11 23:37:15
 * @LastEditors: Liu SaiSai
 */
/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
