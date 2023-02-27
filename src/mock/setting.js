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