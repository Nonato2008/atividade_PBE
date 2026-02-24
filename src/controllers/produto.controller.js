import produtoModel from "../models/produto.model.js";
import xmlModel from "../models/produto.model.js";
import xml2js from 'xml2js'

const produtoController = {

    criarProduto: async (req, res) => {
        try {
            const xml = req.body

            xml2js.parseString(xml, async (err, json) => {
                if (err) {
                    return res.status(400).json({ message: 'XML inválido' });
                }

                const produto = json.produto;

                console.log(produto)

                const result = await produtoModel.insert({
                    idCategoria: produto.idCategoria[0],
                    nomeProduto: produto.nomeProduto[0],
                    valorProduto: produto.valorProduto[0],
                    quanvinculoImagemtidade: produto.vinculoImagem[0],
                    dataCad: produto.dataCad[0]
                });

                if (result.insertId > 0) {
                    return res.status(201).json({ message: 'Registo realizado com sucesso' });
                }
                return res.status(400).json({ message: 'Ocorreu um erro ao inserir o produto' });

            })
        } catch (error) {
            console.error(error);
            res.status(500).JSON({ message: 'Ocorreu um erro no servidor', errorMessage: error.message })
        }
    },

    selecionarTodos: async (req, res) => {
        try {
            const result = await xmlModel.selectAll();

            if (result.length > 0) {
                const estrutura = new xml2js.Builder({
                    rootName: 'produtos',
                    xmldec: { version: '1.0', encoding: 'UTF-8' }
                });

                const xml = estrutura.buildObject({ produto: result });
                res.set('Content-Type', 'application/xml')
                return res.status(200).send(xml)
            }

            res.status(200).json({ message: 'Não há dados para serem exebidos' });

        } catch (error) {
            console.error(error);
            res.status(500).JSON({ message: 'Ocorreu um erro no servidor', errorMessage: error.message })
        }
    },

    deletarProduto: async (req, res) => {
        try {
            const result = await xmlModel.selectOne(idProduto)
            
            if (result > 1) {
                await produtoModel.delete(idProduto)
                return res.status(201).json({ message: 'Produto deletado com sucesso' });
            }
            return res.status(400).json({ message: 'Ocorreu um erro ao deletar o produto' });



        } catch (error) {
            console.error(error);
            res.status(500).JSON({ message: 'Ocorreu um erro no servidor', errorMessage: error.message })
        }
    },

    atualizarProduto: async (req, res) => {
        try {

        } catch (error) {

        }
    }
}


export default produtoController;