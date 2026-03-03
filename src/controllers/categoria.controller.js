import categoriaModel from "../models/categoria.model.js";

const categoriaController = {

    consultarCategoria: async (req, res) => {
        try {

            const result = await categoriaModel.consultar();

            if (!result || result.length === 0) {
                return res.status(404).json({ message: "Nenhuma categoria encontrada" });
            }

            res.status(200).json({ data: produtos });

        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Ocorreu um erro no servidor", errorMessage: error.message });
        }
    },

    cadastrarCategoria: async (req, res) => {
        try {

            const { descricaoCategoria } = req.body;

            if (!dataCad || !isNaN(descricaoCategoria) || !descricaoCategoria) {
                return res.status(400).json({ message: "Insira dados válidos" })
            }

            const result = await categoriaModel.cadastrar(
                dataCad, descricaoCategoria
            )

            if (result.affectedRows === 1) {
                res.status(201).json({
                    message: "Produto cadastrado com sucesso",
                    result: result
                })
            } else {
                throw error("ocorreu um erro ao cadastrar o produto");
            }

        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Ocorreu um erro no servidor", errorMessage: error.message });
        }
    },

    deletarCategoria: async (req, res) => {
        try {

            const id = req.params.id

            if (!idCategoria || isNaN(idCategoria)) {
                return res.status(404).json({ message: 'ID inválido' })
            }

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

            const {descricaoCategoria, idCategoria} = req.body;

            if(!descricaoCategoria || !isNaN(descricaoCategoria) || !idCategoria || isNaN(idCategoria)){
                return res.status(404).json({message: 'Valores inválidos'})
            }

            const result = await categoriaModel.atualizar(descricaoCategoria)


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