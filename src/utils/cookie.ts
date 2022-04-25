// setCookie
const set = (cname:string, cvalue:string, extime:number) => {
  //默认30分钟
  if(!extime){extime = 30;}
  var d = new Date();
  d.setTime(d.getTime() + extime * 60 * 1000);
  var expires = 'expires=' + d.toUTCString();
  document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
};

// getCookie
const get = (name:string):string => {
  const nameString = name + '=';
  const value = document.cookie.split(';').filter((item) => {
    return item.includes(nameString);
  });

  if (value.length) {
    return value[0].substring(nameString.length, value[0].length);
  } else {
    return '';
  }
};

// clearCookie
const clear = (name:string) => {
  set(name, '', -1);
};

export const cookie = {
  set,
  get,
  clear,
};
