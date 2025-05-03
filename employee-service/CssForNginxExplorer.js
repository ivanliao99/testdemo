// ==UserScript==
// @name         Css for nginx explorer
// @namespace    http://tampermonkey.net/
// @version      2025-05-03
// @description  try to take over the world!
// @author       You
// @match        http://192.168.1.103:7799/*
// @exclude      http://192.168.1.103:7799/index/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
   

    // 创建一个 <style> 元素
    const style = document.createElement('style');
    style.innerHTML = `
        @media (max-width: 1024px) {
            body {
                background: #f7f7f7;
            }
            a {
                padding: 10px 0;
                text-decoration: none;
                padding: 10px 0;
                text-decoration: none;
                display: inline-block;
                color: #484848;
                font-size: 20px;
                font-family: auto;
            }
        }

    `;

    // 将 <style> 标签添加到 <head> 中
    document.head.appendChild(style);
    // Your code here...
})();
