<!--
 * @Author: Dabbie 2310734576@qq.com
 * @Date: 2023-02-27 14:06:41
 * @LastEditors: Dabbie 2310734576@qq.com
 * @LastEditTime: 2023-03-06 21:45:52
 * @FilePath: \personal-blog-system-main\src\views\Blog\Details.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <Layout>
    <template>
      <div class="main-container" ref="mainContainer" v-loading="isLoading">
        <BlogDetail :blog="data" v-if="data"></BlogDetail>
        <BlogComment v-if="!isLoading"></BlogComment>
      </div>
    </template>
    <template #right>
      <div class="right-container" v-loading="isLoading">
        <BlogTOC :toc="data.toc" v-if="data"></BlogTOC>
      </div>
    </template>
  </Layout>
</template>

<script>
import Layout from "@/components/Layout";
import BlogDetail from "./components/BlogDetail";
import BlogTOC from "./components/BlogTOC";
import BlogComment from "./components/BlogComment";
import fetchData from "@/mixins/fetchData";
import { getBlog } from "@/api/blog";
import mainScroll from "@/mixins/mainScroll";
import siteController from "@/utils/siteController";
export default {
  mixins: [fetchData(), mainScroll("mainContainer")],
  components: {
    Layout,
    BlogDetail,
    BlogTOC,
    BlogComment,
  },
  methods: {
    async fetchData() {
      let resp = await getBlog(this.$route.params.id);
      if(!resp) {
        this.$router.push('/NotFound');
        return;
      }
      if (resp.title) {
        siteController.setRoute(resp.title);
      }
      return resp;
    },
  },

  updated() {
    const hash = location.hash;
    location.hash = "";
    setTimeout(() => {
      location.hash = hash;
    }, 50);
  },
};
</script>

<style lang="less" scoped>
.main-container {
  height: 100%;
  overflow-y: scroll;
  padding: 20px;
  box-sizing: border-box;
  position: relative;
  scroll-behavior: smooth;
}
.right-container {
  width: 300px;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 20px;
  box-sizing: border-box;
  position: relative;
}
</style>
