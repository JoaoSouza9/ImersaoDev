var primeiroValor = prompt("Digite o primeiro valor")
var segundoValor = prompt("Digite o segundo valor:")
primeiroValor = parseInt(primeiroValor)
segundoValor = parseInt(segundoValor)
var resultado = 0
var operacao = prompt("Digite a operação que deseja realizar (Soma, Subtração, Divisão ou Multiplicação):")
/*if (operacao != "Soma" || operacao != "Subtração"|| operacao != "Divisão"|| operacao != "Multplicação" ){
  document.write("<h2>"+"Escolha uma operação válida!"+"</h2>");
}*/
if (operacao == "Soma"){
  resultado = primeiroValor + segundoValor
  document.write("<h2>"+ primeiroValor + " + " + segundoValor + " = " + resultado+ "</h2>")
}
else if (operacao == "Subtração"){
  resultado = primeiroValor - segundoValor
  document.write("<h2>"+ primeiroValor + " - " + segundoValor + " = " + resultado +"</h2>")
}
else if (operacao == "Divisão"){
  resultado = primeiroValor / segundoValor
  document.write("<h2>" +primeiroValor + " / " + segundoValor + " = " + resultado+ "</h2>")
}
else if (operacao == "Multiplicação"){
  resultado = primeiroValor * segundoValor
  document.write("<h2>"+ primeiroValor + " x " + segundoValor + " = " + resultado +"</h2>")
} else{
  document.write("<h2>"+"Opção inválida!"+"</h2>")
  // é possível fazer da forma document.write("<h2>Opção inválida!</h2>"), escrevendo direto direto, sem o "mais" ou aspas duplas, pois é um único elemento dentro da tag.
}
