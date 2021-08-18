var valorEstrangeiro = prompt("Digite o valor do produto na moeda estrangeira:")
var nomeMoeda = prompt("Digite o nome da moeda:")
alert("O valor do produto em "+ nomeMoeda+" é "+valorEstrangeiro)
var valorCambio = prompt("Digite o valor do câmbio da moeda desejada")

var valorReal = parseFloat(valorEstrangeiro) * parseFloat(valorCambio)

valorReal = valorReal.toFixed(2)
alert("O valor do produto em reais é R$"+valorReal)
