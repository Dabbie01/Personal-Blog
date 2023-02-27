<!--
 * @Author: Dabbie 2310734576@qq.com
 * @Date: 2023-02-27 14:06:41
 * @LastEditors: Dabbie 2310734576@qq.com
 * @LastEditTime: 2023-02-27 18:31:29
 * @FilePath: \personal-blog-system-main\src\components\Icon\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="icon-container">
    <i class="iconfont" :class="fontClass"></i>
  </div>
</template>

<script>
const classMap = {
  home: "iconzhuye",
  success: "iconzhengque",
  error: "iconcuowu",
  close: "iconguanbi",
  warn: "iconjinggao",
  info: "iconxinxi",
  blog: "iconblog",
  code: "iconcode",
  about: "iconset_about_hov",
  weixin: "iconweixin",
  mail: "iconemail",
  github: "icongithub",
  qq: "iconsign_qq",
  arrowUp: "iconiconfonticonfonti2copy",
  arrowDown: "iconiconfonticonfonti2",
  empty: "iconempty",
  chat: "iconliuyan",
};
export const types = Object.keys(classMap);
export default {
  props: {
    type: {
      type: String,
      required: true,
    },
  },
  computed: {   //计算属性
    fontClass() {
      return classMap[this.type];
    },
  },
};
</script>
<style scoped>
@import "//at.alicdn.com/t/font_2164449_nalfgtq7il.css";
.iconfont {
  font-size: inherit;
  color: inherit;
}
.icon-container {
  font-style: normal;
}
</style>

