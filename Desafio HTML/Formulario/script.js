const btn = document.querySelector("#btn");

btn.addEventListener("click", function(e){
  e.preventDefault();
  
  const nome = document.querySelector("#nome")
  const email = document.querySelector("#email")
  const mensagem = document.querySelector("#mensagem")

  const valueNome = nome.value
  const valueEmail = email.value
  const valueMensagem = mensagem.value

  if(valueNome == "" || valueEmail == "" || valueMensagem == ""){
    throw new Error('Formulario incompleto')
  }

  if(valueEmail.search("@")==-1){
    throw new Error('E-mail incorreto')
  }

  try{
    console.log(`Nome completo: ${valueNome}`)
    console.log(`E-mail: ${valueEmail} `)
    console.log(`Mensagem: ${valueMensagem}`)
  }catch(error){
      console.log(error.message)
  }
})