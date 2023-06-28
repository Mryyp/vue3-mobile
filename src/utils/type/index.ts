// 后端统一返回数据模型
export interface TResponseData<T> {
  ret: 0 | number // 0 => ok
  msg: string
  data: T
}

// 后端分页数据模型
export interface PageData<T = any> {
  total: 0 | number
  records: Array<T>
}
