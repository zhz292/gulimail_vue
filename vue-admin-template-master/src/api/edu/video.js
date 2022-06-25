import request from '@/utils/request'

const api_name = '/eduservice/video'

export default {

    addVideo(videoInfo) {
    return request({
      url: `${api_name}/addVideo`,
      method: 'post',
      data: videoInfo
    })
  },

  getVideoInfoById(id) {
    return request({
      url: `${api_name}/getVideoInfoById/${id}`,
      method: 'get'
    })
  },

  updateVideoInfoById(videoInfo) {
    return request({
      url: `${api_name}/updateCourseInfoById/${videoInfo.id}`,
      method: 'put',
      data: videoInfo
    })
  },

  removeById(id) {
    return request({
      url: `${api_name}/${id}`,
      method: 'delete'
    })
  }
}