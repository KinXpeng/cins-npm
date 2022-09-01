/**
 * 获取地址栏参数
 * @param name 获取参数的name
 * @return value 参数值
 * */
export declare const urlParams: (name: string) => string | null;
/**
 * @param days 天数，选填，默认为0，days为0时返回当前日期，days为1时返回一天前日期
 * @return date 几天前的日期
 * */
export declare const dateOfDays: (days?: number | undefined) => string;
/**
 * 判断某天是否是工作日
 * @param date 日期
 * @return boolean
 * */
export declare const isWeekday: (date: any) => boolean;
/**
 * 校验数据类型
 * @param obj 数据
 * @return string type
 * */
export declare const typeOf: (obj: any) => string;
/**
 * 防抖
 * @param function 需要防抖的函数
 * @param time 防抖时间间隔
 * */
export declare const debounce: (callback: () => void, wait?: number) => void;
/**
 * 节流
 * @param function 需要节流的函数
 * @param time 节流时间间隔
 * */
export declare const throttle: (callback: () => void, wait?: number) => void;
/**
 * 手机号脱敏
 * @param mobile 手机号
 * @return mobile 已脱敏的手机号
 * */
export declare const hideMobile: (mobile: number | string) => string;
/**
 * 开启全屏
 * @param element 开启全屏的dom
 * @return void
 * */
export declare const launchFullscreen: (element: any) => void;
/**
 * 关闭全屏
 * @return void
 * */
export declare const exitFullscreen: () => void;
/**
 * 大小写转换
 * @param str 待转换的字符串
 * @param type 1-全大写 2-全小写 3-首字母大写
 * @return str
 * */
export declare const turnCase: (str: string, type: number) => string;
/**
 * 解析URL参数
 * @return Object
 * */
export declare const getSearchParams: () => any;
/**
 * 判断手机是Andoird还是IOS
 * @return type * 1: ios 2: android 3: 其它
 * */
export declare const getOSType: () => string;
/**
 * 数组对象根据字段去重
 * @param arr 要去重的数组
 * @param key 根据去重的字段名
 * @return arr
 * */
export declare const uniqueArrayObject: (arr: any[] | undefined, key: string) => any[] | undefined;
/**
 * 滚动到页面顶部
 * */
export declare const scrollToTop: () => void;
/**
 * 滚动到元素位置
 * @param element 元素dom
 * */
export declare const smoothScroll: (element: HTMLElement) => void;
/**
 * uuid
 * @return uuid
 * */
export declare const uuid: () => string;
/**
 * 模糊搜索
 * @param list 原数组
 * @param keyWord 查询的关键词
 * @param attribute 数组需要检索属性
 * @return arr
 * */
export declare const fuzzyQuery: (list: Array<any>, keyWord: string, attribute: string) => any[];
/**
 * 遍历树节点
 * @param data 树数据
 * @param callback 回调函数
 * @param childrenName 子节点数组
 * */
export declare const foreachTree: (data: Array<any>, callback: (params: any) => void, childrenName?: string) => void;
