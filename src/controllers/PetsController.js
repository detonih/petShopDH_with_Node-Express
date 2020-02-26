const { 
  listarTodosPets,
  adicionarPetDatabase,
  buscarPetDatabase,
  contarVacinadosDatabase,
  vacinarPetDatabase,
  campanhaVacinaDatabase,
  darBanhoPetDatabase,
  tosarPetDatabase,
  apararUnhasPetDatabase,
  atenderPetDatabase
 } = require('../models/pet');

const { transformaBooleano } = require('../utils');

const petController = {
  listarPets: (req, res) => {
    
    const todosOsPets = listarTodosPets().map(currVal => {
      return `
      Nome: ${currVal.nome},
      tipo: ${currVal.tipo},
      raça: ${currVal.raca},
      idade: ${currVal.idade},
      genero: ${currVal.genero},
      vacinado: ${transformaBooleano(currVal.vacinado)},
      servicos: ${currVal.servicos}
      `
    });
    
    res.send(`Os pets existentes são: ${todosOsPets}`);
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
    const buscar = buscarPetDatabase(nome);
    console.log(buscar)
    res.send(`Encontramos seu pet:
    Nome: ${buscar[0].nome},
    tipo: ${buscar[0].tipo},
    raça: ${buscar[0].raca},
    idade: ${buscar[0].idade},
    genero: ${buscar[0].genero},
    vacinado: ${transformaBooleano(buscar[0].vacinado)},
    servicos: ${buscar[0].servicos}
    `)
  },

  contarPetsVacinados: (req, res) => {
    const contagem = contarVacinadosDatabase();

    res.send(`Temos ${contagem.contarVaciandos.length} pets vacinados e ${contagem.contarNaoVaciados.length} não vacinados`);
  },

  vacinarPet: (req, res) => {
    const { nome } = req.params;
    const vacinar = vacinarPetDatabase(nome);

    res.send(vacinar);
  },

  campanhaVacina: (req, res) => {
    const campanha = campanhaVacinaDatabase();
    res.send(`Total de pets vacinados: ${campanha.length}.
    Vacinados: ${campanha.map(currVal => {
      return currVal.nome
    })}`)
  },

  darBanhoPet: (req, res) => {
    const { nome } = req.params;

    res.send(darBanhoPetDatabase(nome));
  },

  tosarPet: (req, res) => {
    const { nome } = req.params;

    res.send(tosarPetDatabase(nome));
  },

  apararUnhasPet: (req, res) => {
    const { nome } = req.params;

    res.send(apararUnhasPetDatabase(nome));
  },

  atenderPet: (req, res) => {
    const { nome, servicos } = req.params;

    const atender = atenderPetDatabase(nome, servicos);

    res.send(atender);
  }
  
}

module.exports = petController;