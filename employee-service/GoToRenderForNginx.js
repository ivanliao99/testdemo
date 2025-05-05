// ==UserScript==
// @name         Go to render for nginx
// @namespace    http://tampermonkey.net/
// @version      0.3
// @author       Jo
// @exclude      *://*/*.jpg*
// @exclude      *://*/*.jpeg*
// @exclude      *://*/*.png*
// @exclude      *://*/*.gif*
// @exclude      *://*/*.webp*
// @exclude      *://*/*.svg*
// @exclude      http://192.168.1.103:7799/index/*
// @match        http://192.168.1.103:7799/4khd/*
// @match        http://192.168.1.103:7799/4kup/*
// @match        http://192.168.1.103:7799/everiaclub/*
// @match        http://192.168.1.103:7799/misskon/*
// @match        http://192.168.1.103:7799/others/*
// @run-at       document-end
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    var fullmatchs = [
        "http://192.168.1.103:7799/4khd/",
        "http://192.168.1.103:7799/4kup/",
        "http://192.168.1.103:7799/everiaclub/",
        "http://192.168.1.103:7799/misskon/",
        "http://192.168.1.103:7799/others/"
    ]

    const currentUrl = window.location.href;
    const newUrl = "http://192.168.1.103:7799/index?url=" + currentUrl
    console.log(currentUrl)
    // var matched = false
    // for (var u of fullmatchs) {
    //     if (u === currentUrl) {
    //         matched = true
    //         break;
    //     }
    // }
    if (!fullmatchs.includes(currentUrl)) {
        window.history.replaceState(null, '', newUrl);
        window.location.href = newUrl;
    }


    // Your code here...
})();
