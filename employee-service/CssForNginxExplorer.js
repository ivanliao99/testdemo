// ==UserScript==
// @name         Css for nginx explorer
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       You
// @match        http://192.168.1.103:7799/*
// @exclude      http://192.168.1.103:7799/index/*
// @run-at       document-end
// @grant        none
// ==/UserScript==

(function () {
	'use strict';

	function isMobile() {
		return /Mobi|Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent);
	}

	if (isMobile()) {


		setTimeout(() => {
			document.querySelectorAll('a').forEach(link => {
				let clickTimer = null;

				link.addEventListener('click', function (event) {
					event.preventDefault();

					// 如果在短时间内点击两次，视为双击
					if (clickTimer !== null) {
						clearTimeout(clickTimer);
						clickTimer = null;
						// 双击：在新标签页打开链接
						window.open(link.href, '_blank');
					} else {
						// 设置点击定时器，等待判断是否为双击
						clickTimer = setTimeout(() => {
							clickTimer = null;
							// 这里是单击行为（如果你不想保留单击，就可以注释掉这行）
							window.location.href = link.href;
						}, 150); // 250ms 是常用的双击间隔判断时间
					}
				});
			});

		}, 500)

		// 创建一个 <style> 元素
		const style = document.createElement('style');
		style.innerHTML = `
        @media (max-width: 1024px) {
            body {
                background: #f7f7f7;
            }
            pre{font-size:30px;}
            a {
                
                margin-top:20px;
                text-decoration: none;
                display: inline-block;
                color: #484848;
                font-size: 45px;
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
	}
	// Your code here...
})();
