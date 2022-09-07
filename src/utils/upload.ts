/**
 * 上传文件
 * 基于原生input进行优化
 * @params type 不传返回文件流，传'base64'返回base64格式
 * @params acceptType 上传文件类型
 * @return {object} 上传的文件
 **/
interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}
export const uploadFile = (type?: string, acceptType?: string) => {
  return new Promise((resolve) => {
    const input = document.createElement('input'); // 创建input
    input.type = 'file';
    input.accept = acceptType ? acceptType : 'image/*'; // 上传限制类型
    input.onchange = (e: any) => {
      const file: any = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        if (type == 'base64') {
          resolve({
            name: file.name,
            file: e.target?.result,
          });
        } else {
          resolve(file);
        }
      };
    };
    input.click();
  });
};

/*
  上传统一方法
  @params type 上传文件类型 string
  @params flag 是否支持多个文件上传  boolean
  @params size 上传文件大小(单位为KB) number
*/
export const upload = (type: string, flag: boolean, size: number) => {
  return new Promise((resolve, reject) => {
    const input: any = document.createElement('input');
    input.type = 'file';
    if (flag) input.multiple = 'multiple';
    input.accept = type;
    input.onchange = (e: any) => {
      const files = e.target.files;
      let overSize = true; // 默认不超出
      if (size) {
        // 限制大小
        for (let key in files) {
          if (files[key].size && files[key].size / 1024 > size) {
            overSize = false;
          }
        }
      }
      if (overSize) {
        resolve(files);
      } else {
        reject('上传大小超出限制！');
      }
    };
    input.click();
  });
};
