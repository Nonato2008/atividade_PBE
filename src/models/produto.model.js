import pool from "../config/db.js";

const produtoModel = {
    insert: async (pProduto) => {
        const sql = 'INSERT INTO  produtos (idCategoria, nomeProduto, valorProduto, vinculoImagem, dataCad) VALUES (?, ?, ?, ?, ?);'
        const values = [pProduto.idCategoria, pProduto.nomeProduto, pProduto.valorProduto, pProduto.vinculoImagem, pProduto.dataCad];
        const [rows] = await pool.execute(sql, values);
        return rows;
    },
    selectAll: async () => {
        const sql = "SELECT * FROM produtos;";
        const [rows] = await pool.execute(sql);
        return rows;
    },


    selectOne: async() => {
        const sql = 'select * from produtos WHERE idProduto = @idProduto'
        const [rows] = await pool.execute(sql);
        return rows;
    },

    delete: async(pProduto) => {
        const sql = 'DELETE FROM produtos WHERE idProduto = ?'
        const values = [pProduto.idProduto]
        const [rows] = await pool.execute(sql);
        return rows;
    }
}

export default produtoModel