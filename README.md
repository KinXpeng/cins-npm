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

- 生成二维码（暂停使用）

  ```js
  // node为承载二维码信息的dom节点，info为二维码信息
  cins.qrCode(node, info);
  ```

- 判断某天是否为工作日：`cins.isWeekday`

  ```js
  const result = cins.isWeekday('2022-07-08');
  console.log(result); // true
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
