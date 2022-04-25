// setCookie
var set = function (cname, cvalue, extime) {
    //默认30分钟
    if (!extime) {
        extime = 30;
    }
    var d = new Date();
    d.setTime(d.getTime() + extime * 60 * 1000);
    var expires = 'expires=' + d.toUTCString();
    document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
};
// getCookie
var get = function (name) {
    var nameString = name + '=';
    var value = document.cookie.split(';').filter(function (item) {
        return item.includes(nameString);
    });
    if (value.length) {
        return value[0].substring(nameString.length, value[0].length);
    }
    else {
        return '';
    }
};
// clearCookie
var clear = function (name) {
    set(name, '', -1);
};
export var cookie = {
    set: set,
    get: get,
    clear: clear,
};
