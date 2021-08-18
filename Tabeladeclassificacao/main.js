function mostraAtributosDosJogadores(Jogadores){
  var html = "";
  for (var i = 0; i < Jogadores.length; i++){
    html += "<tr><td>" + Jogadores[i].Nome +"</td>"
    html += "<td>" + Jogadores[i].Vitorias +"</td>"
    html += "<td>" + Jogadores[i].Empates +"</td>"
    html += "<td>" + Jogadores[i].Derrotas +"</td>"
    html += "<td>" + Jogadores[i].Pontos +"</td>"
    html += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
    html += "<td><button onClick='adicionarEmpate("+ i + ")''>Empate</button></td>"
    html += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td></tr>"
  }
  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = html;
}
function calculaPontos(jogador){
  var Pontos = 0;
  Pontos = ((jogador.Vitorias * 3) + (jogador.Empates * 1));
  return Pontos;
}
function adicionarVitoria(i){
  var Jogador = Jogadores[i]
  Jogador.Vitorias += 1;
  Jogador.Pontos = calculaPontos(Jogador);
  mostraAtributosDosJogadores(Jogadores);
}
function adicionarEmpate(i){
  var Jogador = Jogadores[i]
  Jogador.Empates += 1;
  Jogador.Pontos = calculaPontos(Jogador);
  mostraAtributosDosJogadores(Jogadores);
}
function adicionarDerrota(i){
  var Jogador = Jogadores[i]
  Jogador.Derrotas += 1;
  mostraAtributosDosJogadores(Jogadores)
}
function newPlayer(Nome, Vitorias, Empates, Derrotas, Pontos) {
  this.Nome = Nome;
  this.Vitorias = Vitorias;
  this.Empates = Empates;
  this.Derrotas = Derrotas;
  this.Pontos = Pontos;
}
function addJogadores(){
  var NovoJogador = new newPlayer("Fulano", 0, 0, 0, 0);
  NovoJogador.Nome = prompt("Qual o nome do novo jogador?");
  NovoJogador.Vitorias = parseInt(prompt("Qual a quantidade de vitórias do novo jogador?"));
  NovoJogador.Empates = parseInt(prompt("Qual a quantidade de empates do novo jogador?"));
  NovoJogador.Derrotas = parseInt(prompt("Qual a quantidade de derrotas do novo jogador?"));
  NovoJogador.Pontos = parseInt(prompt("Qual a quantidade de pontos do novo jogador?"));
  Jogadores.push(NovoJogador);
  mostraAtributosDosJogadores(Jogadores);
}
var Jogador1 = {
  Nome: "João",
  Vitorias: 2,
  Empates: 5,
  Derrotas: 3,
  Pontos: 0
}
var Jogador2 = {
  Nome: "Fulano",
  Vitorias: 3,
  Empates: 5,
  Derrotas: 2,
  Pontos: 0
}

Jogador1.Pontos = calculaPontos(Jogador1)
Jogador2.Pontos = calculaPontos(Jogador2)
var Jogadores = [Jogador1, Jogador2]
mostraAtributosDosJogadores(Jogadores)

do{
  var add = prompt("Deseja adicionar um novo jogador? Responda com Sim ou Não")
  if (add == "Sim"){
    addJogadores();
  } else{
    break;
  }
} while (add == "Sim")
