const express = require('express');
const router = express.Router();
const petsRoute = require('./pets');

router.get('/', (req, res) => {
    res.status(200).json({
        listar: 'http://localhost:3000/pets/listar',
        adicionar: 'http://localhost:3000/pets/adicionar',
        buscar: 'http://localhost:3000/pets/buscar',
        vacinados: 'http://localhost:3000/pets/vacinados',
        vacinar: 'http://localhost:3000/pets/vacinar',
        campanha: 'http://localhost:3000/pets/campanha',
        banho: 'http://localhost:3000/pets/banho',
        tosar: 'http://localhost:3000/pets/tosar',
        aparar: 'http://localhost:3000/pets/aparar',
        atender: 'http://localhost:3000/pets/atender'
    })
})

router.use('/pets', petsRoute);

module.exports = router;