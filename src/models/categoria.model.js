import pool from "../config/db.js";


const categoriaModel = {
    cadastrar: async (descricaoCategoria) => {
        const sql = 'INSERT INTO categoria(descricaoCategoria) values ( ?)'
        const values = [descricaoCategoria];
        const [rows] = await pool.execute(sql, values);
        return rows;
    },

    consultar: async (idCategoria) => {
        const sql = 'SELECT * FROM categoria'
        const [rows] = await pool.query(sql);
        console.log(rows);
        return rows;
    },

    deletar: async (id) => {
        const sql = 'DELETE FROM categoria WHERE idCategoria = ?'
        const values = [id]
        const [rows] = await pool.execute(sql,values)
        console.log(rows);
        return rows
    },

    atualizar: async (descricaoCategoria, id) => {
        const sql = 'UPDATE categoria SET descricaoCategoria = ? WHERE idCategoria = ?'
        const values = [descricaoCategoria, id]
        const [rows] = await pool.execute (sql,values)
        console.log(rows);
        return rows
    }

    
}

export default categoriaModel