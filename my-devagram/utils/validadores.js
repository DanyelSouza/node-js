const validarNome = (nome) => {
    return nome?.ToString().length > 2;
  
  //  era validar se a variavel existe e se tem valor 
  // caso tenha converte para string e faz a comparação se a variavel é maior q 2

}

const validarEmail = (email) =>{
    const emailStr = email?.toString()
    return emailStr.length >= 5 && emailStr.includes('@') && emailStr.includes('.')
    // varifica se na sting email se tem o @ e o ponto ( . )
}
const validarSenha = (senha) => {
    return senha?.toString().length > 3
}
const validarConfirmacaoSenha = (senha, confirmacao)=>{
    return validarSenha(senha) && senha === confirmacao 
}

export {
    validarNome,
    validarEmail,
    validarSenha,
    validarConfirmacaoSenha
}