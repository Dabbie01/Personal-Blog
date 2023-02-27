/*
 * @Author: Dabbie 2310734576@qq.com
 * @Date: 2023-02-27 14:06:41
 * @LastEditors: Dabbie 2310734576@qq.com
 * @LastEditTime: 2023-02-27 18:19:53
 * @FilePath: \personal-blog-system-main\src\router\routes.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import "nprogress/nprogress.css";
import { start, done, configure } from "nprogress";

configure({
    trickleSpeed: 20
})

function delay(duration) {
    return new Promise(resolve => {
        setTimeout(resolve, duration)
    })
}

function getPageComponet(pageCompResolve) {
    return async() => {
        start();
        if (process.env.NODE_ENV == 'development') {
            await delay(1000);
        }
        const comp = await pageCompResolve();
        done();
        return comp;
    }
}

//这是路由匹配规则
const routes = [{
    name: "home",
    path: "/",
    component: getPageComponet(() =>
        import ("@/views/Home")),
    meta: {
        title: '首页'
    }
}, {
    name: "blog",
    path: "/blog",
    component: getPageComponet(() =>
        import ("@/views/Blog")),
    meta: {
        title: '文章'
    }
}, {
    name: "blogCategory",
    path: "/blog/cate/:categoryId",
    component: getPageComponet(() =>
        import ("@/views/Blog")),
    meta: {
        title: '文章'
    }
}, {
    name: "Details",
    path: "/blog/:id",
    component: getPageComponet(() =>
        import ("@/views/Blog/Details")),
    meta: {
        title: '文章'
    }
}, {
    name: "about",
    path: "/about",
    component: getPageComponet(() =>
        import ("@/views/About")),
    meta: {
        title: '关于我'
    }
}, {
    name: "message",
    path: "/message",
    component: getPageComponet(() =>
        import ("@/views/Message")),
    meta: {
        title: '留言板'
    }
}, {
    name: "project",
    path: "/project",
    component: getPageComponet(() =>
        import ("@/views/Project")),
    meta: {
        title: '我的项目'
    },
}, {
    path: '/index.html',
    redirect: '/'
}, {
    name: 'NotFound',
    path: '*',
    component: getPageComponet(() =>
        import ("@/components/NotFound")),
}];
export default routes;