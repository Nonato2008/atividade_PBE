import produtoController from "../controllers/produto.controller.js";
import { Router } from "express";
import uploadImage from "../middlewares/uploadImage.midldleware.js";

const produtoRoutes = Router();

produtoRoutes.post('/produtos', uploadImage, produtoController.cadastrarProduto)

produtoRoutes.get('/produtos', produtoController.selecionarProdutos)

produtoRoutes.get('/produtos', produtoController.selecionarUm)

produtoRoutes.delete('/produtos/:id', produtoController.deletarProduto)

produtoRoutes.put('/produtos', produtoController.atualizarProduto)

export default produtoRoutes