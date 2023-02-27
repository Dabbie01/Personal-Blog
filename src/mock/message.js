/*
 * @Author: Dabbie 2310734576@qq.com
 * @Date: 2023-02-27 14:06:41
 * @LastEditors: Dabbie 2310734576@qq.com
 * @LastEditTime: 2023-02-27 18:23:33
 * @FilePath: \personal-blog-system-main\src\mock\message.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Mock from "mockjs";

function getLimit(options) {
    const str = options.url.slice(options.url.indexOf('?') + 1);
    const arr1 = str.split('&');
    const arr2 = arr1.map(item => item.split('='));
    const obj = {};
    for (let i = 0; i < arr2.length; i++) {
        obj[arr2[i][0]] = arr2[i][1];
    }
    return obj
}
Mock.mock(/^\/api\/message\/?(\?.+)?$/, 'get', function(options) {
    const obj = getLimit(options);
    return Mock.mock({
        code: 0,
        msg: "",
        data: {
            total: 52,
            [`rows|${obj.limit || 10}`]: [{
                id: "@guid",
                nickname: "@cname",
                content: "@cparagraph(1, 10)",
                createDate: Date.now(),
                "avatar|1": [
                    "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar6.jpg",
                    "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar4.jpg",
                    "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar8.jpg",
                    "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar2.jpg",
                ],
            }, ],
        },
    })
})

Mock.mock('/api/message', 'post', {
    code: 0,
    msg: "",
    data: {
        "id|+1": 1,
        nickname: "@cname",
        content: "@cparagraph(1, 10)",
        createDate: Date.now(),
        "avatar|1": [
            "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar6.jpg",
            "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar4.jpg",
            "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar8.jpg",
            "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar2.jpg",
        ],
    },
})