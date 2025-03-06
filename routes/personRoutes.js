const express = require('express');
const router = express.Router();
const personController = require('../controllers/personController');

router.get('/', (req, res) => {
    res.json({ message: "Ruta de ubicación funcionando correctamente" });
});

router.post('/', personController.createPerson);
router.get('/', personController.getPersons);
router.get('/:id', personController.getPersonById);
router.put('/:id', personController.updatePerson);
router.delete('/:id', personController.deletePerson);

module.exports = router;