/**
 * 经纬度获取
 * 基于h5的获取位置进行优化
 * @return {object} 参数的值
 * 获取位置时会有授权弹窗提示
 **/

 export const getLocation = () => {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          let latitude = position.coords.latitude;
          let longitude = position.coords.longitude;
          let data = {
            lat: latitude,
            lng: longitude,
          };
          resolve(data);
        },
        () => {
          reject('获取位置失败');
        }
      );
    } else {
      reject('您的设备不支持当前地理位置信息获取');
    }
  });
};
