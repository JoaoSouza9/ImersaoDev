var numeroSecreto = parseInt(Math.random() * 10);
do{
  var chute = parseInt(prompt("Digite um número entre 0 e 10"))
  if (numeroSecreto == chute){
    alert("Você acertou o número!");
  } else if (numeroSecreto != chute){
    alert("Você errou o número secreto, tente novamente!");
    if (chute < numeroSecreto){
     alert("Tente um número maior");
    } else{
     alert("Tente um número menor")
    }
}
} while (chute != numeroSecreto);
  alert("Você acertou o número!");
