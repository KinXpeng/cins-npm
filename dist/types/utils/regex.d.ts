/**
 * 用于各种正则校验
 */
/**
 * 校验是否为车牌号（不含挂车）
 * 暂不支持特种车辆校验
 * @param str
 * @returns
 */
declare function isVehicleNumber(str: string): boolean;
/**
 * 校验是否为挂车牌号
 * @param str
 * @returns
 */
declare function isTrailerNumber(str: string): boolean;
/**
 *	大陆手机号码11位数，匹配格式：前三位固定格式+后8位任意数
 *	此方法中前三位格式有：
 * 13+任意数
 * 145,147,149
 * 15+除4的任意数(不要写^4，这样的话字母也会被认为是正确的)
 * 166
 * 17+3,5,6,7,8
 * 18+任意数
 * 198,199
 */
declare function isMobilePhone(str: string): boolean;
/**
 * 校验证件号
 * @returns
 */
declare function isIDNumber(str: string): boolean;
/**
 * 校验邮箱格式是否正确
 * @param str
 * @returns
 */
declare function isEmail(str: string): boolean;
/**
 * 帐号是否合法(字母开头，允许5-16字节，允许字母数字下划线)
 * @param str
 * @returns
 */
declare function isValidAccount(str: string): boolean;
/**
 * 强密码(必须包含大小写字母和数字的组合，不能使用特殊字符，长度在8-16之间)：
 * @param str
 * @returns
 */
declare function isStrongPassword(str: string): boolean;
/**
 * 校验是否为十六进制颜色
 * @param str
 * @returns
 */
declare function isHexColor(str: string): boolean;
/**
 * 校验是否为整数
 * @param str
 * @returns
 */
declare function isInteger(str: string): boolean;
/**
 * 校验是否为非负整数(正整数+0)
 * @param str
 * @returns
 */
declare function isNonNegativeInteger(str: string): boolean;
/**
 * 校验是否为正整数
 * @param str
 * @returns
 */
declare function isPositiveInteger(str: string): boolean;
/**
 * 校验是否为正浮点数
 * @param str
 * @returns
 */
declare function isFPNumber(str: string): boolean;
/**
 * 校验是否为非负浮点数(正浮点数+0)
 * @param str
 * @returns
 */
declare function isNonNegFloatNumber(str: string): boolean;
export declare const regex: {
    isVehicleNumber: typeof isVehicleNumber;
    isTrailerNumber: typeof isTrailerNumber;
    isMobilePhone: typeof isMobilePhone;
    isIDNumber: typeof isIDNumber;
    isEmail: typeof isEmail;
    isValidAccount: typeof isValidAccount;
    isStrongPassword: typeof isStrongPassword;
    isHexColor: typeof isHexColor;
    isInteger: typeof isInteger;
    isNonNegativeInteger: typeof isNonNegativeInteger;
    isPositiveInteger: typeof isPositiveInteger;
    isFPNumber: typeof isFPNumber;
    isNonNegFloatNumber: typeof isNonNegFloatNumber;
};
export {};
