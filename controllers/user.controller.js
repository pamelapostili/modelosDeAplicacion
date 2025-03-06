const User = require('../models/user.model');

// Función para recuperar toda la colección de usuarios
const getUsers = async(req, res) => {
    try {
        const Users = await User.find({});
        res.status(200).json(Users);
    } catch (error) {
        res.status(500).json({ message: 'Ocurrio un error ' + error.message });
    }
}

// Función para recuperar un usuario usando su identificador
const getUsersById = async(req, res) => {
    try {
        const { id } = req.params;
        const Usuario = await User.find({'_id': id});
        res.status(200).json(Usuario);
    } catch (error) {
        res.status(500).json({ message: 'Ocurrio un error ' + error.message });
    }
}

// Función para recuperar un usuario usando su nickname
const getUsersByNickPass = async(req, res) => {
    try {
        const { nickname } = req.params;
        const Usuario = await User.find({'nickname': nickname});
        res.status(200).json(Usuario);
    } catch (error) {
        res.status(500).json({ message: 'Ocurrio un error ' + error.message });
    }
}

// Función para recuperar un usuario usando su nickname y contraseña
const getUsersByUserPass = async(req, res) => {
    try {
        const nickname = req.body.nickname;
        const Usuario = await User.find({'nickname': nickname});
        res.status(200).json(Usuario);
    } catch (error) {
        res.status(500).json({ message: 'Ocurrio un error ' + error.message });
    }
}

// Función crear un usuario
const createUser = async(req, res) => {
    try {
        const Usuario = await User.create( req.body );
        res.status(200).json(Usuario);
    } catch (error) {
        res.status(500).json({ message: 'Ocurrio un error ' + error.message });
    }
}

// Función para recuperar actualizar los datos de un usuario usando su identificador
const updateUserById = async(req, res) => {
    try {
        const { id } = req.params;
        const Usuario = await User.findByIdAndUpdate(id, req.body);
        if (!Usuario)
            return res.status(400).json({ message: 'El usuario no existe' });
        const UsuarioActualizado = await User.find({ '_id':id });
        res.status(200).json(UsuarioActualizado);
    } catch (error) {
        res.status(500).json({ message: 'Ocurrio un error ' + error.message });
    }
}

// Función para eliminar un usuario usando su identificador
const deleteUserById = async(req, res) => {
    try {
        const { id } = req.params;
        const Usuario = await User.find({'_id': id});
        if (!Usuario)
            return res.status(400).json({ message: 'El usuario no existe' });
        const Eliminado = await User.deleteOne({ '_id':id });
        res.status(200).json({ message: 'Usuario eliminado' });
    } catch (error) {
        res.status(500).json({ message: 'Ocurrio un error ' + error.message });
    }
}

module.exports = {
    getUsers,
    getUsersById,
    createUser,
    updateUserById,
    deleteUserById,
    getUsersByNickPass,
    getUsersByUserPass,
    getUsersByNickPass
}