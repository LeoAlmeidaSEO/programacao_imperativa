const aluno = require('./aluno');
const estudante = require('./estudante');

const Curso = {
    nomeDoCurso: 'Javascript',
    notaDeAprovacao: 6,
    faltasMaximas: 5,
    listaDeEstudantes: estudante,
    adicionarAlunoCurso: function(nome, faltas, notas) {
        this.listaDeEstudantes.push({ 
            nome: nome,
            faltas: faltas,
            notas: notas
        });
    },
    aprovacao: function (estudante) {
        let mediaNota = aluno.calcularMedia(estudante);

        if (
            mediaNota >= this.notaDeAprovacao && 
            estudante.faltas < this.faltasMaximas
        ) {
            return `Estudante ${estudante.nome} foi Aprovado com a média de: ${mediaNota} :)`;
        } else if (
            estudante.faltas === this.faltasMaximas &&
            mediaNota > this.notaDeAprovacao * 1.1
        ) {
            return `Estudante ${estudante.nome} foi aprovado com ressalvas e com a média de: ${mediaNota} :/`;
        } else {
            return `Estudante ${estudante.nome} foi reprovado com a média de: ${mediaNota} :(`;
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
console.log(Curso.listaDeEstudantes);

console.log("------------------------------------------------");
console.log("---------- Subir aluno dentro de Curso ---------");
Curso.adicionarAlunoCurso('Mag', 4, [8, 9, 10, 7]);
console.log(Curso.listaDeEstudantes);

// notaDeAprovacao: 7 && faltasMaximas: 5
// --> Calcular aprovação do Aluno <--
console.log("----------------------------------------");
console.log("---------- Regra de Aprovação  ---------");

const aprovados = Curso.listaAprovados();

aprovados.forEach(aprovado => {
    console.log(aprovado);
});