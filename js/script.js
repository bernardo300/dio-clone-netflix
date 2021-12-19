function mudarPrincipal(titulo, img) {
  let fundo = document.querySelector('.filme-principal');
  let title = document.querySelector('.tituloh1');
  fundo.style.background = `url(/img/${img})`;
  fundo.style.backgroundSize = `100vh`;
  fundo.style.backgroundPosition = `center`;
  title.textContent = titulo;
}
