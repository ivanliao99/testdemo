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
    function isMobile() {
        return /Mobi|Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent);
    }

    if (isMobile()) {
        var metas = document.getElementsByTagName("meta")
        if (metas.length == 0) {
            // 创建一个新的 <meta> 标签
            const metaTag = document.createElement('meta');
            metaTag.name = "viewport";
            metaTag.content = "width=device-width, initial-scale=1.0";

            // 将这个 <meta> 标签添加到 <head> 中
            document.head.appendChild(metaTag);
        }
    }

    // 创建一个 <style> 元素
    const style = document.createElement('style');
    style.innerHTML = `
        @media (max-width: 1024px) {
            body {
                background: #f7f7f7;
            }
            a {
                
                margin-top:20px;
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
    document.querySelectorAll('body a').forEach(aTag => {
        const next = aTag.nextSibling;

        if (next && next.nodeType === Node.TEXT_NODE && next.textContent.trim()) {
            const span = document.createElement('span');
            span.textContent = next.textContent;
            span.style.display = 'block';

            aTag.style.display = 'block';

            aTag.parentNode.insertBefore(span, next);
            aTag.parentNode.removeChild(next);
        }
    });
    // Your code here...
})();
