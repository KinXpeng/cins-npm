var get = function (TOKEN_KEY) { return localStorage.getItem(TOKEN_KEY); };
var set = function (TOKEN_KEY, token) { return localStorage.setItem(TOKEN_KEY, token); };
var clear = function (TOKEN_KEY) { return localStorage.removeItem(TOKEN_KEY); };
export var token = {
    get: get,
    set: set,
    clear: clear,
};
