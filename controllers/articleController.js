const Article = require('../models/Article');

// Crear un nuevo artículo
exports.createArticle = async (req, res) => {
  try {
    const newArticle = new Article(req.body);
    await newArticle.save();
    res.status(201).json(newArticle);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Obtener todos los artículos
exports.getArticles = async (req, res) => {
  try {
    const articles = await Article.find().populate('location');
    res.status(200).json(articles);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Obtener un artículo por ID
exports.getArticleById = async (req, res) => {
  try {
    const article = await Article.findById(req.params.id).populate('location');
    if (!article) {
      return res.status(404).json({ message: 'Artículo no encontrado' });
    }
    res.status(200).json(article);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Actualizar un artículo por ID
exports.updateArticle = async (req, res) => {
  try {
    const article = await Article.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    }).populate('location');
    if (!article) {
      return res.status(404).json({ message: 'Artículo no encontrado' });
    }
    res.status(200).json(article);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Eliminar un artículo por ID
exports.deleteArticle = async (req, res) => {
  try {
    const article = await Article.findByIdAndDelete(req.params.id);
    if (!article) {
      return res.status(404).json({ message: 'Artículo no encontrado' });
    }
    res.status(200).json({ message: 'Artículo eliminado correctamente' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};