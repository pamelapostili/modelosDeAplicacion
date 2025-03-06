const express = require('express');
const router = express.Router();
const {
    getUsers,
    getUsersById,
    createUser,
    updateUserById,
    deleteUserById,
    getUsersByUserPass,
    getUsersByNickPass
} = require('../controllers/user.controller');

// Endpoint para la recuperación de la colección de usuarios
router.get('/all', getUsers);
// Endopint para la recuperación de un usuario
router.get('/byId/:id', getUsersById);
// Endpoint para la recuperación de un usuario usando su nickname
router.get('/byNick/:nickname', getUsersByNickPass);
// Endopint para la recuperación de un usuario usando su nickname
router.post('/byNickname', getUsersByUserPass);
// Endpoint para la creación de un usuario
router.post('/add', createUser);
// Endpoint para la actualización de un usuario
router.put('/update/:id', updateUserById);
// Endpoint para la eliminación de un usuario
router.delete('/delete/:id', deleteUserById);

module.exports = router;