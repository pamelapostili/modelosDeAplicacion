const express = require('express');
const router = express.Router();
const inventoryController = require('../controllers/inventoryController');

router.get('/', (req, res) => {
    res.json({ message: "Ruta de ubicación funcionando correctamente" });
});

router.post('/', inventoryController.createInventory);
router.get('/', inventoryController.getInventories);
router.get('/:id', inventoryController.getInventoryById);
router.put('/:id', inventoryController.updateInventory);
router.delete('/:id', inventoryController.deleteInventory);

module.exports = router;
