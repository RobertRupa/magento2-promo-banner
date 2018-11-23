/**
 * Promotion banner on popup and in cart
 *
 * @package Konatsu_PromoBanner
 * @author Robert Rupa <robert@konatsu.pl>
 * @license OSL-3.0, AFL-3.0
 */
define('jquery', function($) {
    if(!checkCookie("popup-cookie")){
        $('.promo-banner-popup').show();
    }
    $('.banner-close').click(function(){
        $('.promo-banner-popup').hide();
        setCookie("popup-cookie", true, 30);
    });
    }(jQuery)
);

function setCookie(cname, cvalue, exmins) {
    var d = new Date();
    d.setTime(d.getTime() + (exmins*60*1000)); //exdays*24*60*60*1000
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie(cookie) {
    var cookie = getCookie(cookie);
    if (cookie != "") {
        return true;
    } else {
        return false;
    }
}
