import produtoController from "../controllers/produto.controller.js";
import { Router } from "express";

const produtoRoutes = Router();

produtoRoutes.post('/produtos/cadatro ', produtoController.cadastrarProduto)

produtoRoutes.get('/produtos/buscar', produtoController.selecionarProdutos)

produtoRoutes.get('/produtos/buscarUm', produtoController.selecionarUm)

produtoRoutes.delete('/produtos/deletar', produtoController.deletarProduto)

produtoRoutes.put('/produtos/atualizar', produtoController.atualizarProduto)

export default produtoRoutes