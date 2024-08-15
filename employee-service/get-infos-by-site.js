console.log("from github raw")
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
        var title = document.getElementsByClassName('article-title')[0];

        var imgs = at.getElementsByTagName("img");
        var folderRoot = "D:\\liaoyj\\test\\juejin\\";
        var folder = title.innerText;

        return { imgs, folderRoot, folder };
    }
    else if (currentUrl.indexOf('www.netbian.com/index') != -1) {
        var list = document.getElementsByClassName('list')[0];
        var imgs = list.getElementsByTagName("img");

        var page = document.getElementsByClassName("page")[0];
        var curPage = page.getElementsByTagName("b")[0];
        var folderRoot = "D:\\liaoyj\\test\\bian\\";
        var folder = curPage.innerText;



        return { imgs, folderRoot, folder }
    }
    else if (currentUrl.indexOf('4khd.com/content') != -1) {
        var imgCon = document.getElementById("basicExample")
        var imgs = imgCon.getElementsByTagName("img")
        
        var folderRoot = "C:\\Download\\4khd\\"
        var title = document.getElementsByClassName("wp-block-post-title")[0]
        var folder = title.innerText

        return { imgs, folderRoot, folder }
    }
}
