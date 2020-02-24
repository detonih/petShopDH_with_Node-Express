const express = require('express');
const router = express.Router();
const petsRoute = require('./pets');

router.get('/', (req, res) => {
    res.status(200).json({
        listar: 'http://localhost:3000/pets/listar',
        adicionar: 'http://localhost:3000/pets/adicionar',
        buscar: 'http://localhost:3000/pets/buscar',
        vacinados: 'http://localhost:3000/pets/vacinados',
        vacinar: 'http://localhost:3000/pets/vacinar'
    })
})

router.use('/pets', petsRoute);

module.exports = router;