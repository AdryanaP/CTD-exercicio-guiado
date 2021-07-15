// Importanto de função construtora e suas instancias
let { Aluno, felipe, vinny, pedru } = require("./aluno");
// Importando array de estudantes
let estudantes = require("./estudantes");

// Criando objeto curso
let curso = {
  nome: "CTD",
  notaAprovacao: 7,
  faltasMaximas: 2,
  estudantes: [felipe, vinny],

  adicionarAluno: (aluno) => curso.estudantes.push(aluno),

  // Função que calcula se o aluno está ou não aprovado
  alunoStatus: (aluno) => {
    let media = aluno.calcularMedia();
    let faltas = aluno.qtdFaltas;
    let dezPorcento = curso.notaAprovacao * 0.1;

    if (media >= curso.notaAprovacao && faltas < curso.faltasMaximas) {
      return true;
    } else if (
      faltas === curso.faltasMaximas &&
      media >= curso.notaAprovacao + dezPorcento
    ) {
      return true;
    } else {
      return false;
    }
  },

  // Função que calcula a aprovação de todos os elementos do array estudantes
  // e retorna um array com os resultados
  listaStatus: () =>
    curso.estudantes.map((elemento) => curso.alunoStatus(elemento)),
  // listaStatus: () => {
  //     let resultado = [];
  //     curso.estudantes.forEach((elemento) => {
  //       resultado.push(curso.alunoStatus(elemento));
  //     });
  //     return resultado;
  // }
};

// Array de estudantes antes de adicionar novos estudantes
console.log(curso.estudantes);

// Adicionando novo estudante ao array estudantes
curso.adicionarAluno(pedru);

// Array após adicionar novo estudante
console.log(curso.estudantes);

// Conferindo aprovação do estudante pedru
console.log(curso.alunoStatus(pedru));

// Listando a aprovação de todos os elementos do array estudantes
console.log(curso.listaStatus());

// Substituindo o array atual de estudantes pelo array importado do modulo estudantes
curso.estudantes = estudantes;

// Imprimindo o novo array de estudantes
console.log(curso.estudantes);

// console.log(curso.alunoStatus(dry));

// Imprimindo a nova lista de aprovação dos elementos do array de estudantes
console.log(curso.listaStatus());
