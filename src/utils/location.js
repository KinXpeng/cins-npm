/**
 * 经纬度获取
 * 基于h5的获取位置进行优化
 * @return {object} 参数的值
 * 获取位置时会有授权弹窗提示
 **/
export var getLocation = function () {
    return new Promise(function (resolve, reject) {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var latitude = position.coords.latitude;
                var longitude = position.coords.longitude;
                var data = {
                    lat: latitude,
                    lng: longitude,
                };
                resolve(data);
            }, function () {
                reject('获取位置失败');
            });
        }
        else {
            reject('您的设备不支持当前地理位置信息获取');
        }
    });
};
