import express from "express";
import categoriaRoutes from "./routes/categoria.routes.js";
import path from 'path';
import 'dotenv/config';
import produtoRoutes from "./routes/produto.routes.js";

const app = express();
app.use(express.json());
app.use('/', categoriaRoutes)
app.use('/', produtoRoutes)

app.listen(process.env.PORT, ()=>{
    console.log(`Servidor rodando em http://localhost:${process.env.PORT}`);
})