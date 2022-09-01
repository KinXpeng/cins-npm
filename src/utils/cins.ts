/**
 * 获取地址栏参数
 * @param name 获取参数的name
 * @return value 参数值
 * */
export const urlParams = (name: string): string | null => {
  let obj = new URLSearchParams(location.search);
  if (obj.get(name)) {
    return obj.get(name);
  } else {
    return '';
  }
};

/**
 * @param days 天数，选填，默认为0，days为0时返回当前日期，days为1时返回一天前日期
 * @return date 几天前的日期
 * */
export const dateOfDays = (days?: number): string => {
  if (!days) {
    days = 0;
  }
  let date: Date = new Date();
  let currentdate;
  // n天前日期
  let nowTime: number = date.getTime();
  let endTime: number = nowTime - 24 * 60 * 60 * 1000 * days;
  let endDate: Date = new Date(endTime);
  let Month: string = String(endDate.getMonth() + 1);
  Month = Number(Month) >= 10 ? Month : '0' + Month;
  let Day: string = String(endDate.getDate());
  Day = Number(Day) >= 10 ? Day : '0' + Day;
  currentdate = endDate.getFullYear() + '-' + Month + '-' + Day;
  return currentdate;
};

/**
 * 判断某天是否是工作日
 * @param date 日期
 * @return boolean
 * */
export const isWeekday = (date: any): boolean => {
  return date.getDay() % 6 !== 0;
};

/**
 * 校验数据类型
 * @param obj 数据
 * @return string type
 * */
export const typeOf = (obj: any): string => {
  return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
};

/**
 * 防抖
 * @param function 需要防抖的函数
 * @param time 防抖时间间隔
 * */
export const debounce = (() => {
  let timer: any = null;
  return (callback: () => void, wait: number = 800) => {
    timer && clearTimeout(timer);
    timer = setTimeout(callback, wait);
  };
})();

/**
 * 节流
 * @param function 需要节流的函数
 * @param time 节流时间间隔
 * */
export const throttle = (() => {
  let last: number = 0;
  return (callback: () => void, wait: number = 800) => {
    let now = +new Date();
    if (now - last > wait) {
      callback();
      last = now;
    }
  };
})();

/**
 * 手机号脱敏
 * @param mobile 手机号
 * @return mobile 已脱敏的手机号
 * */
export const hideMobile = (mobile: number | string) => {
  return String(mobile).replace(/^(\d{3})\d{4}(\d{4})$/, '$1****$2');
};

/**
 * 开启全屏
 * @param element 开启全屏的dom
 * @return void
 * */
export const launchFullscreen = (element: any) => {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen();
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullScreen();
  }
};

/**
 * 关闭全屏
 * @return void
 * */
export const exitFullscreen = () => {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if ((document as any).msExitFullscreen) {
    (document as any).msExitFullscreen();
  } else if ((document as any).mozCancelFullScreen) {
    (document as any).mozCancelFullScreen();
  } else if ((document as any).webkitExitFullscreen) {
    (document as any).webkitExitFullscreen();
  }
};

/**
 * 大小写转换
 * @param str 待转换的字符串
 * @param type 1-全大写 2-全小写 3-首字母大写
 * @return str
 * */
export const turnCase = (str: string, type: number) => {
  switch (type) {
    case 1:
      return str.toUpperCase();
    case 2:
      return str.toLowerCase();
    case 3:
      //return str[0].toUpperCase() + str.substr(1).toLowerCase() // substr 已不推荐使用
      return str[0].toUpperCase() + str.substring(1).toLowerCase();
    default:
      return str;
  }
};

/**
 * 解析URL参数
 * @return Object
 * */
export const getSearchParams = () => {
  const searchPar: any = new URLSearchParams(window.location.search);
  const paramsObj: any = {};
  for (const [key, value] of searchPar.entries()) {
    paramsObj[key] = value;
  }
  return paramsObj;
};

/**
 * 判断手机是Andoird还是IOS
 * @return type * 1: ios 2: android 3: 其它
 * */
export const getOSType = (): string => {
  let u = navigator.userAgent;
  let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1;
  let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
  if (isIOS) {
    return 'ios';
  }
  if (isAndroid) {
    return 'android';
  }
  return 'other';
};

/**
 * 数组对象根据字段去重
 * @param arr 要去重的数组
 * @param key 根据去重的字段名
 * @return arr
 * */
export const uniqueArrayObject = (arr: Array<any> = [], key: string) => {
  if (arr.length === 0) return;
  let list: Array<any> = [];
  const map: any = {};
  arr.forEach((item) => {
    if (!map[item[key]]) {
      map[item[key]] = item;
    }
  });
  list = Object.values(map);
  return list;
};

/**
 * 滚动到页面顶部
 * */
export const scrollToTop = () => {
  const height: number = document.documentElement.scrollTop || document.body.scrollTop;
  if (height > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, height - height / 8);
  }
};

/**
 * 滚动到元素位置
 * @param element 元素dom
 * */
export const smoothScroll = (element: HTMLElement) => {
  (document as any).querySelector(element).scrollIntoView({
    behavior: 'smooth',
  });
};

/**
 * uuid
 * @return uuid
 * */
export const uuid = () => {
  const temp_url = URL.createObjectURL(new Blob());
  const uuid = temp_url.toString();
  URL.revokeObjectURL(temp_url); //释放这个url
  return uuid.substring(uuid.lastIndexOf('/') + 1);
};

/**
 * 模糊搜索
 * @param list 原数组
 * @param keyWord 查询的关键词
 * @param attribute 数组需要检索属性
 * @return arr
 * */
export const fuzzyQuery = (list: Array<any>, keyWord: string, attribute: string) => {
  const reg = new RegExp(keyWord);
  const arr = [];
  for (let i = 0; i < list.length; i++) {
    if (reg.test(list[i][attribute])) {
      arr.push(list[i]);
    }
  }
  return arr;
};

/**
 * 遍历树节点
 * @param data 树数据
 * @param callback 回调函数
 * @param childrenName 子节点数组
 * */
export const foreachTree = (data: Array<any>, callback: (params: any) => void, childrenName = 'children') => {
  for (let i = 0; i < data.length; i++) {
    callback(data[i]);
    if (data[i][childrenName] && data[i][childrenName].length > 0) {
      foreachTree(data[i][childrenName], callback, childrenName);
    }
  }
};
