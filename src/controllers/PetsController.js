const { 
  listarTodosPets,
  adicionarPetDatabase,
  buscarPetDatabase,
  contarVacinadosDatabase,
  vacinarPetDatabase
 } = require('../models/pet');

const petController = {
  listarPets: (req, res) => {
    res.send(`Os pets existentes são: ${listarTodosPets()}`);
  },
  adicionarPet: (req, res) => {
    /* querys como teste:
      http://localhost:3000/pets/adicionar/handu/cao/canino/15/M/sim/banho
      http://localhost:3000/pets/adicionar/handu/cao/canino/15/M/nao/banho,tosa
    */

  const { nome, tipo, raca, idade, genero, vacinado, servicos } = req.params;

  const tratarVariavelVacinado = (vacinado) => {
    if(vacinado == 'sim') {
       return true;
    } else if (vacinado == 'nao') {
       return false;
    }
  }

  const novoPet = {
    nome,
    tipo,
    raca,
    idade: parseInt(idade),
    genero,
    vacinado: tratarVariavelVacinado(vacinado),
    servicos: servicos.split(',')
  }
  
  adicionarPetDatabase(novoPet)
  res.send(`O pet ${novoPet.nome} foi adicionado com sucesso`)
  
  },
  buscarPet: (req, res) => {
    const { nome } = req.params;
    
    res.send(buscarPetDatabase(nome))
  },
  contarPetsVacinados: (req, res) => {
    const contagem = contarVacinadosDatabase();

    res.send(contagem);
  },
  vacinarPet: (req, res) => {
    const { nome } = req.params;

    res.send(vacinarPetDatabase(nome));
  }
}

module.exports = petController;