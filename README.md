# Cins 常用方法库

## 安装

#### `npm i cins` 或 `yarn add cins`

### 如何使用

```js
// 示例
import { getLocation } from 'cins';

getLocation().then((res) => {
  console.log(res);
});
```

## 常用方法

### Promise 类

#### 1. 获取当前位置 `getLocation`

- 返回 Object 结构的经纬度参数

```js
getLocation().then((res) => {
  console.log(res);
});
```

#### 2.上传文件 `uploadFile`

- 默认返回文件流
- 接收两个参数，非必填。
  1. type 为空或者 `normal` 时返回文件流，可选参数 `base64`
  2. acceptType 上传文件类型，accept 中的值为参数，不填是默认`image/*`，可选参数如下：

| 序号 | accept 类型                  |
| ---- | ---------------------------- |
| 1    | image/\*                     |
| 2    | video/\*                     |
| 3    | audio/\*                     |
| 4    | image/gif, image/jpeg        |
| 5    | application/msword           |
| 6    | application/pdf              |
| 7    | application/poscript         |
| 8    | application/rtf              |
| 9    | application/x-zip-compressed |
| 10   | audio/basic                  |
| 11   | audio/x-aiff                 |
| 12   | audio/x-mpeg                 |
| 13   | audio/x-pn/realaudio         |
| 14   | audio/x-waw                  |
| 15   | image/gif                    |
| 16   | image/jpeg                   |
| 17   | image/tiff                   |
| 18   | image/x-ms-bmp               |
| 19   | image/x-photo-cd             |
| 20   | image/x-png                  |
| 21   | image/x-portablebitmap       |
| 22   | image/x-portable-greymap     |
| 23   | image/x-portable-pixmap      |
| 24   | image/x-rgb                  |
| 25   | text/html                    |
| 26   | text/plain                   |
| 27   | video/quicktime              |
| 28   | video/x-mpeg2                |
| 29   | video/x-msvideo              |

- 使用方法

```js
uploadFile('normal', 'image/*').then((res) => {
  console.log(res);
});
```

### 返回值类

#### 1.常用正则校验 `regex`

- 车牌号校验 ：`isVehicleNumber`

  - 使用方法

    ```js
    // 返回值：布尔类型
    let str = '京A12345';
    regex.isVehicleNumber(str); // => true
    ```

- 挂车车牌号：`isTrailerNumber`

- 手机号校验：`isMobilePhone`

- 证件号校验：`isIDNumber`

- 邮箱格式校验：`isEmail`

- 账号是否合法（字母开头，允许 5-16 字节，允许字母数字下划线）：`isValidAccount`

- 强密码（必须包含大小写字母和数字的组合，不能使用特殊字符，长度在 8-16 之间）：`isStrongPassword`

- 十六进制颜色：`isHexColor`

- 整数：`isInteger`

- 非负整数(正整数+0)：`isNonNegativeInteger`

- 正整数：`isPositiveInteger`

- 正浮点数：`isFPNumber`

- 非负浮点数(正浮点数+0)：`isNonNegFloatNumber`

#### 2.cins 常用方法

- 获取 url 参数：`cins.urlParams`

  ```js
  const result = cins.urlParams(key);
  console.log(result); //
  ```

- 获取几天前或几天后的日期：`cins.dateOfDays`

  ```js
  // days不传默认返回当天日期，传正数返回几天前日期，负数返回几天后日期
  const result = cins.dateOfDays(days);
  console.log(result); // 2022-04-25
  ```

- 判断某天是否为工作日：`cins.isWeekday`

  ```js
  const result = cins.isWeekday('2022-07-08');
  console.log(result); // true
  ```

- 校验数据类型：`cins.typeOf`

  ```js
  const result = cins.typeOf([]);
  console.log(result); // array
  ```

- 防抖：`cins.debounce`

  ```js
  cins.debounce(fn,500); // fn为需要执行防抖的函数
  ```

- 节流：`cins.throttle`

  ```js
  cins.debounce(fn,500); // fn为需要执行节流的函数
  ```

- 手机号脱敏：`cins.hideMobile`

  ```js
  /**
   * @param mobile 手机号
   * @return mobile 已脱敏的手机号
   * */
  const result = cins.hideMobile(13122223333);
  console.log(result); // 131****3333
  ```

- 开启全屏：`cins.typeOf`

  ```js
  /**
   * @param element 开启全屏的dom
   * */
  let dom = this.$refs.dom;
  cins.launchFullscreen(dom);
  ```

- 关闭全屏：`cins.exitFullscreen`

  ```js
  cins.exitFullscreen();
  ```

- 大小写转换：`cins.turnCase`

  ```js
  /**
   * @param str 待转换的字符串
   * @param type 1-全大写 2-全小写 3-首字母大写
   * @return str
   * */
  const result = cins.turnCase('AssfafSDss',1);
  console.log(result); // ASSFAFSDSS
  ```

- 解析URL参数：`cins.getSearchParams`

  ```js
  /**
   * @return Object
   * */
  // localhost:80?id=1&name=2
  const result = cins.getSearchParams();
  console.log(result); // {id:'1',name:'2'}
  ```

- 判断手机是Andoird还是IOS：`cins.getOSType`

  ```js
  const result = cins.getOSType();
  console.log(result); // ios/android/other
  ```

- 数组对象根据字段去重：`cins.uniqueArrayObject`

  ```js
  /**
   * @param arr 要去重的数组
   * @param key 根据去重的字段名
   * @return arr
   * */
  const responseList = [
      { id: 1, name: '树哥' },
      { id: 2, name: '黄老爷' },
      { id: 3, name: '张麻子' },
      { id: 1, name: '黄老爷' },
      { id: 2, name: '张麻子' },
      { id: 3, name: '树哥' },
      { id: 1, name: '树哥' },
      { id: 2, name: '黄老爷' },
      { id: 3, name: '张麻子' },
  ]
  
  const result = cins.uniqueArrayObject(responseList, 'id')
  console.log(result); // [{ id: 1, name: '树哥' },{ id: 2, name: '黄老爷' },{ id: 3, name: '张麻子' }]
  ```

- 滚动到页面顶部：`cins.scrollToTop`

  ```js
  cins.scrollToTop();
  ```

- 滚动到元素位置：`cins.smoothScroll`

  ```js
  /**
   * @param element 元素dom
   * */
  cins.hideMobile(dom);
  ```

- 生成uuid：`cins.uuid`

  ```js
  const result = cins.uuid();
  console.log(result); // e350sf34-651f-5c68-fg47-e3451f9bdfsc
  ```

- 模糊搜索：`cins.fuzzyQuery`

  ```js
  /**
   * @param list 原数组
   * @param keyWord 查询的关键词
   * @param attribute 数组需要检索属性
   * @return arr
   * */
  const list = [
    { id: 1, name: '树哥' },
    { id: 2, name: '黄老爷' },
    { id: 3, name: '张麻子' },
    { id: 4, name: '汤师爷' },
    { id: 5, name: '胡万' },
    { id: 6, name: '花姐' },
    { id: 7, name: '小梅' }
  ]
  const result = cins.hideMobile(list, '树', 'name');
  console.log(result);  // [{id: 1, name: '树哥'}]
  ```

- 遍历树节点：`cins.foreachTree`

  ```js
  /**
   * @param data 树数据
   * @param callback 回调函数
   * @param childrenName 子节点数组
   * */
  let result
  foreachTree(data, (item) => {
    if (item.id === 9) {
      result = item
    }
  })
  console.log('result', result)  // {id: 9,label: "三级 1-1-1"}   
  ```

#### 3.cookie 设置

```js
import { cookie } from 'cins';
cookie.set(cname, cvalue, extime);
cookie.get(cname);
cookie.clear(cname);
```

#### 4.token 设置

```js
// token存储在localStorage
import { token } from 'cins';
token.set(key, value);
token.get(key);
token.clear(key);
```
