import { r as registerInstance, h } from './index-141d65ae.js';

const myCalculatorCss = "body{font-family:Arial, Helvetica, sans-serif}#calculadora{width:500px;margin:100px auto}#calculadora #botones-container{display:grid;grid-template:repeat(4, 1fr)/repeat(4, 1fr)}#calculadora button{padding:14px 5px}#calculadora #display{border:1px solid black;padding:10px;text-align:right;font-size:48px}";

let MyCalculator = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  componentDidLoad() {
    const botones = [
      ['C', '^', '%', '/'],
      ['7', '8', '9', '*'],
      ['4', '5', '6', '-'],
      ['1', '2', '3', '+'],
      ['+/-', '0', '.', '='],
    ];
    const calculo = {
      operacion: '',
      memoria: undefined,
      numero: 0,
      resuelto: false,
      agregarDigito: function (n) {
        if (this.resuelto) {
          this.resuelto = false;
          this.numero = parseFloat(''.concat(n));
        }
        else {
          this.numero = parseFloat(''.concat(this.numero, n));
        }
        //console.log(this);
      },
      agregarOperacion: function (op) {
        const { operacion, numero, memoria } = this;
        if (numero == 0 && operacion == undefined)
          return false;
        if (operacion == '') {
          this.operacion = op;
          this.memoria = numero;
          this.numero = 0;
        }
        else {
          this.numero = this.resolver();
          this.resuelto = true;
        }
        console.log(this);
      },
      agregarFuncion: function (op) {
        switch (op) {
          case '=':
            const resultado = this.resolver();
            this.agregarFuncion('C');
            this.numero = resultado;
            break;
          case 'C':
            this.numero = 0;
            this.operacion = '';
            this.memoria = undefined;
            this.resuelto = true;
            break;
          case '.':
            if (!esFlotante(this.numero)) {
              this.numero = this.numero + '.';
            }
            break;
          case '+/-':
            this.numero = this.numero * -1;
            break;
        }
        //console.log(this)
      },
      resolver: function () {
        switch (this.operacion) {
          case '+':
            return this.suma();
          case '-':
            return this.resta();
          case '*':
            return this.multiplicacion();
          case '/':
            return this.division();
          case '%':
            return this.porcentaje();
          case '^':
            return this.exponente();
          default:
            throw new Error('Símbolo no identificado');
        }
      },
      render: function (elemento) {
        elemento.textContent = this.numero;
      },
      suma: function () {
        return this.numero + this.memoria;
      },
      resta: function () {
        return this.memoria - this.numero;
      },
      multiplicacion: function () {
        return this.numero * this.memoria;
      },
      division: function () {
        return this.memoria / this.numero;
      },
      porcentaje: function () {
        return this.memoria % this.numero;
      },
      exponente: function () {
        return this.memoria ** this.numero;
      },
    };
    const display = $('#display');
    const botonesContainer = $('#botones-container');
    for (let fila of botones) {
      for (let celda of fila) {
        const boton = document.createElement('button');
        boton.textContent = celda;
        boton.addEventListener('click', e => {
          if (esNumero(celda)) {
            calculo.agregarDigito(celda);
          }
          else if (esFuncion(celda)) {
            calculo.agregarFuncion(celda);
          }
          else {
            calculo.agregarOperacion(celda);
          }
          calculo.render(display);
        });
        botonesContainer.appendChild(boton);
      }
    }
    function esNumero(n) {
      return !isNaN(n);
    }
    function esFlotante(n) {
      if (n.toString().indexOf('.') >= 0) {
        return true;
      }
      else {
        return false;
      }
    }
    function esFuncion(n) {
      const funciones = ['C', '=', '.', '+/-'];
      return funciones.some(caracter => caracter === n);
    }
    function $(selector) {
      return document.querySelector(selector);
    }
    function $$(selector) {
      return document.querySelectorAll(selector);
    }
  }
  render() {
    return (h("div", { id: "calculadora" }, h("div", { id: "display" }, "0"), h("div", { id: "botones-container" })));
  }
};
MyCalculator.style = myCalculatorCss;

export { MyCalculator as my_calculator };
