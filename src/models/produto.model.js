import pool from "../config/db.js";

const produtoModel = {
    selecionarProdutos: async () => {
     const sql = "SELECT * FROM produtos"  
     const [rows] = await pool.query(sql);
     console.log(rows);
     return rows; 
    },

    selecionarUm: async(idProduto) => {
        const sql = "SELECT * FROM produtos WHERE idProduto = ?";
        const values = [idProduto];
        const [rows] = await pool.query(sql,values );
        console.log(rows)
        return rows;
    },

    cadastrarProduto: async (idCategoria, nomeProduto, valorProduto, vinculoImagem) => {
        const sql = 'INSERT INTO  produtos (idCategoria, nomeProduto, valorProduto, vinculoImagem) VALUES (?, ?, ?, ?);'
        const values = [idCategoria, nomeProduto, valorProduto, vinculoImagem, dataCad]
        const [rows] = await pool.execute(sql, values)
        console.log(rows);
        return rows;
    },

    deletarProduto: async (idProduto) => {
        const sql = "DELETE FROM produtos WHERE idProduto = ?"
        const values =  [idProduto]
        const [rows] = await pool.execute(sql,values)
        console.log(rows);
        return rows
    },

    atualizarProduto: async (nomeProduto, valorProduto) => {
        const sql = "UPDATE produtos SET nomeProduto = ?, precoProduto = ? WHERE idProduto = ?"
        const values = [nomeProduto, valorProduto]
        const [rows] = await pool.execute(sql,values)
        console.log(rows);
        return rows
    }
}

export default produtoModel