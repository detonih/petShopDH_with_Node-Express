const { 
  listarTodosPets,
  adicionarPetDatabase,
  buscarPetDatabase,
  contarVacinadosDatabase,
  vacinarPetDatabase,
  campanhaVacinaDatabase,
  darBanhoPetDatabase,
  tosarPetDatabase,
  apararUnhasPetDatabase
 } = require('../models/pet');

const petController = {
  listarPets: (req, res) => {
    const transformaBooleano = (boo) => {
      if(boo == true) {
        return 'sim'
      } else if (boo == false) {
        return 'não'
      }
    }

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
    
    res.send(buscarPetDatabase(nome))
  },

  contarPetsVacinados: (req, res) => {
    const contagem = contarVacinadosDatabase();

    res.send(`Temos ${contagem.contarVaciandos.length} pets vacinados e ${contagem.contarNaoVaciados.length} não vacinados`);
  },

  vacinarPet: (req, res) => {
    const { nome } = req.params;

    res.send(vacinarPetDatabase(nome));
  },

  campanhaVacina: (req, res) => {
    const campanha = campanhaVacinaDatabase();
    res.send(`Total de pets vacinados: ${campanha.length}`)
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
  }
  
}

module.exports = petController;