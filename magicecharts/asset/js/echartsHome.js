var version = '2.2.2';
var sp = location.href.lastIndexOf('/');
var ep = location.href.lastIndexOf('.html');
var curPage = sp < ep ? location.href.slice(sp + 1, ep) : 'index';
var enVersion = (location.hash && location.hash.indexOf('-en') != -1)
                || location.href.indexOf('-en') != -1;

var activeClass = {};
var loc = {};
var forkWidth = 149;
curPage = curPage.replace('-en', '');
var isExample = false;
switch (curPage) {
    case 'index' :
        activeClass[curPage] = 'active';
        loc[curPage] = '.';
        loc.feature = './doc';
        loc.example = './doc';
        loc.doc = './doc';
        loc.about = './doc';
        loc.changelog = './doc';
        loc.start = './doc';
        loc.img = './doc';
        break;
    case 'feature' :
    case 'example' :
    case 'doc' :
    case 'about' :
    case 'changelog' :
    case 'start' :
        activeClass[curPage] = 'active';
        loc.index = '..';
        break;
    default :
        isExample = true;
        forkWidth = 60;
        activeClass['example'] = 'active';
        var extSub = location.href.indexOf('extension') != -1 ? '../' : '';
        loc.index = extSub + '../..';
        loc.feature = extSub + '../../doc';
        loc.example = extSub + '../../doc';
        loc.doc = extSub + '../../doc';
        loc.about = extSub + '../../doc';
        loc.changelog = extSub + '../../doc';
        loc.start = extSub + '../../doc';
        loc.img = extSub + '../../doc';
        break;
}

if ($('#head').length > 0) {

$('#head')[0].innerHTML = 
    '<div class="container">'
        + '<div class="navbar-header">'
          + '<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">'
            + '<span class="sr-only">Toggle navigation</span>'
            + '<span class="icon-bar"></span>'
            + '<span class="icon-bar"></span>'
            + '<span class="icon-bar"></span>'
          + '</button>'
          + '<a class="navbar-brand" href="http://echarts.baidu.com/index'
          + (enVersion ? '-en': '') 
          + '.html">ECharts</a>'
        + '</div>'
        + '<a href="https://github.com/ecomfe/echarts" target="_blank">'
            + '<img id="fork-image" style="position:absolute;top:0;right:0;border:0;z-index:1000;width:' + forkWidth + 'px" src="'+ (loc.img || '.') + '/asset/img/fork.png" alt="Fork me on GitHub">'
        + '</a>'
        + '<div class="navbar-collapse collapse" id="nav-wrap">'
          + '<ul class="nav navbar-nav navbar-right" id="nav" style="max-width:100%;">'
            + (enVersion
            ? ('<li class="' + (activeClass.index || '') + '"><a href="' + (loc.index || '.') + '/index-en.html">Home</a></li>'
                + '<li class="' + (activeClass.feature || '') + '"><a href="' + (loc.feature || '.') + '/feature-en.html">Feature</a></li>'
                + '<li class="' + (activeClass.example || '') + '"><a href="' + (loc.example || '.') + '/example-en.html">Example</a></li>'
                + '<li class="' + (activeClass.doc || '') + '"><a href="' + (loc.doc || '.') + '/doc-en.html">API & Doc</a></li>'
            )
            : ('<li class="' + (activeClass.index || '') + '"><a href="' + (loc.index || '.') + '/index.html">首頁</a></li>'
                + '<li class="' + (activeClass.feature || '') + '"><a href="' + (loc.feature || '.') + '/feature.html">特性</a></li>'
                + '<li class="' + (activeClass.example || '') + '"><a href="' + (loc.example || '.') + '/example.html">實例</a></li>'
                + '<li class="' + (activeClass.doc || '') + '"><a href="' + (loc.doc || '.') + '/doc.html">文檔</a></li>'
            ))
            /*
            + '<li class="dropdown">'
              + '<a href="#" class="dropdown-toggle" data-toggle="dropdown">教學 <b class="caret"></b></a>'
              + '<ul class="dropdown-menu">'
                + '<li><a href="#">初學教程</a></li>'
                + '<li class="divider"></li>'
                + '<li class="dropdown-header">外部資源</li>'
                + '<li><a href="#"></a></li>'
                + '<li><a href="#"></a></li>'
              + '</ul>'
            + '</li>'
            */
            + '<li class="dropdown">'
              + '<a href="#" class="dropdown-toggle" data-toggle="dropdown">' + (enVersion ? 'Download' : '下載') + '<b class="caret"></b></a>'
              + '<ul class="dropdown-menu">'
                + '<li><a href="http://ecomfe.github.io/echarts-builder-web/">' + (enVersion ? 'Online builder' : '在線構建工具') + '</a></li>'
                + '<li class="divider"></li>'
                + '<li><a href="http://echarts.baidu.com/build/echarts-' + version + '.zip"> echarts-' + version + ' (from Baidu)</a></li>'
                + '<li><a href="https://github.com/ecomfe/echarts/archive/' + version + '.zip"> echarts-' + version + ' (from GitHub)</a></li>'
                + '<li><a href="http://echarts.baidu.com/build/echarts-m-1.0.0.zip"> echarts-m-1.0.0 (beta)</a></li>'
                + '<li><a href="http://echarts.baidu.com/x/build/echarts-x-0.2.0.zip"> echarts-x-0.2.0 </a></li>'
                + '<li class="divider"></li>'
                + (enVersion 
                    ? '<li><a href="http://ecomfe.github.io/echarts/doc/changelog-en.html">Changelog</a></li>'
                    : '<li><a href="http://echarts.baidu.com/doc/changelog.html">Changelog</a></li>'
                )
              + '</ul>'
            + '</li>'
            //+ '<li><a href="http://echarts.baidu.com/build/echarts-' + version + '.rar">下載</a></li>'
            + (enVersion
               ? ('<li class="' + (activeClass.about || '') + '"><a href="' + (loc.about || '.') + '/about-en.html">About Us</a></li>')
               : ('<li class="' + (activeClass.about || '') + '"><a href="' + (loc.about || '.') + '/about.html">關於我們</a></li>')
            )
            + '<li><a href="javascript:void()" onclick="changeVersion()">' + (enVersion ? '中文' : 'English') + '</a></li>'
          + '</ul>'
        + '</div><!--/.nav-collapse -->'
      + '</div>';

}
function back2Top() {
    $("body,html").animate({scrollTop:0},1000);
    return false;
}

function changeVersion() {
    if (!isExample) {
        window.location = curPage + (enVersion ? '' : '-en') + '.html'
    }
    else {
        window.location = curPage + '.html' + (enVersion ? '' : '#-en'); 
        if (enVersion) {
            window.location.hash = window.location.hash.replace('-en', '');
        }
        window.location.reload();
    }
}
if ($('#headfooter').length > 0) {
    $('#footer')[0].style.marginTop = '50px';
    $('#footer')[0].innerHTML =
         '<div class="container">'
            + '<div class="row" style="padding-bottom:20px;">'
                + '<div class="col-md-3">'
                    + '<p>' + (enVersion ? 'Link' : 'ECharts團隊出品') + '</p>'
                    + '<ul>'
                        + '<li><a href="http://tushuo.baidu.com/" target="_blank">Baidu 圖說</a></li>'
                        + '<li><a href="' + (enVersion ? "http://ecomfe.github.io/echarts-x" : 'http://echarts.baidu.com/x/doc') + '" target="_blank">ECharts-X</a></li>'
                        + '<li><a href="http://ecomfe.github.io/zrender/index.html" target="_blank">ZRender</a></li>'
                        + '<li><a href="https://github.com/pissang/qtek" target="_blank">QTEK</a></li>'
                    + '</ul>'
                + '</div>'
                + '<div class="col-md-3">'
                    + '<p>' + (enVersion ? 'More' : '更多') + '</p>'
                    + '<ul>'
                        + '<li><a href="https://github.com/ecomfe/echarts/blob/master/LICENSE.txt" target="_blank">License</a></li>'
                        + '<li><a href="http://echarts.baidu.com/doc/changelog' + (enVersion ? '-en' : '') + '.html" target="_blank">Changelog</a></li>'
                        + '<li><a href="http://efe.baidu.com" target="_blank">Baidu EFE</a></li>'
                        + '<li><a href="http://www.oschina.net/p/echarts" target="_blank">' + (enVersion ? 'Open Source China' : '開源中國') + '</a></li>'
                    + '</ul>'
                + '</div>'
                + '<div class="col-md-3">'
                    + '<p>' + (enVersion ? 'Contact Us' : '聯繫我們') + '</p>'
                    + '<ul>'
                        + '<li><a href="mailto:echarts(a)baidu.com">echarts(a)baidu.com</a></li>'
                        + '<li><a href="https://github.com/ecomfe/echarts" target="_blank"> Github</a></li>'
                        + '<li><a href="http://weibo.com/echarts" target="_blank">Weibo</a></li>'
                    + '</ul>'
                + '</div>'
                + '<div class="col-md-3 flogo">'
                    + '<a href="javascript:void(0)" onclick="back2Top()" title="' + (enVersion ? 'Back to top' : '回到頂部') + '"><img src="' + (loc.img || '.') + '/asset/img/echarts-logo2.png" alt="ECharts"/></a>'
                + '</div>'
            + '</div>'
            + '<p class="pull-right"><a href="javascript:void(0)" onclick="back2Top()" >Back to top</a></p>'
            + '<p>&copy; 2015 <a href="http://www.baidu.com/" target="_blank">Baidu</a></p>'
        + '</div>';

}
if (document.location.href.indexOf('local') == -1) {
    var hm = document.createElement("script");
    hm.src = "//hm.baidu.com/hm.js?4bad1df23f079e0d12bdbef5e65b072f";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
}

function fixFork () {
    var navMarginRight = 0;
    var bodyWidth = document.body.offsetWidth;
    if ($('#nav-wrap').length > 0) {
        var contnetWidth = $('#nav-wrap')[0].offsetWidth;
        if (bodyWidth < 1440) {
            navMarginRight = 150 - (bodyWidth - contnetWidth) / 2;
        }
        $('#nav')[0].style.marginRight = navMarginRight + 'px';
        //--不需要 $('#fork-image')[0].style.width = (document.body.offsetWidth < 768 ? 1 : forkWidth) + 'px';
    }

};
fixFork();
$(window).on('resize', fixFork);