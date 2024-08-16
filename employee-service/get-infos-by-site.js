const UPLOAD_ADDR = "http://192.168.1.104:7777/upload";
console.log("from github raw, upload server is " + UPLOAD_ADDR)
function getInfosBySite() {
    //var imgs = document.getElementsByTagName("img")
    const currentUrl = window.location.href;
    console.log("Current Page URL:", currentUrl);

    // 如果需要处理URL中的特定部分，可以使用URL API
    // const url = new URL(currentUrl);
    // console.log("Hostname:", url.hostname);
    // console.log("Pathname:", url.pathname);
    // console.log("Search Params:", url.search);

    if (currentUrl.indexOf('juejin.cn/post') != -1) {
        var articleA = document.getElementsByClassName('article-area')[0];
        var at = articleA.getElementsByTagName("article")[0];
        var _imgs = at.getElementsByTagName("img");
        
        var title = document.getElementsByClassName('article-title')[0];
        var _folderRoot = "C:\\Download\\juejin\\";
        var _folder = title.innerText;

        return { imgs: _imgs, folderRoot: _folderRoot, folder: _folder }
    }
    else if (currentUrl.indexOf('www.netbian.com/index') != -1) {
        var list = document.getElementsByClassName('list')[0];
        var _imgs = list.getElementsByTagName("img");

        var page = document.getElementsByClassName("page")[0];
        var curPage = page.getElementsByTagName("b")[0];
        var _folderRoot = "C:\\Download\\bian\\";
        var _folder = curPage.innerText;

        return { imgs: _imgs, folderRoot: _folderRoot, folder: _folder }
    }
    else if (currentUrl.indexOf('4khd.com/content') != -1) {
        var imgCon = document.getElementById("basicExample")
        var _imgs = imgCon.getElementsByTagName("img")
        
        var title = document.getElementsByClassName("wp-block-post-title")[0]
        var _folderRoot = "C:\\Download\\4khd\\"
        var _folder = title.innerText

        return { imgs: _imgs, folderRoot: _folderRoot, folder: _folder }
    }
    else if (currentUrl.indexOf('://4kup.net/') != -1) {
        var con = document.getElementById("gallery") 
        var _imgs = con.getElementsByTagName("img") 

        var title = document.getElementsByClassName("entry-header")[0] 
        var _folderRoot = "C:\\Download\\4kup\\"
        var _folder = title.getElementsByTagName('h1')[0].innerText 

        return { imgs: _imgs, folderRoot: _folderRoot, folder: _folder }
    }
}
