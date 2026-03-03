import produtoModel from "../models/produto.model.js";

const produtoController = {

    selecionarProdutos: async (req, res) => {
        try {

            const produtos = await produtoModel.selecionarProdutos();
            if (!produtos || produtos.length === 0) {
                return res.status(404).json({ message: "Nenhum produto encontrado" });
            }
            res.status(200).json({ data: produtos });

        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Ocorreu um erro no servidor", errorMessage: error.message });
        }
    },

    selecionarUm: async (req, res) => {
        try {

            const produto = await produtoModel.selecionarUm();
            if (!produto || produto.length === 0) {
                return res.status(404).json({ message: "Nenhum produto encontrado" })
            }
            res.status(200).json({ data: produto });

        } catch (error) {
            console.error(error)
            res.status(500).json({ message: "Ocorreu um erro no servidor", errorMessage: error.message });
        }
    },

    upload: async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({message: "Arquivo não enviado"});
      }
      res.status(200).json({
        message: "Upload realizado com sucesso",
        file: {
          filename: req.file.filename,
          size: req.file.size,
          mimetype: req.file.mimetype,
        },
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Erro no Servidor", errorMessage: error.message,});
    }
  },

    cadastrarProduto: async (req, res) => {
        try {

            const { idCategoria, nomeProduto, valorProduto, dataCad } = req.body;

            const vinculoImagem = req.file.path

            if (!idCategoria || isNaN(idCategoria) || !nomeProduto || isNaN(valorProduto)) {
                return res.status(400).json({ message: "Insira dados válidos" })
            }

            const result = await produtoModel.cadastrarProduto(
                idCategoria, nomeProduto, valorProduto, vinculoImagem, dataCad
            )

            if (!req.file) {
                return res.status(400).json({
                    message: "Arquivo não enviado",
                });
            }

            if (result.affectedRows === 1) {
                res.status(201).json({
                    message: "Produto cadastrado com sucesso",
                    result: result,
                });
            } else {
                throw error("ocorreu um erro ao cadastrar o produto");
            }

        } catch (error) {
            console.error(error);
            res.status(500).json({message: "Erro no Servidor",errorMessage: error.message,})
        }
    },

    deletarProduto:async (req,res) => {
        try {
            
            const {idProduto} = req.body;

            if(!idProduto || isNaN(idProduto)){
                return res.status(404).json({message: 'ID inválido'})
            }

            

            const result = await produtoModel.deletarProduto(idProduto)

            if (result.affectedRows === 1) {
                res.status(201).json({
                    message: "Produto deletado com sucesso",
                    result: result,
                });
            }

        } catch (error) {
            console.error(error);
            res.status(500).json({message: "Erro no Servidor",errorMessage: error.message,})
        }
    },

    atualizarProduto: async (req,res) => {
        try {
            
            const {nomeProduto, valorProduto, idProduto} = req.body;
    
            if(!nomeProduto || !valorProduto || isNaN(valorProduto)|| !idProduto || isNaN(idProduto)){
                return res.status(404).json({message: 'Valores inválidos'})
            }

            const result = await produtoModel.atualizarProduto(nomeProduto, valorProduto);

            if (result.affectedRows === 1) {
                res.status(201).json({
                    message: "Produto atualizado com sucesso",
                    result: result,
                });
            }

        } catch (error) {
            
        }
        console.error(error);
            res.status(500).json({message: "Erro no Servidor",errorMessage: error.message,})
    }


}

export default produtoController