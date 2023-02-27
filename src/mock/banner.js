/*
 * @Author: Dabbie 2310734576@qq.com
 * @Date: 2023-02-27 14:06:41
 * @LastEditors: Dabbie 2310734576@qq.com
 * @LastEditTime: 2023-02-27 18:23:10
 * @FilePath: \personal-blog-system-main\src\mock\banner.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Mock from "mockjs";

Mock.mock("/api/banner", "get", {
    code: 0,
    msg: '我也不知道发生了什么',
    data: [{
            id: "1",
            midImg: "http://mdrs.yuanjin.tech/img/20201031141507.jpg",
            bigImg: "https://desk-fd.zol-img.com.cn/t_s960x600c5/g2/M00/0E/07/ChMlWl5xtAGIVAEUABTUpAGrJDkAANvQwBC_08AFNS8941.jpg",
            title: "凛冬将至",
            description: "人唯有恐惧的时候方能勇敢",
        },
        {
            id: "2",
            midImg: "http://mdrs.yuanjin.tech/img/20201031205550.jpg",
            bigImg: "https://desk-fd.zol-img.com.cn/t_s960x600c5/g2/M00/0E/07/ChMlWV5xs92ILgoRACb_zdonpM8AANvQQA9PyoAJv_l773.jpg",
            title: "血火同源",
            description: "如果我回头，一切都完了",
        },
        {
            id: "3",
            midImg: "http://mdrs.yuanjin.tech/img/20201031204401.jpg",
            bigImg: "https://desk-fd.zol-img.com.cn/t_s960x600c5/g2/M00/0E/07/ChMlWV5xs-uIBaGvABBIE_3D3AEAANvQgBqVywAEEgr839.jpg",
            title: "听我怒吼",
            description: "兰尼斯特有债必偿",
        },
    ]
})
