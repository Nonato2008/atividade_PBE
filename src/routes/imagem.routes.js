import imagemController from "../controllers/image.controller.js";
import uploadImage from "../middlewares/uploadImage.midldleware.js";
import { Router } from "express";

const imagemRoutes = Router();

imagemRoutes.post('/produtos/imagens', uploadImage, imagemController.upload) 



export default imagemRoutes;