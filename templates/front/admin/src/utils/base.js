const base = {
    get() {
        return {
            url : "http://localhost:8080/django7d4ww4y2/",
            name: "django7d4ww4y2",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于协同过滤算法的的儿童图书推荐系统"
        } 
    }
}
export default base
