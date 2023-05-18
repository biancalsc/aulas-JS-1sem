let nros = "19,11,5,10,20";
let soma = 0;
nros = nros.split(",");

for(let i = 0; i < nros.length; i++ ){
    num = parseInt(nros[i]);
    soma += num;
}
console.log("Somatório:", soma);