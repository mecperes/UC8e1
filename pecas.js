let readlineSync = require('readline-Sync'); 
var nomepeca; 
var pesopeca; 
var capacidade = 11; 

if(capacidade < 10){ 
    nomepeca = readlineSync.question("Digite o nome da peca: "); 
    if(nomepeca.length > 3){ 
        pesopeca = readlineSync.question("Digite o peso da peca: "); 
        if(pesopeca < 100){ 
            console.log("Peça nao cadastrada, peso inválido"); 
        }else{ 
            console.log("Peça cadastrada com sucesso!!"); 
        } 
    }else{ 
        console.log("Nome da peça inválido. Tente novamente com um nome maior. "); 
    } 
}else{ 
    console.log("Capacidade máxima atingida, impossível cadastrar novas peças."); 

} 