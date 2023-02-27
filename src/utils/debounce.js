/*
 * @Author: Dabbie 2310734576@qq.com
 * @Date: 2023-02-27 14:06:41
 * @LastEditors: Dabbie 2310734576@qq.com
 * @LastEditTime: 2023-02-27 18:14:37
 * @FilePath: \personal-blog-system-main\src\utils\debounce.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export default function(func, duration = 50) {
    let timer = null;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func(...args);
        }, duration)
    }
}
