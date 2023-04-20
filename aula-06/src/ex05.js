function inverte (nome){
    r = "";
    i = nome.length - 1;
    while (i >= 0){
        r = r + nome[i];
        i = i - 1;
    }
    return r;
}

r = inverte ("Pedro");
console.log("Invertido:", r);

r = inverte ("Mariana");
console.log("Invertido:", r);


/*
OUTRA FORMA DE FAZER ESSE EXERCÍCIO

function inverte (nome){
    r = "";
    i = 0;
    while (i >= 0){
        r = nome[i] + r;
        i = i + 1;
    }
    return r;
}

r = inverte ("Pedro");
console.log("Invertido:", r);

r = inverte ("Mariana");
console.log("Invertido:", r);
*/