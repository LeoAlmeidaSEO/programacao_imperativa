//Menu microondas 

let menu = {
    pipoca: 10,
    macarrao: 8,
    carne: 15,
    feijao: 12,
    brigadeiro: 8 
};

function menuMicroondas (segundos, prato) {
    if (prato !== menu.pipoca && prato !== menu.macarrao && prato !== menu.carne && prato !== menu.feijao && prato !== menu.brigadeiro) {
        return "Prato inexistente!";
    } else if (segundos > 3*prato) {
        return "Kabumm! ";
    } else if (segundos > 2*prato) {
        return "Comida queimou! :(";
    } else if (segundos < prato) {
        return "Tempo insuficiente!";
    } else if (segundos == prato) {
        return "Prato ponto, bom apetite!!! (tempo exato)";
    } else {
        return "Prato pronto, bom apetite!!! (passou do tempo):D";
    }
}

//prencher campo 1: segundos 
//prencher campo 2: menu.nomePrato ex: menu.feijao
//pratos disponiveis (pipoca, macarrao, carne, feijao e brigadeiro)
let segundos = 50;
let prato = menu.brigadeiro;

console.log(menuMicroondas(segundos,prato));

//Funções de cada enunciado :)

//function maior2x (segundos, prato) {
//    if (segundos > 2*prato) {
//        return "Comida queimou!";
//    } else {
//        return "Prato OK!";
//    }
//};

//function tempoInsuficiente (segundos, prato) {
//    if (segundos < prato) {
//        return "Tempo insuficiente";
//    } else {
//        return "Prato OK!";
//    }
//}

//function maior3x (segundos, prato) {
//    if (segundos > 3*prato) {
//        return "Kabumm!";
//    } else {
//        return "Prato OK!";
//    }
//};


//function pratoPronto (prato) {
//    if (prato !== menu.feijao && menu.pipoca) {
//        return "Algo de errado não está certo";
//    } else {
//        return "Prato pronto!";
//    }
//}
//
//console.log(pratoPronto(menu.feijao));
