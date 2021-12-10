const { listaAluno } = require('./aluno');
const aluno = require('./aluno');

aluno.adicionarAluno('Leo', 0, [8, 6, 5, 8]);
aluno.adicionarAluno('Wesley', 1, [2, 4, 8, 8]);
aluno.adicionarAluno('Juan', 2, [10, 8, 9, 8]);

module.exports = aluno.listaAluno;

