// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro) //1
  // Tu código:
  var i= array[0];
  return(i);
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array//2
  // Tu código:
  var j= array.pop();
  return(j);
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array //3
  // Tu código:
  var k= array.length;
  return(k);
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)//4
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for (var i=0; i<array.length; i++){
    if(array[i]===Math.ceil(array[i]) || array[i]===Math.floor(array[i])){
      array[i]=array[i]+1;
    }else{
      return('La matriz debe ser de números enteros')
    }
  } 
 return(array);
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array//5
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return(array);
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array//6
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return(array);
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas//7
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  
  return(palabras.join(' '));

}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"//8
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for (m=0; m<array.length; m++){
    if(array[m]===elemento){
      return(true);
    }   
  }
  return(false);
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)//9
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var suma=0;
  for (b=0; b<numeros.length; b++){
    if(numeros[b]===Math.ceil(numeros[b]) || numeros[b]===Math.floor(numeros[b])){
      suma += numeros[b];
    }
  }
  return(suma);
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)//10
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var sumas=0;
  for (a=0; a<resultadosTest.length; a++){
    if(resultadosTest[a]===Math.ceil(resultadosTest[a]) || resultadosTest[a]===Math.floor(resultadosTest[a])){
      sumas += resultadosTest[a];
    }
  }
  return(sumas/resultadosTest.length);
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)//11
  // Devuelve el número más grande
  // Tu código:
  var maximo= numeros[0];
  for (i=1; i<numeros.length; i++){
    if(numeros[i]>maximo){
      maximo=numeros[i];
    }
  }
  return(maximo);
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  if(arguments.length<1){
    return(0);
  }else{
    var producto=1;
    for(i=0; i<arguments.length; i++){
      producto=producto*arguments[i];
    }
  }
  return(producto)
}




function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo, cuyo valor sea mayor a 18.
  //Escribe tu código aquí
  var cont= 0;
  for(var i=0; i<arreglo.length; i++){
    if(arreglo[i]>18){
      cont++;
    }
  }
  return(cont);
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  if(numeroDeDia===1|| numeroDeDia===7){
    return('Es fin de semana');
  }else if (numeroDeDia===2|| numeroDeDia===3 || numeroDeDia===4|| numeroDeDia===5 || numeroDeDia===6){
    return('Es dia Laboral');
  }
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var NumText=n.toString();
  if(NumText[0]==='9'){
    return(true);
  }else{
    return(false);
  }
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí 
  var Comp= arreglo[0];
  var cont=1;
  for( i=1; i<arreglo.length; i++){
    if(Comp===arreglo[i]){
      cont++;
    }
  }
  if(cont===arreglo.length){
    return(true);
  }else{
    return(false);
  }
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var NewArray= []
  for(var i=0; i<array.length; i++){
    if(array[i]==='Enero' || array[i]==='Marzo'|| array[i]==='Noviembre'){
      NewArray.push(array[i]);
    }
  }
    if(NewArray.length===3){
      return(NewArray);
    }else{
      return('No se encontraron los meses pedidos');
    }
}



function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var NewArray= [];
  for(var i=0; i<array.length; i++){
    if(array[i]>100){
      NewArray.push(array[i]);
    }
  }
  return(NewArray);
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var array = [];
  var suma = numero;
  for(var i= 0; i<10; i++) {
    suma = suma + 2;
    if(suma === i) break;
    else {
      array.push(suma);
    }
  }
  if(i < 10) {
    return 'Se interrumpió la ejecución';
  }
  else {
      return array;
  }
}
 
   

function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  //Tu código:
  var array=[];
  var cont=0;
  for(var i=1; i<10; i++){
    numero=numero+2;
    array.push(numero);
    cont++;
   if(cont===5){
      continue;
   }
  }
  return(array);
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
