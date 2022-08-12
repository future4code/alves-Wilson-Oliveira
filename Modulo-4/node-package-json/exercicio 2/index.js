// Crie uma aplicação Node que recebe uma string representando uma operação matemática e dois valores numéricos.
//  O retorno deverá ser o resultado da operação selecionada utilizando os 2 valores fornecidos.

const operador=process.argv[2]
    switch(process.argv[2]){
        case "add" :
            console.log(Number(process.argv[3])+Number(process.argv[4]));
            break;
            case "sub" :
                console.log(Number(process.argv[3])-Number(process.argv[4]));
                break;
                case "mult":
                    console.log(Number(process.argv[3])*Number(process.argv[4]));
                    break;
                    case "div" :
                        console.log(Number(process.argv[3])/Number(process.argv[4]));
                        break;


    }
    


