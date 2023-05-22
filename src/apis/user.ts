/*
 * @Descriptions:
 * @Author: LiuSaiSai
 * @Date: 2023-05-11 23:42:29
 * @LastEditors: Liu SaiSai
 */
import HttpClient from '../common/utils/axios'
import type { ListModel, ListParams } from './model/userModel'

export function getList(params: ListParams) {
  return HttpClient.get<ListModel>('/list', { params })
}
