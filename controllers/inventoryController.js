const Inventory = require('../models/inventary');

// Crear un nuevo inventario
exports.createInventory = async (req, res) => {
  try {
    const newInventory = new Inventory(req.body);
    await newInventory.save();
    res.status(201).json(newInventory);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Obtener todos los inventarios
exports.getInventories = async (req, res) => {
  try {
    const inventories = await Inventory.find();
    res.status(200).json(inventories);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Obtener un inventario por ID
exports.getInventoryById = async (req, res) => {
  try {
    const inventory = await Inventory.findById(req.params.id);
    if (!inventory) {
      return res.status(404).json({ message: 'Inventario no encontrado' });
    }
    res.status(200).json(inventory);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Actualizar un inventario por ID
exports.updateInventory = async (req, res) => {
  try {
    const inventory = await Inventory.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // Devuelve el documento actualizado
      runValidators: true // Ejecuta las validaciones del esquema
    });
    if (!inventory) {
      return res.status(404).json({ message: 'Inventario no encontrado' });
    }
    res.status(200).json(inventory);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Eliminar un inventario por ID
exports.deleteInventory = async (req, res) => {
  try {
    const inventory = await Inventory.findByIdAndDelete(req.params.id);
    if (!inventory) {
      return res.status(404).json({ message: 'Inventario no encontrado' });
    }
    res.status(200).json({ message: 'Inventario eliminado correctamente' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};