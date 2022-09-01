/**
 * 获取地址栏参数
 * @param name 获取参数的name
 * @return value 参数值
 * */
const urlParams = (name: string): string | null => {
  let obj = new URLSearchParams(location.search);
  if (obj.get(name)) {
    return obj.get(name);
  } else {
    return '';
  }
};

/**
 *
 * @param days 天数，选填，默认为0，days为0时返回当前日期，days为1时返回一天前日期
 * @return date 几天前的日期
 * */
const dateOfDays = (days: number): string => {
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
 *
 * 判断某天是否是工作日
 * @param date 日期
 * @return boolean
 * */
const isWeekday = (date: any): boolean => {
  return date.getDay() % 6 !== 0;
};

export const cins: object = {
  urlParams,
  dateOfDays,
  isWeekday,
};
