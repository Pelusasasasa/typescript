var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
define("desestructuracion", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        const avengers = {
            nick: 'Samuel L. Jackson',
            ironman: 'Robert Downey Jr',
            vision: 'Paul Bettany',
            activo: true,
            poder: 1500
        };
        const printAvenger = (_a) => {
            var { ironman } = _a, resto = __rest(_a, ["ironman"]);
            (console.log(ironman, resto));
        };
        printAvenger(avengers);
    });
});
define("let-var", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        const NOMBRE = 'Fernando';
        const getName = () => {
            console.log(' Viejo GetName');
        };
    });
});
//# sourceMappingURL=main.js.map