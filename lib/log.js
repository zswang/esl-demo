define(function(require, exports, modules) {
    var div = document.querySelector('div');
    modules.exports = function(msg) {
        var p = document.createElement('p');
        p.textContent = msg;
        div.appendChild(p);
    };
});
