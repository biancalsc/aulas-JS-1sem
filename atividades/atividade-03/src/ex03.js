function imprimir(a,b){
    if( b < a){
        let temp = b;
        b = a;
        a = temp;
    }
    for(; a <= b; a++){
        console.log( a );
    }
}

imprimir(5,10);

imprimir(19,15);