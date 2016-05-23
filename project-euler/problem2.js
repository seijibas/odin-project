var numero=1;
var ultimo=0;
var penultimo=0;
var soma=0;

while (numero<=4000000) {
  if (numero%2 === 0) {
    soma += numero;
  }
  penultimo = ultimo;
  ultimo = numero;
  numero = ultimo + penultimo;
}

console.log(soma);

