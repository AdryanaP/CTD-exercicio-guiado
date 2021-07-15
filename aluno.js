// Função construtora
function Aluno(nome, qtdFaltas, notas) {
  this.nome = nome;
  this.qtdFaltas = qtdFaltas;
  this.notas = notas;

  //   this.calcularMedia = () => {
  //     let soma = 0;
  //     for (let i = 0; i < this.notas.length; i++) {
  //       soma = notas[i] + soma;
  //     }
  //     return soma / this.notas.length;
  //   };

  this.calcularMedia = () => {
    let soma = this.notas.reduce(
      (acumulador, valorCorrente) => acumulador + valorCorrente
    );

    return soma / this.notas.length;
  };

  this.somarFalta = () => (this.qtdFaltas += 1);
}

// Instancias de Aluno
let felipe = new Aluno("Felipe", 27, [2, 5, 6, 3, 1]);
let vinny = new Aluno("Vinny", 2, [8, 8, 8, 8, 8]);
let pedru = new Aluno("Pedru", 478, [10, 10, 9, 5, 7]);

// Exportando a função construtora e suas instancias criadas
module.exports = { Aluno, felipe, vinny, pedru };
