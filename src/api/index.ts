import http from '@/utils/request'
// import { PageData } from '@/utils/type/index'
// import { UserInfo } from '@/types/user'

class UserApi {
  /**
   * 首页
   * @param params 查询参数
   * @returns
   * <PageData<UserInfo>>
   */
  getHome(params: object) {
    return http.request({
      url: '/bus/home/my',
      method: 'GET',
      params,
    })
  }

  /**
   * 详情
   * @param id 查询参数
   * @returns
   * <PageData<UserInfo>>
   */
  busInfo(id: number) {
    return http.request({
      url: `/bus/home/busInfo/${id}`,
      method: 'GET',
    })
  }

  /**
   * 确认完成
   * @param id 查询参数
   * @returns
   * <PageData<UserInfo>>
   */
  confirm(id: number) {
    return http.request({
      url: `/bus/home/confirm/${id}`,
      method: 'POST',
    })
  }

  /**
   * 有疑问投诉
   * @param id 投诉id
   * @param params 投诉参数
   * @returns
   */
  complaint(id: number, params: object) {
    return http.request({
      url: `/bus/home/complaint/${id}`,
      method: 'POST',
      data: params,
    })
  }

  /**
   * 上传图片
   * @param imgs 图片
   * @param params 投诉参数
   * @returns
   */
  busRecord(img: any) {
    return http.request({
      url: '/image/upload_img/bus_record',
      method: 'POST',
      data: img,
    })
  }

  /**
   * node详情
   * @param id 查询参数
   * @returns
   * <PageData<UserInfo>>
   */
  nodes(id: number) {
    return http.request({
      url: `/bus/home/nodes/${id}`,
      method: 'GET',
    })
  }

  /**
   * 阶段新增
   * @param id 项目id
   * @param params 新增参数
   * @returns
   */
  recordAdd(id: number, params: object) {
    return http.request({
      url: `/bus/home/recordAdd/${id}`,
      method: 'POST',
      data: params,
    })
  }

  /**
   * 根据id删除
   * @param id id
   * @returns
   */
  removeById(id: string) {
    return http.request({
      url: `/sys/userInfo/removeById/${id}`,
      method: 'DELETE',
    })
  }

  /**
   * 保存接口
   * @param params 保存参数
   * @returns
   */
  saveOrUpdate(params: object) {
    return http.request({
      url: '/sys/userInfo/saveOrUpdate',
      method: 'POST',
      data: params,
    })
  }
}

const userApi = new UserApi()

export default userApi
