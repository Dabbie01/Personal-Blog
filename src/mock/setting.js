/*
 * @Author: Dabbie 2310734576@qq.com
 * @Date: 2023-02-27 14:06:41
 * @LastEditors: Dabbie 2310734576@qq.com
 * @LastEditTime: 2023-02-27 18:24:52
 * @FilePath: \personal-blog-system-main\src\mock\project.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Mock from "mockjs";
import avatar from "@/assets/avatar.png";
import weixinQrCode from "@/assets/weixinQrCode.jpg";
import qqQrCode from "@/assets/qqQrCode.png";

Mock.mock('/api/setting', 'get', {
    code: 0,
    msg: "",
    data: {
        avatar,
        siteTitle: "小林的博客",
        github: "https://github.com/linzx621?tab=repositories",
        qq: "2846282482",
        qqQrCode,
        weixin: "LZX-621",
        weixinQrCode,
        mail: "2846282482@qq.com",
        githubName: "linzx621",
        favicon: "http://mdrs.yuanjin.tech/Fs4CDlC6mwe_WXLMIiXcmSJLHO4f",
    }
})