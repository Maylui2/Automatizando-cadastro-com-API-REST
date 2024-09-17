const express = require('express');
const router = express.Router();
const Dog = require('../models/Dog');

// Cadastro de cães
router.post('/Dogs', async (req, res) => {
    try {
        const { name, owner, breed, gender, color } = req.body;

        // Verificação se todos os campos foram preenchidos
        if (!name || !owner || !breed || !gender || !color) {
            return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
        }

        // Verificação se o cão já foi cadastrado (regra de negocio)
        const duplicado = await Dog.findOne({ name: name });

        if (duplicado) {
            return res.status(400).json({ erro: 'O cão já foi cadastrado.' });
        }

        // Criação e salvamento do novo cadastro
        const newDog = new Dog({ name, owner, breed, gender, color });
        await newDog.save();
        res.status(201).json(newDog);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao cadastrar cão' });
    }
});

// Listagem de cães
router.get('/', async (req, res) => {
    try {
        const dogs = await Dog.find();
        res.status(200).json(dogs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Consulta de cães por ID
router.get('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const dog = await Dog.findById(id);
        if (!dog) {
            return res.status(404).json({ error: 'Cão não encontrado' });
        }
        res.status(200).json(dog);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Remoção de cães
router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const dog = await Dog.findByIdAndDelete(id);
        if (!dog) {
            return res.status(404).json({ error: 'Cão não encontrado' });
        }
        res.status(200).json({ message: 'Cão removido com sucesso' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
