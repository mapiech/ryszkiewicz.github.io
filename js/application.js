var App = {

    initialize: function() {

        var _this = this;

        $(document).on('click', '.prevent', function(e) {
            e.preventDefault();
        });

        $(document).on('click', '.scroll', function(e) {
            e.preventDefault();
            object = $(this);
            $.scrollTo($(object.data('target')), 400, {
                offset: -70,
                onAfter: function() {
                    $('#navbarTop').collapse('hide');
                }
            });
        })

        $(document).ready(function() {

            _this.cookie();

            if(SmartPhone.isAny()) {
                _this.mobile();
            }

        });

    },

    mobile: function() {
        call_link = $('.call');
        call_link.prop('href', 'tel:' + call_link.data('phone'));
        call_link.removeClass('prevent').addClass('mobile');
    },

    cookie: function() {
        var sName = "cookiesok";

        $(document).on('click', "#close-cookie-warn", function(){
            var oExpire = new Date();
            oExpire.setTime((new Date()).getTime() + 3600000*24*365);
            document.cookie = sName + "=1;expires=" + oExpire;
            $("#cookie-warn").hide();
        });

        var sStr = '; '+ document.cookie +';';
        var nIndex = sStr.indexOf('; '+ escape(sName) +'=');

        if (nIndex === -1) {
            $("#cookie-warn").show();
        }
    }



}

App.initialize();