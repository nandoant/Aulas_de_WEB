"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(_nome, _anoNascimento) {
        this._nome = _nome;
        this._anoNascimento = _anoNascimento;
    }
    Object.defineProperty(Person.prototype, "anoNascimento", {
        get: function () {
            return this._anoNascimento;
        },
        set: function (value) {
            this._anoNascimento = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        set: function (value) {
            this._nome = value;
        },
        enumerable: false,
        configurable: true
    });
    Person.prototype.calculaIdade = function () {
        return Math.floor(new Date().getFullYear() - this._anoNascimento);
    };
    return Person;
}());
exports.Person = Person;
