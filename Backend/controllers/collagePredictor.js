const db = require('../services/database');

const getGraphDataRoundwise = (req, res) => {
    const { round, iit, programtype, programname } = req.query;
    db.all(`SELECT * FROM "Jossa-final-data" WHERE Round = ? AND Institute = ? AND "Program name" = ?`, [round, iit, programname], (err, rows) => {
        if (err) {
            console.error(err.message);
            res.status(500).json({ error: err.message });
        } else {
            res.json(rows);
        }
    });
};

// Other controller functions...

module.exports = {
    getGraphDataRoundwise,
    // other exports...
};
