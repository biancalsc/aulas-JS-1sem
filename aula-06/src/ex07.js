function inverter(lista){
    pos = lista.length - 1
    while( pos >= 0 ){
      console.log(pos, ":", lista[pos])
      pos = pos - 1
    }
  }
  
  console.log("Lista:")
  numeros = [8,3,4,7,5]
  inverter(numeros)
  
  console.log("\nLista:")
  numeros = [5,4,3]
  inverter(numeros)