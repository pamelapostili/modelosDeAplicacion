const Person = require('../models/Person');

// Crear una nueva persona
exports.createPerson = async (req, res) => {
  try {
    const newPerson = new Person(req.body);
    await newPerson.save();
    res.status(201).json(newPerson);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Obtener todas las personas
exports.getPersons = async (req, res) => {
  try {
    const persons = await Person.find();
    res.status(200).json(persons);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Obtener una persona por ID
exports.getPersonById = async (req, res) => {
  try {
    const person = await Person.findById(req.params.id);
    if (!person) {
      return res.status(404).json({ message: 'Persona no encontrada' });
    }
    res.status(200).json(person);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Actualizar una persona por ID
exports.updatePerson = async (req, res) => {
  try {
    const person = await Person.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // Devuelve el documento actualizado
      runValidators: true // Ejecuta las validaciones del esquema
    });
    if (!person) {
      return res.status(404).json({ message: 'Persona no encontrada' });
    }
    res.status(200).json(person);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Eliminar una persona por ID
exports.deletePerson = async (req, res) => {
  try {
    const person = await Person.findByIdAndDelete(req.params.id);
    if (!person) {
      return res.status(404).json({ message: 'Persona no encontrada' });
    }
    res.status(200).json({ message: 'Persona eliminada correctamente' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};