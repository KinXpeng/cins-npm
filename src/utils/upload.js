export var uploadFile = function (type, acceptType) {
    return new Promise(function (resolve) {
        var input = document.createElement('input'); // 创建input
        input.type = 'file';
        input.accept = acceptType ? acceptType : 'image/*'; // 上传限制类型
        input.onchange = function (e) {
            var file = e.target.files[0];
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function (e) {
                var _a;
                if (type == 'base64') {
                    resolve({
                        name: file.name,
                        file: (_a = e.target) === null || _a === void 0 ? void 0 : _a.result,
                    });
                }
                else {
                    resolve(file);
                }
            };
        };
        input.click();
    });
};
