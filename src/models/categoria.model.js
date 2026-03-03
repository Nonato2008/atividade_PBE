import pool from "../config/db.js";


const categoriaModel = {
    cadastrar: async (descricaoCategoria,dataCad) => {
        const sql = 'INSERT INTO categoria(descricaoCategoria, dataCad) values (?, ?)'
        const values = [descricaoCategoria,dataCad];
        const [rows] = await pool.execute(sql, values);
        return rows;
    },

    consultar: async (idCategoria) => {
        const sql = 'SELECT * FROM categoria'
        const [rows] = await pool.query(sql);
        console.log(rows);
        return rows;
    },

    deletar: async (idCategoria) => {
        const sql = 'DELETE FROM categoria WHERE idCategoria = ?'
        const values = [idCategoria]
        const [rows] = await pool.execute(sql,values)
        console.log(rows);
        return rows
    },

    atualizar: async (descricaoCategoria, ) => {
        const sql = 'UPDATE categoria SET descricaoCategoria = ?'
        const values = [descricaoCategoria]
        const [rows] = await pool.execute (sql,values)
        console.log(rows);
        return rows
    }

    
}

export default categoriaModel