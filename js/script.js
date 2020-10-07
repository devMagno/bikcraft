if(window.SimpleSlide) {
  new SimpleSlide({
    slide: 'quote',
    time: 5000, 
  })
  
  new SimpleSlide({
    slide: 'portfolio',
    time: 5000,
    nav: true,
  })
}
if(window.SimpleAnime) {
  new SimpleAnime();
}
if(window.SimpleForm){
  new SimpleForm({
    form: ".formphp", // seletor do formulário
    button: "#send", // seletor do botão
    erro: "<div id='form-error'><h2>Erro no envio!</h2><p>Um erro ocorreu, tente enviar uma mensagem para o nosso email: contato@bikcraft.com.</p></div>", // mensagem de erro
    sucesso: "<div id='form-success'><h2>Formulário enviado com sucesso!</h2><p>Nossa equipe entrará em contato com você em breve.</p></div>", // mensagem de sucesso
  });
}