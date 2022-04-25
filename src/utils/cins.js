/**
 * 获取地址栏参数
 * @param name 获取参数的name
 * @return value 参数值
 * */
var urlParams = function (name) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (pair[0] == name) {
            return pair[1];
        }
    }
    return '';
};
/**
 *
 * @param days 天数，选填，默认为0，days为0时返回当前日期，days为1时返回一天前日期
 * @return date 几天前的日期
 * */
// 日期初始化
var dateOfDays = function (days) {
    if (!days) {
        days = 0;
    }
    var date = new Date();
    var currentdate;
    // 七天前日期
    var nowTime = date.getTime();
    var endTime = nowTime - 24 * 60 * 60 * 1000 * days;
    var endDate = new Date(endTime);
    var Month = String(endDate.getMonth() + 1);
    Month = Number(Month) >= 10 ? Month : '0' + Month;
    var Day = String(endDate.getDate());
    Day = Number(Day) >= 10 ? Day : '0' + Day;
    currentdate = endDate.getFullYear() + '-' + Month + '-' + Day;
    return currentdate;
};
export var cins = {
    urlParams: urlParams,
    dateOfDays: dateOfDays,
};
