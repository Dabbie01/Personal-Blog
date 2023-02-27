/*
 * @Author: Dabbie 2310734576@qq.com
 * @Date: 2023-02-27 14:06:41
 * @LastEditors: Dabbie 2310734576@qq.com
 * @LastEditTime: 2023-02-27 18:24:14
 * @FilePath: \personal-blog-system-main\src\mock\project.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Mock from "mockjs";

Mock.mock('/api/project', 'get', {
    code: 0,
    msg: "",
    "data|10-20": [{
        "id|+1": 1,
        name: "个人博客@id",
        url: "@url('http','qq.com')",
        github: "@url('http','qq.com')",
        "description|1-4": ["@cparagraph(1,5)"],
        thumb: "@image(300x250,@color,#fff,@natural)"
    }]
})
