var t={urlParams:function(t){for(var e=window.location.search.substring(1).split("&"),n=0;n<e.length;n++){var r=e[n].split("=");if(r[0]==t)return r[1]}return""},dateOfDays:function(t){t||(t=0);var e=(new Date).getTime(),n=new Date(e-864e5*t),r=String(n.getMonth()+1);r=Number(r)>=10?r:"0"+r;var o=String(n.getDate());return o=Number(o)>=10?o:"0"+o,n.getFullYear()+"-"+r+"-"+o}},e=function(){return new Promise((function(t,e){navigator.geolocation?navigator.geolocation.getCurrentPosition((function(e){var n=e.coords.latitude,r=e.coords.longitude;t({lat:n,lng:r})}),(function(){e("获取位置失败")})):e("您的设备不支持当前地理位置信息获取")}))};var n={isVehicleNumber:function(t){return/^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼]{1}[A-Z]{1}(([A-HJK]{1}[A-HJ-NP-Z0-9]{1}[0-9]{4})|([0-9]{5}[A-HJK]{1})|(?=(.*[A-HJ-NP-Z]){0,2})(?=(.*[0-9]){3,5})[A-HJ-NP-Z0-9]{5})$/.test(t)},isTrailerNumber:function(t){return/^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领]{1}[A-Z]{1}[A-Z0-9]{4}[挂]{1}$/.test(t)},isMobilePhone:function(t){return/^((13[0-9])|(14[0,1,4-9])|(15[0-3,5-9])|(16[2,5,6,7])|(17[0-8])|(18[0-9])|(19[0-3,5-9]))[0-9]{8}$/.test(t)},isIDNumber:function(t){return!!(/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/.test(t)||/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[X])$/.test(t)||/^E\d{8}$/.test(t)||/^SE\d{7}$/.test(t)||/^DE\d{7}$/.test(t)||/^PE\d{7}$/.test(t)||/^MA[A-Z0-9]{7}$/.test(t)||/^K[A-Z0-9]{7}$/.test(t))},isEmail:function(t){return/^[A-Za-z0-9._%-]+@([A-Za-z0-9-]+.)+[A-Za-z]{2,4}$/.test(t)},isValidAccount:function(t){return/^[a-zA-Z][a-zA-Z0-9_]{4,15}$/.test(t)},isStrongPassword:function(t){return/^(?=.d)(?=.[a-z])(?=.*[A-Z]).{8,16}$/.test(t)},isHexColor:function(t){return/^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/.test(t)}},r=function(t,e,n){n||(n=30);var r=new Date;r.setTime(r.getTime()+60*n*1e3);var o="expires="+r.toUTCString();document.cookie=t+"="+e+";"+o+";path=/"},o={set:r,get:function(t){var e=t+"=",n=document.cookie.split(";").filter((function(t){return t.includes(e)}));return n.length?n[0].substring(e.length,n[0].length):""},clear:function(t){r(t,"",-1)}},i={get:function(t){return localStorage.getItem(t)},set:function(t,e){return localStorage.setItem(t,e)},clear:function(t){return localStorage.removeItem(t)}};export{t as cins,o as cookie,e as getLocation,n as regex,i as token};
