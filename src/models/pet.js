const petsDatabase = require('../database/pets');
const { upperCaseFirstLetter } = require('../utils');

const PetModel = {

listarTodosPets: () => {
  return petsDatabase;
},

adicionarPetDatabase: (novoPet) => {
  petsDatabase.push(novoPet);
  console.log(petsDatabase)
},

buscarPetDatabase: (nomePet) => {
  const petsEcontrados = petsDatabase.filter(elem => {
    return elem.nome == upperCaseFirstLetter(nomePet);
  });
  return petsEcontrados;
},

contarVacinadosDatabase: () => {
  const contarVaciandos = petsDatabase.filter(elem => {
    return elem.vacinado;
  });

  const contarNaoVaciados = petsDatabase.filter(elem => {
    return !elem.vacinado;
  });

  return {
    contarVaciandos,
    contarNaoVaciados
  }
},

vacinarPetDatabase: (nomePet) => {

  for(let i = 0; i < petsDatabase.length; i++) {
    if(petsDatabase[i].nome == upperCaseFirstLetter(nomePet)) {
      petsDatabase[i].vacinado = true;
      return `O pet ${petsDatabase[i].nome} foi vacinado. Dados: ${petsDatabase[i].vacinado}`
    } else {
      'Pet não encontrado';
    }
  }
},

campanhaVacinaDatabase: () => {
  for(let i = 0; i < petsDatabase.length; i++) {
    if(!petsDatabase[i].vacinado) {
      petsDatabase[i].vacinado = true;
    }
  }
  console.log(petsDatabase)

  return petsDatabase;
},

darBanhoPetDatabase: (nomePet) => {
  for(let i = 0; i < petsDatabase.length; i++) {
    if(petsDatabase[i].nome == upperCaseFirstLetter(nomePet)) {
      petsDatabase[i].servicos.push('banho');
      return `O pet ${petsDatabase[i].nome} recebeu um banho. Serviços realizados: ${petsDatabase[i].servicos}`
    } else {
      'Pet não encontrado';
    }
  }
},

tosarPetDatabase: (nomePet) => {
  for(let i = 0; i < petsDatabase.length; i++) {
    if(petsDatabase[i].nome == upperCaseFirstLetter(nomePet)) {
      petsDatabase[i].servicos.push('tosa');
      return `O pet ${petsDatabase[i].nome} recebeu uma tosa. Serviços realizados: ${petsDatabase[i].servicos}`
    } else {
      'Pet não encontrado';
    }
  }
},

apararUnhasPetDatabase: (nomePet) => {
  for(let i = 0; i < petsDatabase.length; i++) {
    if(petsDatabase[i].nome == upperCaseFirstLetter(nomePet)) {
      petsDatabase[i].servicos.push('aparar unhas');
      return `O pet ${petsDatabase[i].nome} aparou as unhas. Serviços realizados: ${petsDatabase[i].servicos}`
    } else {
      'Pet não encontrado';
    }
  }
}

}
module.exports = PetModel;