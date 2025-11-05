const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => ) {
button.addEventListener('click', function(){
const atual = document.querySeletor('ativo');
const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

atual.classlist.remove('ativo');
document.getElementaryById(proximoPasso).classlist.add('ativo');
  })
})
