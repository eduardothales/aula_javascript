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

var lista = [“Alemanha”, “Inglaterra”, “Escócia”]
lista.push(“Polônia”);
lista.pop(“Inglaterra”);