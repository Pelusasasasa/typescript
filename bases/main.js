define("abstract", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        class Mutante {
            constructor(name, realName) {
                this.name = name;
                this.realName = realName;
            }
            ;
        }
        ;
        class Xmen extends Mutante {
            salvarMundo() {
                return 'Mundo salvado';
            }
            ;
        }
        ;
        class Villan extends Mutante {
            conquistarMundo() {
                return 'Mundo conquistado';
            }
            ;
        }
        const wolverine = new Xmen('Wolverine', 'Logan');
        const magneto = new Villan('Magneto', 'Magnus');
        console.log(wolverine.salvarMundo());
        console.log(magneto.conquistarMundo());
        const printName = (character) => {
            console.log(character.realName);
        };
        printName(wolverine);
    })();
});
define("basica", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        class Avenger {
            static getAvgAge() {
                return this.name;
            }
            constructor(name, team, realName) {
                this.name = name;
                this.team = team;
                this.realName = realName;
            }
            ;
            bio() {
                return `${this.name} (${this.name})`;
            }
        }
        Avenger.avgAge = 35;
        const antman = new Avenger('AntMan', 'Captain');
        console.log(antman.bio());
    })();
});
define("extends", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        class Avenger {
            constructor(name, realName) {
                this.name = name;
                this.realName = realName;
                console.log('Constructor Avenger llamado!');
            }
            getFullName() {
                return `${this.name} ${this.realName}`;
            }
        }
        class Xmen extends Avenger {
            constructor(name, realName, isMutant) {
                super(name, realName);
                this.name = name;
                this.realName = realName;
                this.isMutant = isMutant;
                console.log('Constructor Xmen llamado');
            }
            get fullName() {
                return `${this.name} - ${this.realName}`;
            }
            ;
            set fullName(name) {
                throw new Error('El nombre debe ser mayor de 3 letras');
                this.name = name;
            }
            getFullnameDesdeXmen() {
                console.log(super.getFullName());
            }
        }
        ;
        const wolverine = new Xmen('Wolverine', 'Logan', true);
        wolverine.fullName = 'Francisco';
    })();
});
define("private-constructor", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        class Apocalipsis {
            constructor(name) {
                this.name = name;
            }
            ;
            static callApocalipsis() {
                if (!Apocalipsis.intance) {
                    Apocalipsis.intance = new Apocalipsis('Soy apocalipsis el uncio');
                }
                ;
                return Apocalipsis.intance;
            }
        }
        ;
        const apocalipsis1 = Apocalipsis.callApocalipsis();
        console.log(apocalipsis1);
    })();
});
//# sourceMappingURL=main.js.map