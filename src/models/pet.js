const petsDatabase = require('../database/pets');
const { upperCaseFirstLetter } = require('../utils');

const listarTodosPets = () => {
  return petsDatabase.map(currVal => {
    return currVal.nome
  });
}

const adicionarPetDatabase = (novoPet) => {
  petsDatabase.push(novoPet);
  console.log(petsDatabase)
}

const buscarPetDatabase = (nomePet) => {
  const petsEcontrados = petsDatabase.filter(elem => {
    return elem.nome == upperCaseFirstLetter(nomePet);
  });
  return petsEcontrados;
}

const contarVacinadosDatabase = () => {
  const contarVaciandos = petsDatabase.filter(elem => {
    return elem.vacinado;
  });

  const contarNaoVaciados = petsDatabase.filter(elem => {
    return !elem.vacinado;
  });

  return `Temos ${contarVaciandos.length} pets vacinados e ${contarNaoVaciados.length} não vacinados`
}

const vacinarPetDatabase = (nomePet) => {

  for(let i = 0; i < petsDatabase.length; i++) {
    if(petsDatabase[i].nome == upperCaseFirstLetter(nomePet)) {
      petsDatabase[i].vacinado = true
      return `O pet ${petsDatabase[i].nome} foi vacinado. Dados: ${petsDatabase[i].vacinado}`
    } else {
      'Pet não encontrado'
    }
  }

}

module.exports = {
  listarTodosPets,
  adicionarPetDatabase,
  buscarPetDatabase,
  contarVacinadosDatabase,
  vacinarPetDatabase
}