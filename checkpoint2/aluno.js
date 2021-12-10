const Aluno = {
    listaAluno: [],
    nome: null,
    faltas: 0,
    notas: [],
    adicionarAluno: function(nome, faltas, notas) {
        this.nome = nome;
        this.faltas = faltas;
        this.notas = notas;

        const aluno = {
            nome: this.nome,
            faltas: this.faltas + 1, 
            notas: this.notas
        }

        this.listaAluno.push(aluno);
    },
    aumentarFaltas: function() {
        this.faltas ++;
    },

    calcularMedia: function(aluno) {
        let total = 0;

        aluno.notas.forEach(nota => {
            total += nota;
        });

        // Estava tentando exibir essa média na função do curso.
        // ** Habilitar essa função abaixo, para testar a função curso
        return (total/aluno.notas.length);
        
        // console.log(`A média do ${aluno.nome} é ${total/aluno.notas.length}`); 
    },
    exportarLista: function() {
        return this.listaAluno;
    }

}

module.exports = Aluno;