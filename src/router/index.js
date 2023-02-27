/*
 * @Author: Dabbie 2310734576@qq.com
 * @Date: 2023-02-27 14:06:41
 * @LastEditors: Dabbie 2310734576@qq.com
 * @LastEditTime: 2023-02-27 18:18:43
 * @FilePath: \personal-blog-system-main\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue';
import VueRouter from "vue-router";
import routes from "./routes";
import siteController from "@/utils/siteController"

Vue.use(VueRouter); //使用一个vue插件
const router = new VueRouter({
    routes,
    mode: "hash" //这是路由匹配模式
})
router.afterEach((to, from) => {
    siteController.setRoute(to.meta.title);
})
export default router;