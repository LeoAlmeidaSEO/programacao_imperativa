const { listaAluno, adicionarAluno, calcularMedia } = require('./aluno');
const aluno = require('./aluno');
const estudante = require('./estudante');

const Curso = {
    nomeDoCurso: 'Javascript',
    notaDeAprovacao: 7,
    faltasMaximas: 5,
    listaDeEstudantes: aluno.listaAluno,
    adicionarAlunoCurso: function(nome, faltas, notas) {
        aluno.listaAluno.push(aluno.adicionarAluno(nome, faltas, notas));
    },
    aprovacao: function (aluno) {
            if (mediaNota >= Curso.notaDeAprovacao && aluno.faltas < Curso.faltasMaximas) {
                return `O estudante ${aluno.nome} foi Aprovado com ${aluno.faltas} faltas :)`;
            } else if (aluno.faltas === Curso.faltasMaximas && mediaNota > Curso.notaDeAprovacao * 1.1) {
                return `O estudante ${aluno.nome} foi aprovado com ressalvas com ${aluno.faltas} faltas :/`;
            } else {
                return `O estudante ${aluno.nome} foi reprovado com ${aluno.faltas} faltas :(`;
            }            
    },    
    listaAprovados: function() {
        let todos = [];

        aluno.listaAluno.forEach(aluno => {
            todos.push(this.aprovacao(aluno));
        });

        return todos;
    }
}
console.log("----------------------------------------------------");
console.log("---------- Subir aluno dentro de Estudante ---------");
console.log(estudante);

console.log("-----------------------------------");
console.log("---------- Calcular média ---------");
aluno.calcularMedia();

console.log("------------------------------------------------");
console.log("---------- Subir aluno dentro de Curso ---------");
Curso.adicionarAlunoCurso('Mag', 4, [8, 9, 10, 7]);
console.log(estudante);


// Não consegui puxar direto na função de Curso, mas segue regra do passo 6:
// notaDeAprovacao: 7 && faltasMaximas: 5
// --> Calcular aprovação do Aluno <--
console.log("----------------------------------------");
console.log("---------- Regra de Aprovação  ---------");
let aluno_teste = "Aluno Teste";
let media_teste = 8;
let falta_teste = 4;

function aprovacao_teste(aluno_teste) {
    if (media_teste >= Curso.notaDeAprovacao && falta_teste < Curso.faltasMaximas) {
        return `O estudante ${aluno_teste} foi Aprovado :)`;
    } else if ( falta_teste === Curso.faltasMaximas && media_teste > Curso.notaDeAprovacao * 1.1) {
        return `O estudante ${aluno_teste} foi aprovado com ressalvas :/`;
    } else {
        return `O estudante ${aluno_teste} foi reprovado :(`;
    }
};

console.log(aprovacao_teste(aluno_teste));


// Não consegui puxar a media na funcão dentro de curso 
// Abaixo ó código que estava tentando
// (Habilitar dentro de aluno a media com return) && (Comentar códigos anteriores de console.log)  
// const mediaNota = aluno.calcularMedia();

// const aprovados = Curso.listaAprovados();

// aprovados.forEach(aprovado => {
//     console.log(aprovado);
// });










