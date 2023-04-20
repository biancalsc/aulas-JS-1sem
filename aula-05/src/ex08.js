pesos = [0.4, 0.2, 0.1, 0.3];
notas = [8.2, 5.0, 10.0, 9.1];
i = 0;
mult = 0;
soma = 0;
while (i < pesos.length && i < notas.length){
    mult = pesos[i] * notas[i];
    soma  = soma + mult;
    i = i + 1;
}
console.log ("nota final:", soma)