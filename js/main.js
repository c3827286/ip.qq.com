$('.signup').click(function (event) {
    popLogin.show();
    event.preventDefault();
    event.stopPropagation();
    return false;
});

var popLogin = (function () {
    document.domain = 'qq.com';
    var $loginMask;
    var $loginWraper;
    var $loginFrame;
    var ptloginSrc = 'http://ui.ptlogin2.qq.com/cgi-bin/login?appid=2000101&link_target=blank&s_url=http%3A%2F%2Fip.qq.com%2Fsuc.html&target=self';

    function showLoginFrame() {
        prepareHtml();
        $loginMask = $('#_plMask').show();
        $loginWraper = $('#_plWraper').show();
        $loginFrame = $('#_plLoginFrame').attr('src', ptloginSrc);
    }

    window.ptlogin2_onResize = function (width, height) {
        var $loginInner = $('#_plInner').css({
            width: width + 'px',
            height: height + 'px'
        });
    };

    window.ptlogin2_onClose = function () {
        $loginMask.hide();
        $loginWraper.hide();
    };
    function getCookie(name) {
        var m = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
        return !m ? "" : decodeURIComponent(m[2]);
    }

    function getUin() {
        var uin = getCookie("uin");
        return !uin ? null : parseInt(uin.substring(1, uin.length), 10);
    }

    function prepareHtml() {
        if ($('#_plWraper').length < 1) {
            var htmlString = '<div id="_plMask" style="display: none; position: absolute;z-index:999;left:0;top:0;width:100%;height: 100%;background-color: #000; opacity: 0.5; filter:alpha(opacity=50); "></div>\
                <div id="_plWraper" style="display: none;">\
                    <div id="_plInner" style="width:490px; height:328px; padding:0; margin:0; position: absolute;z-index: 1000; left: 50%; margin-left: -245px; top:10%;">\
                        <iframe id="_plLoginFrame" frameborder="0" scrolling="auto" width="100%" height="100%"></iframe>\
                    </div>\
                </div>';

            $(htmlString).appendTo('body');
        }
    }

    return {
        'init':function () {
        },
        'show':function () {
            showLoginFrame();
        },
        'success':function () {
            var uin = getUin();
            login_in(uin);
            $loginMask.hide();
            $loginWraper.hide();
        }
    };
})();

function Change_Hide_bak(flag) {
    if ((g_uin == 0 && getUin() == "") && flag == 0) {
        popLogin.show();
        g_show = 1;
    }
    else {
        g_show = 0;
    }
    document.getElementById('change_hint').style.display = flag ? "block" : "none";
    document.getElementById('change_field').style.display = flag ? "none" : "block";
    return false;
}
