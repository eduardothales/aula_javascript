// var name ="Eduardo Thales";//variavel tipo string nao precisa dizer que é string já entende
// var idade = 30; //já entende que é um número inteiro, se colocar aspas entende que é string
// var frase = "Natal é bonita";
// alert("meu primeiro js " + name);

// console.log(name);
// console.log(frase.replace("é", "foi"));
// console.log(frase.toUpperCase());

//Array

// var lista = ["maçã", "uva", "pera"];
// lista.push("banana");
// //lista.pop(lista[1]); //tira o ultimo elemento
// console.log(lista) //reverse() lista ao contrario lenght tamanho da lista
// console.log(lista.toString()); //perde o array
// console.log(lista.join(" | "))//para nao ficar separado por virbula como na string

//Dicionario

/*var fruta ={nome:"maçã", cor:"vermelha"}
console.log(fruta.cor);
alert(fruta.nome);*/

//Lista de Dicionarios

// var frutas = [{nome:"maçã", cor:"vermelha"}, {nome:"limão", cor:"verde"}, {nome:"uva", cor:"roxa"}]
// console.log(frutas);
// alert(frutas[0].nome);

//Condicionais

// var idade = prompt ("Digite sua idade: ");//exibe uma pergunta para o usuario que é gravado na variavel idade
// //var idade = 15;
// if (idade > 18){
//     alert("maior de idade");
// }else{
//     alert("menor de idade");
// }

// var count = 0;
// while(count<5){
//     //alert("meu nome é eduardo");
//     alert(count);
//     console.log(count);
//     count ++;
// }

// var count;

// for(count=0; count<=2; count++){
//     alert(count);
//     console.log(count);
// };

//Datas

// var da = new Date();
// //alert(da);
// alert(da.getDay());

//Funcoes

// function soma (n1, n2){
//     return n1 + n2;
// }

// alert(soma(5,6));
// console.log(soma(5,2));



// function validaidade(idade){
//     //var validar;
//     if (idade>=18){
//         alert("Entrada Liberada")
//         //validar = true;
//     }else{
//         alert("Entrada Não Autorizada")
//         //validar =  false;
//     }
//     //return validar;

// }
// var idade= prompt ("Digite Aqui sua idade: ");
// (validaidade(idade));


function botao(){
    //alert("Clicado");
    document.getElementById("agradecido").innerHTML = "Obrigado pelo clique";
}

function redirecionar(){
    window.open("https://developer.mozilla.org/");
    //window.location.href = "https://developer.mozilla.org/pt-BR/docs/Aprender/Front-end_web_developer";
}

function mexendo(elemento){
    //document.getElementById("movemouse").innerHTML = "Passou";
    //alert("Trocar texto")
    elemento.innerHTML = "Passou";
}

function voltar(){
    document.getElementById("movemouse").innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Página carregada");
}

function mudar(elemento){
    console.log(elemento.value);
}