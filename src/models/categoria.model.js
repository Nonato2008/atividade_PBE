import pool from "../config/db.js";


const categoriaModel = {
    insert: async (cCategoria) => {
        const sql = 'INSERT INTO categoria(descricaoCategoria, dataCad) values (?, ?)'
        const values = [cCategoria.descricaoCategoria, cCategoria.dataCad];
        const [rows] = await pool.execute(sql, values);
        return rows;
    },

    selectAll: async () => {
        const sql = 'select * from produtos inner join categoria on produtos.idCategoria = categoria.idCategoria'
        const [rows] = await pool.execute(sql);
        return rows;
    }
}

export default categoriaModel