// Importanto função construtora Aluno
let { Aluno } = require('./aluno')

// Criando instancias de Aluno
let matheusF = new Aluno("Matheus Affonso", 0, [1000, 4580, 3562, 9594, 9839])
let dry = new Aluno("Adryana", 0, [10, 10, 10, 10, 10])
let matheusA = new Aluno("Matheus Andrade", 0, [10, 10, 10, 10, 10])
let camelo = new Aluno("Paulo Henrique", 86, [0, 0, 0, 0, 0])

// Atribuindo ao array estudantes as instancias de Aluno
let estudantes = [matheusF, dry, matheusA, camelo]

// Exportanto o array de estudantes
module.exports = estudantes