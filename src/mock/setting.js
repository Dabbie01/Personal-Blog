/*
 * @Author: Dabbie 2310734576@qq.com
 * @Date: 2023-02-27 14:06:41
 * @LastEditors: Dabbie 2310734576@qq.com
 * @LastEditTime: 2023-02-28 16:26:53
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
        siteTitle: "Dabbie的博客",
        github: "https://github.com/Dabbie01",
        qq: "2310734576",
        qqQrCode,
        weixin: "Dabbie",
        weixinQrCode,
        mail: "yangting2000@foxmail.com",
        githubName: "Dabbie01",
        favicon: "http://mdrs.yuanjin.tech/Fs4CDlC6mwe_WXLMIiXcmSJLHO4f",
    }
})