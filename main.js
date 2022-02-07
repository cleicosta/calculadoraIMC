
const calcular = document.getElementById('calc');


//usando evento de click

function imc(){
    //colocando os elementos em variáveis
    const resultado = document.getElementById('res');
    //colocando os valores dos alementos em variaveis *value*
    const altura = document.getElementById('alt').value;
    const peso = document.getElementById('pes').value;

    if (altura == '' || peso ==''){
        resultado.textContent = "Preecha todos os campos!";

       
        
    } else{
        const valorIMC = (peso/(altura*altura)).toFixed(1);

        let tabela = '';

        if(valorIMC <18){
            tabela = "e você está abaixo do peso ideal.";
        }else if(valorIMC <25){
            tabela = "e você está no peso ideal.";
        }else if(valorIMC <30){
            tabela = "e você está acima do peso.";
        }else if(valorIMC<40){
            tabela = "e você com obesidade.";
        }else if(valorIMC>40){
            tabela = "e você está com obesidade grave.";
        }

        resultado.textContent = `Seu IMC é ${valorIMC} ${tabela}`;
        
    }   


}

//criando um evento de click

calcular.addEventListener('click', imc);
