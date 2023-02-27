<!--
 * @Author: Dabbie 2310734576@qq.com
 * @Date: 2023-02-27 14:06:41
 * @LastEditors: Dabbie 2310734576@qq.com
 * @LastEditTime: 2023-02-27 18:32:10
 * @FilePath: \personal-blog-system-main\src\components\NotFound\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="not-found-container">
      <img src="@/assets/404.jpg" alt="">
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.not-found-container{
    width: 100%;
    height: 100%;
   
    img{
        width: 100%;
        object-fit: cover;
    }
}
</style>