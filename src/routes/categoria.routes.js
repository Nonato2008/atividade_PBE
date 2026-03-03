import categoriaController from "../controllers/categoria.controller.js";
import { Router }  from "express"

const categoriaRoutes = Router();

categoriaRoutes.post('/categoria/cadastro', categoriaController.cadastrarCategoria)

categoriaRoutes.get('/categoria/buscar', categoriaController.consultarCategoria )

categoriaRoutes.delete('/categoria/deletar', categoriaController.deletarCategoria)

categoriaRoutes.put('/categoria/atualizar', categoriaController.atualizarCategoria)

export default categoriaRoutes