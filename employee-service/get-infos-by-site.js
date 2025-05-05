const UPLOAD_ADDR = "http://192.168.1.103:7777/upload";
console.log("from github raw, upload server is " + UPLOAD_ADDR)
function getInfosBySite() {
    //var imgs = document.getElementsByTagName("img")
    const currentUrl = window.location.href;
    console.log("Current Page URL:", currentUrl);
    var _imgs;
    var _folderRoot;
    var _folder;
    // 如果需要处理URL中的特定部分，可以使用URL API
    // const url = new URL(currentUrl);
    // console.log("Hostname:", url.hostname);
    // console.log("Pathname:", url.pathname);
    // console.log("Search Params:", url.search);

    if (currentUrl.indexOf('juejin.cn/post') != -1) {
        var articleA = document.getElementsByClassName('article-area')[0];
        var at = articleA.getElementsByTagName("article")[0];
        _imgs = at.getElementsByTagName("img");

        var title = document.getElementsByClassName('article-title')[0];
        _folderRoot = "K:\\test\\juejin\\";
        _folder = title.innerText;

    }
    else if (currentUrl.indexOf('www.netbian.com/index') != -1) {
        var list = document.getElementsByClassName('list')[0];
        _imgs = list.getElementsByTagName("img");

        var page = document.getElementsByClassName("page")[0];
        var curPage = page.getElementsByTagName("b")[0];
        _folderRoot = "K:\\test\\bian\\";
        _folder = curPage.innerText;

    }
    else if (
        currentUrl.indexOf('4khd.com/content') != -1 ||
        currentUrl.indexOf('doofl.xxtt.info/content') != -1 ||
        currentUrl.indexOf('cwlq.xxtt.ink/content') != -1
    ) {

        var imgCon = document.getElementById("basicExample")
        _imgs = imgCon.getElementsByTagName("img")

        var title = document.getElementsByClassName("wp-block-post-title")[0]
        _folderRoot = "K:\\test\\4khd\\"
        _folder = title.innerText
    }

    else if (currentUrl.indexOf('://4kup.net/') != -1) {
        var con = document.getElementById("gallery")
        _imgs = con.getElementsByTagName("img")

        var title = document.getElementsByClassName("entry-header")[0]
        _folderRoot = "K:\\test\\4kup\\"
        _folder = title.getElementsByTagName('h1')[0].innerText

    }
    else if (currentUrl.indexOf('everiaclub.com') != -1) {
        var con = document.getElementsByClassName("mainleft")[0]
        var curPage = con.getElementsByTagName("h1")[0]
        _folder = curPage.innerText
        _imgs = con.getElementsByClassName("lazy")
        for (let img of _imgs) {
            img.src = img.getAttribute("data-original")
        }

        _folderRoot = "K:\\test\\everiaclub\\";
    }
    else if (currentUrl.indexOf('misskon.com') != -1) {
        var curPage = document.getElementsByTagName("h1")[0]
        var con = document.getElementById("the-post")

        _folder = curPage.innerText
        _imgs = con.querySelectorAll('img.lazy');

        for (var img of _imgs) {
            img.src = img.getAttribute("data-src")
        }
        _folderRoot = "K:\\test\\misskon\\";        
    }

    return { imgs: _imgs, folderRoot: _folderRoot, folder: _folder }

}
