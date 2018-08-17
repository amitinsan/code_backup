leaveIndent = {
    ajaxProcess :0,
    init:function() {
        var allowPageArray = ['/markets', '/ipo', '/stocks/'],
            currentPathName = document.location.pathname,
            allowed = 0;
            $.each(allowPageArray, function(ind, val){
            	if(currentPathName.indexOf(val) != -1) {
            		allowed = 1;
            	}
            });
        if(allowed && !$.jStorage.get('leave_indent_banner_done')) {
            leaveIndent.html();
            $(document).mouseleave(function (e) {
                e = window.event || e;
                var x = e.clientX, y = e.clientY; 
                if(y <= 50) {
                    leaveIndent.show();
                }
            });
            $('.li_banner_wrap').bind("click", function (e) {
            	if(!$(e.target).is('.watch, .watch *')){
            		$('.watchlistPopup').hide();
            	}
            	if(!$(e.target).is('.li_banner, .li_banner *')){
            		leaveIndent.hide();
            	}
            	if(e.keycode == 27) {
            	    leaveIndent.hide();
            	}
            });
            document.onkeyup = function (e) {
                if(e.keyCode == 27) {
            	    leaveIndent.hide();
            	}
            }
        }
    },
    html:function () {
        var html = '<div class="li_banner_wrap hidden">\
            <div class="li_banner">\
                <div class="li_sprite li_close" onclick="leaveIndent.hide();"></div>\
                <div class="li_head">\
                    <div class="li_txt_wrap">\
                        <div class="name">ET MARKETS MOBILE</div>\
                        <div class="desc">Be on top of all stock market moves.</div>\
                    </div>\
                    <div style="clear:both"></div>\
                </div>\
                <div class="li_mobiles"><img src="' + objDomain.img +'/photo/47881401.cms" alt=""/></div>\
                <div class="li_form">\
                    <div class="li_lbl">Download ET Markets App Now!</div>\
                    <div class="li_fields">\
                        <span style="position: relative;left: 50px;font-size: 16px;color: #CCC;">+91- </span>\
                        <input type="text" name="mobile_no" id="mobile_no" class="li_txt" maxlength="10"></input>\
                        <input type="button" value="GET APP" class="li_btn" onclick="leaveIndent.sendMessage();"/>\
                    </div>\
                    <div class="li_message"></div>\
                    <div class="li_separator">\
                        <span class="li_sprite li_left"></span><span class="li_or">OR</span><span class="li_sprite li_right"></span>\
                    </div>\
                    <div class="li_link">\
                        <a target="_blank" onclick="ga(\'send\',\'event\',\'TC_Leaveindent\',\'Select\',\'Google Play Store\');" href="https://itunes.apple.com/in/app/et-markets/id895812527?mt=8"><span class="li_sprite li_apple"></span></a>\
                        <a target="_blank" onclick="ga(\'send\',\'event\',\'TC_Leaveindent\',\'Select\',\'iOS App Store\');" href="https://play.google.com/store/apps/details?id=com.et.market&hl=en"><span class="li_sprite li_play"></span></a>\
                        <a target="_blank" onclick="ga(\'send\',\'event\',\'TC_Leaveindent\',\'Select\',\'Window Store\');" href="https://www.windowsphone.com/en-us/store/app/et-markets/890e6105-499e-4fbd-8383-fef5fc6f6dd3"><span class="li_sprite li_window"></span></a>\
                    </div>\
                </div>\
            </div>\
        </div>'; 
        $('body').append(html);
    },
    show:function () {
        // banner is not shown and subscription layer is not opened
        if(!$.jStorage.get('leave_indent_banner_done') && $('.overlay-bg:visible').length == 0)  {
            $('.li_banner_wrap').show();
            $.jStorage.set('leave_indent_banner_done', 1);
        }
    },
    hide:function () {
        $('.li_banner_wrap').fadeOut();
        ga('send','event','TC_Leaveindent','Select','Close');
    },
    sendMessage:function () {
        // code to send message
    }
}
