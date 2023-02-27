/*
 * @Author: Dabbie 2310734576@qq.com
 * @Date: 2023-02-27 14:06:41
 * @LastEditors: Dabbie 2310734576@qq.com
 * @LastEditTime: 2023-02-27 18:17:39
 * @FilePath: \personal-blog-system-main\src\store\setting.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from "vue";
import Vuex from "vuex";
import getSetting from "@/api/setting";
import siteController from "@/utils/siteController";

Vue.use(Vuex);

export default {
    namespaced: true,
    state: {
        loading: false,
        data: {},
    },
    mutations: {
        setLoading(state, payload) {
            state.loading = payload;
        },
        setData(state, payload) {
            state.data = payload;
        }
    },
    actions: {
        async fetchSetting(ctx) {
            ctx.commit('setLoading', true);
            const resp = await getSetting();
            ctx.commit('setData', resp);
            ctx.commit('setLoading', false);
            if (resp.favicon) {
                let link = document.querySelector('link[rel="icon shortcut"]');
                if (link) {
                    return;
                }
                link = document.createElement('link');
                link.rel = 'shortcut icon';
                link.href = resp.favicon;
                document.querySelector('head').appendChild(link);
            }
            if (resp.siteTitle) {
                siteController.setSite(resp.siteTitle);
            }
        }
    }
}
