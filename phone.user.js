// ==UserScript==
// @name              VIP 视频解析（Phone）
// @version           1.0.0
// @description       支持腾讯视频、爱奇艺、优酷、土豆、芒果TV、搜狐视频、乐视视频、PPTV、风行、华数TV、哔哩哔哩等，支持多个解析接口切换，支持视频自由选集，支持自定义拖拽位置，支持视频广告跳过，支持页外解析，支持 Tampermonkey、Violentmonkey、Greasemonkey
// @author            木子白白白
// @icon              data:image/png;base64,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
// @namespace         https://www.x0h.cn
// @require           https://cdn.bootcdn.net/ajax/libs/jquery/3.6.4/jquery.min.js
// @match             *://*.youku.com/*
// @match             *://*.iqiyi.com/*
// @match             *://*.iq.com/*
// @match             *://*.le.com/*
// @match             *://v.qq.com/*
// @match             *://m.v.qq.com/*
// @match             *://*.tudou.com/*
// @match             *://*.mgtv.com/*
// @match             *://tv.sohu.com/*
// @match             *://film.sohu.com/*
// @match             *://*.1905.com/*
// @match             *://*.bilibili.com/*
// @match             *://*.pptv.com/*
// @grant             unsafeWindow
// @grant             GM_openInTab
// @grant             GM.openInTab
// @grant             GM_getValue
// @grant             GM.getValue
// @grant             GM_setValue
// @grant             GM.setValue
// @grant             GM_xmlhttpRequest
// @grant             GM.xmlHttpRequest
// @grant             GM_download
// @grant             GM_registerMenuCommand

// @downloadURL https://gcore.jsdelivr.net/gh/hnlyzxf/VideoVip/phone.user.js
// @updateURL https://gcore.jsdelivr.net/gh/hnlyzxf/VideoVip/phone.user.js
// ==/UserScript==

(function () {
    'use strict';
    var $ = $ || window.$;
    var log_count = 1;
    var host = location.host;
    var parseInterfaceList = [];
    var originalInterfaceList = [
        {title: "七云", type: "0", url: "https://jx.77flv.cc/?url="},
        {title: "冰豆", type: "0", url: "https://bd.jx.cn/?url="},
        {title: "CK", type: "0", url: "https://www.ckplayer.vip/jiexi/?url="},
        {title: "弹幕", type: "0", url: "https://dmjx.m3u8.tv/?url="},
        {title: "IK9", type: "0", url: "https://yparse.ik9.cc/index.php?url="},
        {title: "JY", type: "0", url: "https://jx.playerjy.com/?url="},
        {title: "M3U8", type: "0", url: "https://jx.m3u8.tv/jiexi/?url="},
        {title: "PM", type: "0", url: "https://www.playm3u8.cn/jiexi.php?url="},
        {title: "盘古2", type: "0", url: "https://www.pangujiexi.com/jiexi/?url="},
        {title: "剖云", type: "0", url: "https://www.pouyun.com/?url="},
        {title: "七哥", type: "0", url: "https://jx.nnxv.cn/tv.php?url="},
        {title: "虾米", type: "0", url: "https://jx.xmflv.com/?url="},
        {title: "虾米2", type: "0", url: "https://jx.xmflv.cc/?url="},
        {title: "夜幕", type: "0", url: "https://www.yemu.xyz/?url="},
        {title: "云析", type: "0", url: "https://jx.yparse.com/index.php?url="},
        {title: "8090", type: "0", url: "https://www.8090g.cn/?url="},
        {title: "No", type: "0", url: "http://jiexi.vipno.cn/?v="},
        {title: "纯净1", type: "0", url: "https://im1907.top/?jx="},
    ];

    //自定义 log 函数
    function mylog(param1, param2) {
        param1 = param1 ? param1 : "";
        param2 = param2 ? param2 : "";
        console.log("#" + log_count++ + "-VIP-log:", param1, param2);
    }

    //兼容 Tampermonkey | Violentmonkey | Greasymonkey 4.0+
    function GMopenInTab(url) {
        if (typeof GM_openInTab === "function") {
            GM_openInTab(url, false); // false 表示前台打开
        } else {
            GM.openInTab(url, false); // false 表示前台打开
        }
    }

    //兼容 Tampermonkey | Violentmonkey | Greasymonkey 4.0+
    function GMgetValue(name, value) {
        if (typeof GM_getValue === "function") {
            return GM_getValue(name, value);
        } else {
            return GM.getValue(name, value);
        }
    }

    //兼容 Tampermonkey | Violentmonkey | Greasymonkey 4.0+
    function GMsetValue(name, value) {
        if (typeof GM_setValue === "function") {
            GM_setValue(name, value);
        } else {
            GM.setValue(name, value);
        }
    }

    //兼容 Tampermonkey | Violentmonkey | Greasymonkey 4.0+
    function GMaddStyle(css) {
        var myStyle = document.createElement('style');
        myStyle.textContent = css;
        var doc = document.head || document.documentElement;
        doc.appendChild(myStyle);
    }

    var isMobile = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);

    var sImgBase64 = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABB0lEQVR42r2VCw7CIAxAWzQuelsv4ml12XSAhZQFl0L3cWvSwFjhtRQKeu9bALgiCbDQmOfuQHqGuow2whpPpLajTlMAWNKTAhhthDU6zBbbRY4D7LRFfQ3geXJIoCM1PIYTQC3JrRZBfooGIRqcA4gThZ/R6zCegI7EmBBIjAY4ogSSAFZNcppEZg9q7jz84WgMKFIDvEkvuVcCKG0bqoBCknEKKICgsIZ6TKEE0GwPBYSzbpYCFm9RMUn/SnJmnO7Az+URPLaZfQI47ttx/pwcCFHm3w7KtUgFlB6c/AbXSsVqQC6bAGl/pSoKE5t1tWirHAJ4UXvb6UWLgJ5/NgJgmbfCg/MFf/07iXwnzokAAAAASUVORK5CYII=`;

    // 视频解析预处理
    var outerList = [];
    var outerli = "";
    originalInterfaceList.forEach((item, index) => {
        outerList.push(item);
        outerli += "<li title='请勿相信视频中广告'>" + item.title + "</li>";
    });

    parseInterfaceList = outerList;

    //图片按钮定位
    var top = 100;
    var Position = GMgetValue("Position_" + host);
    if(!!Position){
        top = Position.top;
    }

    GMaddStyle(`
        #vip_movie_box {cursor:pointer; position:fixed; top:` + top + `px; right:0px; width:33px; z-index:99999; font-size:12px; text-align:left;}
        #vip_movie_box .selected_text {width:32px; padding:4px 0px; text-align:center; background-color:#FF4500;}
        #vip_movie_box .selected_text img {width:22px; height:22px;display:inline-block; vertical-align:middle;}
        #vip_movie_box .vip_mod_box_selected {width:320px; max-height:450px;display:none; position:absolute; right:33px; top:0; text-align:center; backdrop-filter: saturate(1) blur(15px); background: rgba(255, 255, 255, 0.2); border:1px solid gray; overflow-y: auto;}
        #vip_movie_box .vip_mod_box_selected ul{list-style: none; margin:10px 10px;}
        #vip_movie_box .vip_mod_box_selected li{font-size:12px; color:#FFFFFF; text-align:center; width:calc(36% - 14px); line-height:21px; float:left; padding:4px 4px; margin:3px 3px;background: rgba(0,0,0,0.6);border-radius:2px;box-sizing:border-box;}
        #vip_movie_box .vip_mod_box_selected li:hover{color:#FFFFFF; background-color:#FF4500;}
        #vip_movie_box .vip_mod_box_selected::-webkit-scrollbar{width:5px; height:1px;}
        #vip_movie_box .vip_mod_box_selected::-webkit-scrollbar-thumb{box-shadow:inset 0 0 5px rgba(0, 0, 0, 0.2); background:#A8A8A8;}
        #vip_movie_box .vip_mod_box_selected::-webkit-scrollbar-track{box-shadow:inset 0 0 5px rgba(0, 0, 0, 0.2); background:#F1F1F1;}
    `);

    if (isMobile) {
        GMaddStyle(`#vip_movie_box {top:300px;}`);
    }

    var html = $(`<div id='vip_movie_box'>
                    <div class='selected_text' >
                       <img src='`+ sImgBase64 +`' title='视频解析'/>
                       <div class='vip_mod_box_selected' >
                           <div>
                             <div style='font-size:16px; font-weight:bold; text-align:center; color:#FF4500; line-height:21px; margin-top:10px;'>选择解析</div>
                             <ul>
                               ` + outerli + `
                               <div style='clear:both;'></div>
                             </ul>
                           </div>
                       </div>
                    </div>
                 </div>`);

    $("body").append(html);

    //视频解析事件处理
    if (isMobile) {
        $(".selected_text").on("click", () => $(".vip_mod_box_selected").toggle());
    } else {
        $(".selected_text").on("mouseover", () => $(".vip_mod_box_selected").show());
        $(".selected_text").on("mouseout", () => $(".vip_mod_box_selected").hide());
    }
    $(".vip_mod_box_selected li").each((index, item) => {
        item.addEventListener("click", function(){
            GMopenInTab(parseInterfaceList[index].url + location.href); // 前台打开新窗口
        });
    });

    // 右键拖拽功能
    var movie_box = $("#vip_movie_box");
    movie_box.mousedown(function(e) {
        if (e.which == 3) {
            e.preventDefault();
            movie_box.css("cursor", "move");
            var positionDiv = $(this).offset();
            var distenceX = e.pageX - positionDiv.left;
            var distenceY = e.pageY - positionDiv.top;
            $(document).mousemove(function(e) {
                var x = e.pageX - distenceX;
                var y = e.pageY - distenceY;
                if (x < 0) {
                    x = 0;
                } else if (x > $(document).width() - movie_box.outerWidth(true)) {
                    x = $(document).width() - movie_box.outerWidth(true);
                }
                if (y < 0) {
                    y = 0;
                } else if (y > $(document).height() - movie_box.outerHeight(true)) {
                    y = $(document).height() - movie_box.outerHeight(true);
                }
                movie_box.css("top", y);
                GMsetValue("Position_" + host, {"top": y});
            });
            $(document).mouseup(function() {
                $(document).off('mousemove');
                movie_box.css("cursor", "pointer");
            });
            $(document).contextmenu(function(e) {
                e.preventDefault();
            });
        }
    });

})();
