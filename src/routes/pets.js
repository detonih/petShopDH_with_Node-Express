const express = require('express');
const router = express.Router();
const { 
  listarPets,
  adicionarPet,
  buscarPet,
  contarPetsVacinados,
  vacinarPet,
  campanhaVacina 
} = require('../controllers/PetsController');

router.get('/listar', listarPets);
router.get('/adicionar/:nome/:tipo/:raca/:idade/:genero/:vacinado/:servicos', adicionarPet);
router.get('/buscar/:nome', buscarPet);
router.get('/vacinados', contarPetsVacinados);
router.get('/vacinar/:nome', vacinarPet);
router.get('/campanha', campanhaVacina);

module.exports = router;