// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = 'Buen dia, Senores';

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 10;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  return(str); // "Return" la string provista: str
  // Tu código:
  
}

function suma(x, y) {
  
  var sumatoria = x + y;;// "x" e "y" son números
              // Suma "x" e "y" juntos y devuelve el valor
  return(sumatoria);// Tu código:
  
}

function resta(x, y) {
  var rest = x - y;
  return (rest);// Resta "y" de "x" y devuelve el valor
  // Tu código:
  
}

function multiplica(x, y) {
  var mult = x * y;// Multiplica "x" por "y" y devuelve el valor
  return (mult);// Tu código:
  
}

function divide(x, y) {
 var divv = x / y;   // Divide "x" entre "y" y devuelve el valor
 return divv;  // Tu código:
  
}

function sonIguales(x, y) {
  if (x == y){  // Devuelve "true" si "x" e "y" son iguales
    return true;// De lo contrario, devuelve "false"
  }  // Tu código:
  
  return false;
}



function tienenMismaLongitud(str1, str2) {
 if (str1 == str2){ // Devuelve "true" si las dos strings tienen la misma longitud
    return true; // De lo contrario, devuelve "false"
    }    // Tu código:
  return false;
}

function menosQueNoventa(num) {
  if (num < 90){ // Devuelve "true" si el argumento de la función "num" es menor que noventa
    return true; // De lo contrario, devuelve "false"
    } 
  else{            // Tu código:
    return false;             
  }
}

function mayorQueCincuenta(num) {
  if (num > 50){  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
    return true;  // De lo contrario, devuelve "false"
    }             // Tu código:
  return false;
}

function obtenerResto(x, y) {
  var mod = x % y; // Obten el resto de la división de "x" entre "y"
  return (mod);  // Tu código:
  
}

function esPar(num) {
  if (num % 2 == 0){ // Devuelve "true" si "num" es par
    return true;
    }// De lo contrario, devuelve "false"
  return false;// Tu código:
}

function esImpar(num) {
  if (num % 2 == 1){ // Devuelve "true" si "num" es impar
    return true;  // De lo contrario, devuelve "false"
    }  // Tu código:
  return false;
}

function elevarAlCuadrado(num) {
  var pote = num * num;
  return (pote);  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  
}

function elevarAlCubo(num) {
  var pote2 = num * num * num; // Devuelve el valor de "num" elevado al cubo
  return (pote2);  // Tu código:
  
}

function elevar(num, exponent) {
  var potn = Math.pow(num, exponent);// Devuelve el valor de "num" elevado al exponente dado en "exponent"
  return potn;  // Tu código:
  
}

function redondearNumero(num) {
  var num = Math.round (num);// Redondea "num" al entero más próximo y devuélvelo
  return (num);// Tu código:
  
}

function redondearHaciaArriba(num) {
  var num = Math.ceil(num);// Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  return num;// Tu código:
  
}

function numeroRandom() {
  return Math.random();//Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  
}

function esPositivo(numero) { //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  if (numero === 0){            //Si el número es positivo, devolver ---> "Es positivo"
      return false
    }
  
  else if (numero > 0){
  
      return "es positivo";
    }
  
  else {

    return "es negativo";
    }
  
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  
}

function agregarSimboloExclamacion(str) {
   return str + '!';// Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
}

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
  var comb = nombre + ' ' + apellido;
  return comb;
}

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  var saludo = 'Hola, '+ nombre + '!';
  return saludo;
}

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
  var form = alto * ancho;
  return form;
}


function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  var perim = lado * 4;
  return perim;
}


function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
  var func = (base * altura) / 2;
  return func;
}


function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  var camiar = euro * 1.2;
  return camiar;
}


function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aquí
  if (letra.length > 1){
    return "Dato incorrecto";
  }
  if (letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u'){
    return "Es vocal";
  }
  return "Dato incorrecto";
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
