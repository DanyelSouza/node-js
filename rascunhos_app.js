/*Primeira aula de node.js */
/*STDIN ("entrada padrão", ou seja, seu teclado),*/
/*
 O readlinemódulo fornece uma interface para
 leitura de dados de um fluxo legível (como process.stdin) 
 uma linha por vez.
 */
 /*
 const readline = require('readline');
 const rl = readline.createInterface({
	input : process.stdin,
	output : process.stdout	 
 });
 
 rl.question('What is your name ? ',(name) =>{
	console.log(`My name is ${name}!`);
	rl.close();
 });

*/

const readline = require('readline').createInterface({
	input : process.stdin,
    output : process.stdout

});

readline.question('Vou fazer uma pergunta :' , (pergunta) => {
	console.log(`Minha Pergunta é ${pergunta}`);
	readline.close();

});


 
 

