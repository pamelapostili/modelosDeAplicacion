const Location = require('../models/Location');

// Crear una nueva ubicación
exports.createLocation = async (req, res) => {
  try {
    const newLocation = new Location(req.body);
    await newLocation.save();
    res.status(201).json(newLocation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Obtener todas las ubicaciones
exports.getLocations = async (req, res) => {
  try {
    const locations = await Location.find();
    res.status(200).json(locations);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Obtener una ubicación por ID
exports.getLocationById = async (req, res) => {
  try {
    const location = await Location.findById(req.params.id);
    if (!location) {
      return res.status(404).json({ message: 'Ubicación no encontrada' });
    }
    res.status(200).json(location);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Actualizar una ubicación por ID
exports.updateLocation = async (req, res) => {
  try {
    const location = await Location.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // Devuelve el documento actualizado
      runValidators: true // Ejecuta las validaciones del esquema
    });
    if (!location) {
      return res.status(404).json({ message: 'Ubicación no encontrada' });
    }
    res.status(200).json(location);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Eliminar una ubicación por ID
exports.deleteLocation = async (req, res) => {
  try {
    const location = await Location.findByIdAndDelete(req.params.id);
    if (!location) {
      return res.status(404).json({ message: 'Ubicación no encontrada' });
    }
    res.status(200).json({ message: 'Ubicación eliminada correctamente' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};