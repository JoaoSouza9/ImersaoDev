function listarFilmesNaTela(filme){
  var listafilmes = document.querySelector('#listaFilmes');
  var elementoFilme = "<img src=" +filme +">";
  listafilmes.innerHTML = listafilmes.innerHTML + elementoFilme;
}
function adicionarFilme() {
  var campoFilmeFavorito = document.querySelector('#filme');
  var filmeFavorito = campoFilmeFavorito.value;
  if(filmeFavorito.endsWith(".jpg")){
    listarFilmesNaTela(filmeFavorito);
  } else{
    alert("O endereço da imagem não é válido!");
  }
  campoFilmeFavorito.value = "";
}
