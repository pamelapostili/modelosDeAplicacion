const mongoose = require('mongoose');
const Assignment = require('../models/Assignment');

// Crear una nueva asignación
exports.createAssignment = async (req, res) => {
  try {
    const newAssignment = new Assignment(req.body);
    await newAssignment.save();
    res.status(201).json(newAssignment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Obtener todas las asignaciones
exports.getAssignments = async (req, res) => {
  try {
    const assignments = await Assignment.find().populate('person article');
    res.status(200).json(assignments);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Obtener una asignación por ID
exports.getAssignmentById = async (req, res) => {
  try {
    const { id } = req.params;

    // Validar si el ID es un ObjectId válido
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Formato de ID inválido' });
    }

    const assignment = await Assignment.findById(id).populate('person article');
    if (!assignment) {
      return res.status(404).json({ message: 'Asignación no encontrada' });
    }
    res.status(200).json(assignment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Actualizar una asignación por ID
exports.updateAssignment = async (req, res) => {
  try {
    const { id } = req.params;

    // Validar si el ID es un ObjectId válido
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Formato de ID inválido' });
    }

    const assignment = await Assignment.findByIdAndUpdate(id, req.body, {
      new: true, // Devuelve el documento actualizado
      runValidators: true // Ejecuta las validaciones del esquema
    }).populate('person article');

    if (!assignment) {
      return res.status(404).json({ message: 'Asignación no encontrada' });
    }
    res.status(200).json(assignment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Eliminar una asignación por ID
exports.deleteAssignment = async (req, res) => {
  try {
    const { id } = req.params;

    // Validar si el ID es un ObjectId válido
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Formato de ID inválido' });
    }

    const assignment = await Assignment.findByIdAndDelete(id);
    if (!assignment) {
      return res.status(404).json({ message: 'Asignación no encontrada' });
    }
    res.status(200).json({ message: 'Asignación eliminada correctamente' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};