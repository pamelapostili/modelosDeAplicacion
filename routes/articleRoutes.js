const express = require('express');
const router = express.Router();
const articleController = require('../controllers/articleController');

router.get('/', (req, res) => {
    res.json({ message: "Ruta de ubicación funcionando correctamente" });
});

router.post('/', articleController.createArticle);
router.get('/', articleController.getArticles);
router.get('/:id', articleController.getArticleById);
router.put('/:id', articleController.updateArticle);
router.delete('/:id', articleController.deleteArticle);

module.exports = router;