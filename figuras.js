//CUADRADO
console.group("cuadrado");
function perimetroCuadrado(lado) {
  return lado * 4;
}

function areaCuadrado(lado) {
  return lado * lado;
}
console.groupEnd();


//TRIANGULO
console.group("triangulo");
function perimetroTriangulo(ladoTriangulo1, ladoTriangulo2, baseTriangulo) {
  return ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
}

function areaTriangulo(baseTriangulo, alturaTriangulo) {
  console.log( (baseTriangulo * alturaTriangulo) / 2);
  return (baseTriangulo * alturaTriangulo) / 2;
}
console.groupEnd();

//CIRCULO
console.group("Circulo");
const PI = Math.PI;

function diametroCirculo(radioCirculo) {
  return radioCirculo * 2;
}

function perimetroCirculo(radioCirculo) {
  const diametro = diametroCirculo(radioCirculo);
  console.log(diametro);
  return diametro * PI;
}

function areaCirculo(radioCirculo) {
  return radioCirculo * radioCirculo * PI;
}
console.groupEnd();

// PARA EL CUADRADO
function calcularPerimetroCuadrado(){
  const input = document.getElementById("inputCuadrado");
  const value = input.value;
  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}

function calcularAreaCuadrado(){
  const input = document.getElementById("inputCuadrado");
  const value = input.value;
  const area = areaCuadrado(value);
  alert(area);
}

// PARA TRIANGULO
function calcularPerimetroTriangulo(){
  const valor1 = document.getElementById("inputTrianguloL1");
  const valor2 = document.getElementById("inputTrianguloL2");
  const valor3 = document.getElementById("inputTrianguloBase");
  const inputTrianguloL1 =  valor1.value;
  const inputTrianguloL2 =  valor2.value;
  const inputTrianguloBase = valor3.value;
  const perTrianulo = perimetroTriangulo(inputTrianguloL1,inputTrianguloL2,inputTrianguloBase);
  alert(perTrianulo);
}

function calcularAreaTriangulo(){
  const v1 = document.getElementById("inputTrianguloBase");
  const v2 = document.getElementById("inputTrianguloAltura");
  const baseT = v1.value;
  const alturaT = v2.value;
  const areaT = areaTriangulo(baseT,alturaT);
  alert(areaT);
}

function isocelesArea (){
  /*
    Lados 8
    base 3
    altura 6
  */
  const vIso1 = document.getElementById("inputTrianguloBase");
  //const vIso2 = document.getElementById("inputTrianguloAltura");
  const vIso3 = document.getElementById("inputTrianguloL1");
  const vIso4 = document.getElementById("inputTrianguloL2");

  const vIsocelesBase = vIso1.value;
  //const vIsocelesAlt = vIso2.value;
  const vIsocelesL1 = vIso3.value;
  const vIsocelesL2 = vIso4.value;
  if(vIsocelesL1 === vIsocelesL2){
    const  areaIso = (vIsocelesBase *  Math.sqrt(Math.pow(vIsocelesL1,2) - (Math.pow(vIsocelesBase,2) / 4)))/2   
    alert(areaIso);
  }
  else{
     const noIsoceles = "No es un ISOCELES"
     alert(noIsoceles);
  }
 

}


//PARA FORM CIRCULO
function calcularDiametroCirculo(){
const v1Circulo = document.getElementById("inputRadio");
const radioC = v1Circulo.value;
const diametroC = diametroCirculo(radioC);
alert(diametroC);

}
function calcularPerimetroCirculo(){
  const v1CP = document.getElementById("inputRadio");
  const v1CirculoP = v1CP.value;
  const perimetroC = perimetroCirculo(v1CirculoP);
  alert(perimetroC);
}
function calcularAreaCirculo(){
  const v1CA = document.getElementById("inputRadio");
  const v1CirculoP2 = v1CA.value;
  const areaC = areaCirculo(v1CirculoP2);
  alert(areaC);
}
