const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'election'
    }, 
    console.log('Connected to the election database.')
);

db.promise().query(`SELECT * FROM candidates`)
    .then((err, rows) => {
        console.log(rows);
    });

// Routes
// Default request for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

// connection function (lsiten for requests) 
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});