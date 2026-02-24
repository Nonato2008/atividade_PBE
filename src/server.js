import express from "express";
import imagemRoutes from "./routes/imagem.routes.js";
import path from 'path';
import 'dotenv/config';
import produtoRoutes from "./routes/produto.routes.js";

const app = express();
app.use('/', imagemRoutes)
app.use('/', produtoRoutes)

app.listen(process.env.PORT, ()=>{
    console.log(`Servidor rodando em https://localhost:${process.env.PORT}`);
})