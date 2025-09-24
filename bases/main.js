define("app", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const batimovil = {
        carroceria: "Negra",
        modelo: "6x6",
        antibalas: true,
        pasajeros: 4
    };
    const bumblebee = {
        carroceria: "Amarillo con negro",
        modelo: "4x2",
        antibalas: true,
        pasajeros: 4,
        disparar() {
            console.log("Disparando");
        }
    };
    const villanos = [{
            nombre: "Lex Luthor",
            edad: 54,
            mutante: false
        }, {
            nombre: "Erik Magnus Lehnsherr",
            edad: 49,
            mutante: true
        }, {
            nombre: "James Logan",
            edad: undefined,
            mutante: true
        }];
    const charles = {
        poder: "psiquico",
        estatura: 1.78
    };
    const apocalipsis = {
        lider: true,
        miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
    };
    let mystique;
    mystique = charles;
    mystique = apocalipsis;
});
define("apps/app", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        const batman = 'Bruce';
        const superman = 'Clark';
        const existe = false;
        const parejaHeroes = [batman, superman];
        const villano = ['Lex Lutor', 5, true];
        const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
        let power;
        (function (power) {
            power[power["acuaman"] = 0] = "acuaman";
            power[power["batman"] = 1] = "batman";
            power[power["flash"] = 5] = "flash";
            power[power["superman"] = 100] = "superman";
        })(power || (power = {}));
        const fuerzaFlash = power.flash;
        const fuerzaSuperman = power.superman;
        const fuerzaBatman = power.batman;
        const fuerzaAcuaman = power.acuaman;
        function activar_batiseñal() {
            return 'activada';
        }
        function pedir_ayuda() {
            console.log('Auxilio!!!');
        }
        const poder = '100';
        const largoDelPoder = poder.length;
        console.log(largoDelPoder);
    })();
});
define("funciones/args-default", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        const fullName = (firstName, lastName, upper = false) => {
            if (upper) {
                return `${firstName} ${lastName || ''}`.toUpperCase();
            }
            return `${firstName} ${lastName || ''}`;
        };
        const name = fullName('Tony');
        console.log({ name });
    });
});
define("funciones/args-required", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        const fullName = (firstName, lastName) => {
            return `${firstName} ${lastName}`;
        };
        const name = fullName('Tony', 'Stark');
        console.log({ name });
    });
});
define("funciones/args.optional", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        const fullName = (firstName, lastName) => {
            return `${firstName} ${lastName || ''}`;
        };
        const name = fullName('Tony');
        console.log({ name });
    });
});
define("funciones/funciones", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        const hero = 'Flash';
        function returnName() {
            return hero;
        }
        ;
        const activateBatiSignal = () => {
            return 'BatiSignal Activated';
        };
    })();
});
define("objetos/objects", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        let flash = {
            name: 'Barry Allen',
            age: 24,
            powers: ['Super velocidad', 'Viajar en el tiempo'],
        };
        let superman = {
            name: 'Clark Ketn',
            age: 60,
            powers: ['Super velocidad'],
        };
        console.log(flash);
    })();
});
define("objetos/type", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        let flash = {
            name: 'Barry Allen',
            age: 24,
            powers: ['Super velocidad', 'Viajar en el tiempo'],
        };
        let superman = {
            name: 'Clark Ketn',
            age: 60,
            powers: ['Super velocidad'],
        };
        console.log(flash);
    })();
});
define("objetos/union-types", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        let myCustomVariable = 'Fernando';
        console.log(myCustomVariable);
        myCustomVariable = 20;
        console.log(myCustomVariable);
        myCustomVariable = {
            name: 'Bruce',
            age: 43,
            powers: ['Ninguno']
        };
        console.log(myCustomVariable);
    })();
});
define("tipos/any", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        let avenger = 123;
        let exists;
        let power;
        avenger = 'DR Strange';
        console.log(avenger.charAt(0));
        avenger = 150.123456;
        console.log(avenger.toFixed(2));
    })();
});
define("tipos/arrays", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const villanos = ['Omega Rojo', 'Dormammu', 'Duende Verde'];
        villanos.forEach(v => console.log(v.toUpperCase()));
    })();
});
define("tipos/booleans", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        let isSuperman = true;
        let isBatman = false;
        isSuperman = (isBatman) ? true : false;
        console.log({ isSuperman });
    })();
});
define("tipos/enums", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        let AudioLevel;
        (function (AudioLevel) {
            AudioLevel[AudioLevel["min"] = 10] = "min";
            AudioLevel[AudioLevel["medium"] = 11] = "medium";
            AudioLevel[AudioLevel["max"] = 9] = "max";
            AudioLevel[AudioLevel["d"] = 10] = "d";
        })(AudioLevel || (AudioLevel = {}));
        ;
        let currentAudio = AudioLevel.d;
        console.log(AudioLevel);
    })();
});
define("tipos/never", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        const error = () => {
            throw new Error('Error');
        };
        error();
    })();
});
define("tipos/null-undefined", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        let nada = undefined;
        console.log(nada);
    });
});
define("tipos/numbers", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        let avengers = 10;
        const villians = 20;
        if (avengers < villians) {
            console.log('Estamos en problemas');
        }
        else {
            console.log('Nos salvamos');
        }
        ;
        avengers = Number('123');
        console.log({ avengers });
    })();
});
define("tipos/strings", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        var _a;
        const batman = 'Batman';
        const lintervaVerde = "Linterna's Verde";
        const volcanNegro = `Heroe Volcan Negro`;
        console.log(` I'm ${batman}`);
        console.log(batman.toUpperCase());
        console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'No esta Prensete');
    })();
});
define("tipos/tupls", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        const hero = ['Dr strange', 100, true];
        hero[0] = 'Iron Man';
        hero[1] = 150;
        hero[2] = false;
        console.log(hero);
    })();
});
define("tipos/void", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        function callBatman() {
        }
        ;
        const a = callBatman();
        console.log(a);
    })();
});
//# sourceMappingURL=main.js.map