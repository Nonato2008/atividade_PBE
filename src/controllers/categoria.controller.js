import categoriaModel from "../models/categoria.model.js";

const categoriaController = {

    consultarCategoria: async (req, res) => {
        try {

            const result = await categoriaModel.consultar();

            if (!result || result.length === 0) {
                return res.status(404).json({ message: "Nenhuma categoria encontrada" });
            }

            res.status(200).json({ data: result });

        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Ocorreu um erro no servidor", errorMessage: error.message });
        }
    },

    cadastrarCategoria: async (req, res) => {
        try {

            const { descricaoCategoria } = req.body;

            if (!isNaN(descricaoCategoria) || !descricaoCategoria) {
                return res.status(400).json({ message: "Insira dados válidos" })
            }

            const result = await categoriaModel.cadastrar(
                descricaoCategoria
            )

            if (result.affectedRows === 1) {
                res.status(201).json({
                    message: "Categoria cadastrado com sucesso",
                    result: result
                })
            } else {
                throw error("ocorreu um erro ao cadastrar o categoria");
            }

        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Ocorreu um erro no servidor", errorMessage: error.message });
        }
    },

    deletarCategoria: async (req, res) => {
        try {

            const id = req.params.id

           

            const result = await categoriaModel.deletar(id)

            if (result.affectedRows === 1) {
                res.status(201).json({
                    message: "Categoria deletado com sucesso",
                    result: result,
                })
            }

        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Erro no Servidor", errorMessage: error.message, })
        }
    },

    atualizarCategoria: async (req, res) => {
        try {

            const { descricaoCategoria, } = req.body;

            const id = req.query.id

            if (!descricaoCategoria || !isNaN(descricaoCategoria)) {
                return res.status(404).json({ message: 'Valores inválidos' })
            }

            const result = await categoriaModel.atualizar(descricaoCategoria,id)


            if (result.affectedRows === 1) {
                res.status(201).json({
                    message: "Categoria atualizada com sucesso",
                    result: result,
                });
            }

        } catch (error) {
            res.status(500).json({ message: "Erro no Servidor", errorMessage: error.message, })
        }
    }
}

export default categoriaController