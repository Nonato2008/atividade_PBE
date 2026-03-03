import categoriaController from "../controllers/categoria.controller.js";
import { Router }  from "express"

const categoriaRoutes = Router();

categoriaRoutes.post('/categoria', categoriaController.cadastrarCategoria)

categoriaRoutes.get('/categoria', categoriaController.consultarCategoria )

categoriaRoutes.delete('/categoria/:id', categoriaController.deletarCategoria)

categoriaRoutes.put('/categoria', categoriaController.atualizarCategoria)

export default categoriaRoutes