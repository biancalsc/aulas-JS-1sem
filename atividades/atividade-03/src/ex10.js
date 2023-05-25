function fatorial(nro) {
    if(nro < 0){
        return NaN;
    }
    let total = 1;
    for (let i = 1; i <= nro; i++) {
      total *= i;
    }
    return total;
  }

let r = fatorial(5);
console.log("Fatorial:", r);
r = fatorial(-2);
console.log("Fatorial:", r);
