const { request, response } = require("express");
const express = require("express");

const app = express();

app.get("/cursos", (request, response)=>{
    //return response.send("Hello World!");
    return response.json(["Curso 1", "Curso 2", "Curso 3"]);
});
app.post("/cursos", (request, response) =>{
    return response.json(["Curso 1", "Curso 2", "Curso 3", "Curso 4"]);
});

app.put("/cursos/:id", (request, response) =>{
    return response.json(["Curso 6", "Curso 2", "Curso 3", "Curso 4"]);

});

app.patch("/cursos/:id", (request, response) =>{
    return response.json(["Curso 6", "Curso 7", "Curso 3", "Curso 4"]);
});

app.delete("/cursos/:id", (request, response) =>{
    return response.json(["Curso 6", "Curso 7", "Curso 4"]);
});
app.listen(3333);