
import pool from "../services/pgPool.js";

const contactEmailDataMapper = {
    async saveEmail(name, email, message) {
        const sqlQuery = "SELECT * FROM save_email($1, $2, $3);";
        console.log('email:', email);
        const values = [name, email, message];
        console.log('values:', values);
        let result;
        let error;
        try {
            const response = await pool.query(sqlQuery, values);
            result = response.rows[0];
        }
        catch (err) {
            error = err;
        }
        return { result, error };
    },
};

export { contactEmailDataMapper };