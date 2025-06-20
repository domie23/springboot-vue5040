const base = {
    get() {
        return {
            url : "http://localhost:8080/jsjwangluojiaoxue/",
            name: "jsjwangluojiaoxue",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/jsjwangluojiaoxue/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "大学生计算机基础网络教学系统"
        } 
    }
}
export default base
