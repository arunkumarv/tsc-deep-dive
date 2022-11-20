var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var PopUpInfo = /** @class */ (function (_super) {
    __extends(PopUpInfo, _super);
    function PopUpInfo() {
        var _this = _super.call(this) || this;
        var shadow = _this.attachShadow({ mode: 'open' });
        var info = document.createElement('span');
        info.setAttribute('class', 'info');
        var text = _this.getAttribute('message');
        info.textContent = text;
        var style = document.createElement('style');
        style.textContent = "\n                .info {\n                    border: 1px solid green;\n                    padding: 10px;\n                    background-color: #ffd9d9;\n                }\n            ";
        shadow.appendChild(style);
        shadow.appendChild(info);
        return _this;
    }
    return PopUpInfo;
}(HTMLElement));
