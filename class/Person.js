//Esta clase instanciara la clase del modulo
const Calculadora = require('../submodule/calculadora/calculator');

class Person {

    constructor(name, montoTotal) {
        this.calculadora = new Calculadora();
        this.name = name;
        this.montoTotal = montoTotal;
    }

    showPerson() {
        console.log(`Nombre: ${this.name} -> Monto total: ${this.montoTotal}`);
    }

    retirar(retiro) {
        console.log('Selecciono retiro');
        this.montoTotal = this.calculadora.resta(this.montoTotal, retiro)
        console.log(`Su nuevo monto es: ${this.montoTotal}`);
    }

    consignar(Montoconsignar) {
        console.log('Selecciono consignación');
        this.montoTotal = this.calculadora.suma(this.montoTotal, Montoconsignar)
        console.log(`Su nuevo monto es: ${this.montoTotal}`);
    }
}

module.exports = Person;
