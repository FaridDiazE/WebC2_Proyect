const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// analiza las solicitudes con contenido tipo aplplication/json
app.use(express.json());

// analiza las solicitudes del contenido-tipo aplication/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true}));

//ruteo simple
app.get("/", (req, res) =>{
    res.json({ message: "Bienvenido a la API del CRUDOTEAM" });
});

require("./app/routes/routes")(app);

//envia al puerto, escucha la solicitud
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`El servidor esta corriendo en el puerto ${PORT}.`);
});