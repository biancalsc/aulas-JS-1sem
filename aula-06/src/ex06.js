function somatorio(lista){
    soma = 0
    pos = 0
    while( pos < lista.length ){
      soma = soma + lista[pos]
      pos = pos + 1
    }
    return soma
  }
  
  numeros = [8,3,4,7,5]
  s = somatorio(numeros)
  console.log("Somatório:", s)
  
  numeros = [5,4,3]
  s = somatorio(numeros)
  console.log("Somatório:", s)