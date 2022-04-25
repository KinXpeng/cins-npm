"use strict";
/**
 * 上传文件
 * 基于原生input进行优化
 * @params type 不传返回文件流，传'base64'返回base64格式
 * @params acceptType 上传文件类型
 * @return {object} 上传的文件
 **/
// interface HTMLInputEvent extends Event {
//   target: HTMLInputElement & EventTarget;
// }
//  export const uploadFile = (type:string, acceptType:string) => {
//   return new Promise((resolve) => {
//     const input = document.createElement('input'); // 创建input
//     input.type = 'file';
//     input.accept = acceptType ? acceptType : 'image/*'; // 上传限制类型
//     input.onchange = (e?: HTMLInputEvent) => {
//       const file:any = e.target.files[0];
//       const reader = new FileReader();
//       reader.readAsDataURL(file);
//       reader.onload = (e) => {
//         if (type == 'base64') {
//           resolve({
//             name: file.name,
//             file: e.target?.result,
//           });
//         } else {
//           resolve(file);
//         }
//       };
//     };
//     input.click();
//   });
// };
