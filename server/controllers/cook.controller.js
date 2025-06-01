const connection = require('../db')

module.exports = {
    getAll: async (req, res) => {
        const idUser = req.params.idUser
        try {
            const query = `SELECT * FROM cook WHERE idUser = ? AND status = 'pending'`;
            const rows = await new Promise((resolve, reject) => {
                connection.query(query, [idUser], (error, results) => {
                    if (error) {
                        console.error('Error getting cook: ', error);
                        reject(error);
                    } else {
                        resolve(results);
                    }
                });
            });

            const data = rows.map(row => ({
                id: row.id,
                state: row.state,
                date: row.date,
                idRecipe: row.idRecipe
            }))

            return res.json({ success: true, data })
        } catch (error) {
            console.error('Error: ', error);
            return res.json({ success: false });
        }
    },
    
    add: async (req, res) => {
        const { date, idUser, idRecipe, state } = req.body;
        const addCookQuery = `INSERT INTO cook (idRecipe, date, idUser, state,status) VALUES (?, ?, ?, ?, 'pending')`;
        const updateRecipeUseQuery = `UPDATE recipe SET \`use\` = \`use\` + 1 WHERE id = ?`;

        try {
            await new Promise((resolve, reject) => {
                connection.query(addCookQuery, [idRecipe, date, idUser, state],
                    (error, results, fields) => {
                        if (error) {
                            console.error('Error add cook: ', error);
                            reject(error);
                        } else {
                            resolve(results);
                        }
                    }
                );
            });

            await new Promise((resolve, reject) => {
                connection.query(updateRecipeUseQuery, [idRecipe],
                    (error, results, fields) => {
                        if (error) {
                            console.error('Error updating recipe use: ', error);
                            reject(error);
                        } else {
                            resolve(results);
                        }
                    }
                );
            });

            return res.json({ success: true });
        } catch (error) {
            console.error('Error adding cook: ', error);
            return res.json({ success: false, message: 'Error adding cook' });
        }
    },
    delete: async (req, res) => {
        const { id } = req.params;
        const getRecipeIdQuery = `SELECT idRecipe FROM cook WHERE id = ?`;
        const deleteCookQuery = `DELETE FROM cook WHERE id = ?`;
        const updateRecipeUseQuery = `UPDATE recipe SET \`use\` = \`use\` - 1 WHERE id = ?`;

        try {
            // Get the idRecipe associated with the cook record
            const idRecipe = await new Promise((resolve, reject) => {
                connection.query(getRecipeIdQuery, [id], (error, results) => {
                    if (error) {
                        console.error('Error getting idRecipe: ', error);
                        reject(error);
                    } else {
                        resolve(results[0]?.idRecipe);
                    }
                });
            });

            if (!idRecipe) {
                return res.json({ success: false, message: 'Cook record not found' });
            }

            // Delete the cook record
            await new Promise((resolve, reject) => {
                connection.query(deleteCookQuery, [id], (error) => {
                    if (error) {
                        console.error('Error deleting cook: ', error);
                        reject(error);
                    } else {
                        resolve();
                    }
                });
            });

            // Decrement the `use` field in the recipe table
            await new Promise((resolve, reject) => {
                connection.query(updateRecipeUseQuery, [idRecipe], (error) => {
                    if (error) {
                        console.error('Error updating recipe use: ', error);
                        reject(error);
                    } else {
                        resolve();
                    }
                });
            });

            return res.json({ success: true });
        } catch (error) {
            console.error('Error deleting cook: ', error);
            return res.json({ success: false });
        }
    },
    updateStatus: async (req, res) => {
        const { id } = req.params;
        const updateStatusQuery = `UPDATE cook SET status = 'done' WHERE id = ?`;

        try {
            await new Promise((resolve, reject) => {
                connection.query(updateStatusQuery, [id], (error, results) => {
                    if (error) {
                        console.error('Error updating status: ', error);
                        reject(error);
                    } else {
                        resolve(results);
                    }
                });
            });

            return res.json({ success: true, message: 'Status updated to done' });
        } catch (error) {
            console.error('Error updating status: ', error);
            return res.json({ success: false, message: 'Error updating status' });
        }
    },

}