/*
const validarNumeroInformado = numero => {
    const resultado = Number.parseFloat(numero);
    if(!resultado){
        console.log(`numero informado nao e valido`);
    }
    return resultado
}
*/
const readLine = require('readline').createInterface({
   input: process.stdin,
   output: process.stdout

});

readLine.question('Digite um Número: ' , (numero) => {
     const  valida = Number.parseFloat(numero);
     if(!valida){
        console.log('Número digitado é invalido');
     }else{
        console.log(`O número digitado é ...  ${valida}`);
     }
     readLine.close();
});
