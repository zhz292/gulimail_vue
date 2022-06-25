import request from '@/utils/request'

const api_name = '/eduservice/teacher'
export default {

    getPageList(page, limit, searchObj) {
        return request({
            url: `${api_name}/${page}/${limit}`,
            method: 'post',
            data: searchObj
        })
    },
    removeById(teacherId) {
        return request({
            url: `${api_name}/${teacherId}`,
            method: 'delete'
        })
    },
    //添加讲师
    addTeacher(teacher) {
        return request({
            url: `/eduservice/teacher/addTeacher`,
            method: 'post',
            data: teacher
        })
    },
    //根据id查询讲师
    getTeacherInfo(id) {
        return request({
            url: `/eduservice/teacher/getTeacher/${id}`,
            method: 'get'
        })
    },
    //修改讲师
    updateTeacherInfo(teacher) {
        return request({
            url: `/eduservice/teacher/updateTeacher`,
            method: 'post',
            data: teacher
        })
    },
    getList() {
        return request({
            url: `/eduservice/teacher/findAll`,
            method: 'get'
        })
    },

}