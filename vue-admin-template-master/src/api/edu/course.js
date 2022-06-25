import request from '@/utils/request'

const api_name = '/eduservice/course'

export default {
  saveCourseInfo(courseInfo) {
    return request({
      url: `${api_name}/addCourseInfo`,
      method: 'post',
      data: courseInfo
    })
  },
  getCourseInfoById(id) {
    return request({
      url: `${api_name}/getCourseInfoById/${id}`,
      method: 'get'
    })
  },
  updateCourseInfoById(courseInfo) {
    return request({
      url: `${api_name}/updateCourseInfoById`,
      method: 'put',
      data: courseInfo
    })
  },
  getCoursePublishInfoById(id) {
    return request({
      url: `${api_name}/getCoursePublishInfoById/${id}`,
      method: 'get'
    })
  },

  publishCourseById(id) {
    return request({
      url: `${api_name}/publishCourseById/${id}`,
      method: 'put'
    })
  },
}