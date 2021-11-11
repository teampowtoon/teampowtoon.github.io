"use strict";
BigNumber.config({DECIMAL_PLACES: 2, ROUNDING_MODE: BigNumber.ROUND_HALF_UP});
var FMT_ENTERO = "0,0",
FMT_MONEDA = "$0,0.00",
forma = document.getElementById("forma"),
op1= document.getElementById("salidaOperador1"),
op2= document.getElementById("salidaOperador2");
//Mandar error de formato
Node.prototype.error = function (mensaje) {
this.className = "error";
this.textContent = mensaje;
};
Node.prototype.info = function (mensaje) {
this.className = "";
this.textContent = mensaje;
};
forma.addEventListener("submit", procesa, false);
forma["limpiar"].addEventListener("click", limpiar, false);
function procesa() {
var op1 = parseInt(forma["entero1"].value),
op2 = parseInt(forma["entero2"].value),
error = false;
if (isNaN(op1)) {
error = true;
salidaOperador1.error("NUMERO 1 Incorrecto");
}
if (isNaN(op2)) {
error = true;
salidaOperador2.error("NUMERO 2 Incorrecto");
}
if (!error) {
salidaNumero1.info("SUMA = " + numeral(op1 + op2).format(FMT_MONEDA));
salidaNumero2.info("RESTA = " + numeral(op1 - op2).format(FMT_MONEDA));
multiplica.info("MULTIPLICACION = " + numeral(op1 * op1).format(FMT_MONEDA));
divide.info("DIVISION = " + numeral(op1 / op2).format(FMT_MONEDA));
}
}
function limpiar(){
forma["entero1"].value = "";
forma["entero2"].value = "";
salidaNumero1.textContent="";
salidaNumero2.textContent="";
multiplica.textContent="";
divide.textContent="";
}