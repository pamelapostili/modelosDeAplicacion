const express = require('express');
const mongoose = require('mongoose');
// Importando librería CORS
const cors = require('cors');
// importando rutas de usuario
const userRoute = require('./routes/user.route');
const app = express();
// Agregando el parser JSON de express
app.use(express.json());
// Agregando el middleware de CORS para consumo de APIs en el mismo origen
app.use(cors());

// Ruta por defecto
app.get('/', (req, res) => {
    res.send('Bienvenido al servidor de APIs version 1.0.0');
})

// Tareas CRUD y sus métodos

// Endpoints para colección de usuarios
const locationRoute = require('./routes/locationRoutes'); 
app.use('/api/locationController', locationRoute);

const articleRoutes = require('./routes/articleRoutes'); 
app.use('/api/articleController', articleRoutes);

const assigmentRoutes = require('./routes/assignmentRoutes'); 
app.use('/api/assignmentController', assigmentRoutes);

const inventoryRoutes = require('./routes/inventoryRoutes'); 
app.use('/api/inventoryController', inventoryRoutes);

const personRoutes = require('./routes/personRoutes'); 
app.use('/api/personController', personRoutes);

app.use(express.json());
app.use(cors());

// Realizar petición de conexión a mongodb
mongoose.connect('mongodb://localhost:27017/MyDatabase')
.then( () => {
    console.log('Se estableció la conexión a base de datos exitosamente');
    const PORT = process.env.PORT || 4000; // Usa el puerto 4000 si el 3000 está ocupado
app.listen(PORT, () => {
    console.log(`Servidor trabajando en el puerto ${PORT}`);
});

})
.catch( () => console.log('Ocurrió un error en la conexión a la base de datos') );