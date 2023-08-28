// const mysql = require('mysql');
// const express = require('express');

// const app = express();
// const port =3099;


// const connection = mysql.createConnection({
//     host: '127.0.0.1',     // Your MySQL server host
//     user: 'root',      // Your MySQL username
//     password: 'subbu-moni-2001',  // Your MySQL password
//     database: 'tourwebsite',
//     port:3306     // Your MySQL database name
// });
 
// connection.connect(function (err) {
//     if (err) throw err;
//     console.log("Connected!");
// });

// app.listen(port,()=>{
//     console.log(`port is running on ${port}` )
    
// })

// app.get('/userinfo', (req, res) => {
//     const query = 'SELECT * FROM roles';
//     connection.query(query, (err, result) => {
//         if (err) {
//             console.error('Error fetching data from the database:', err);
//             res.status(500).json({ error: 'Error fetching data from the database' });
            
//         }
// else{
//         res.json(result);
//     }
//     });
// });

let mysql = require('mysql2');
const express = require('express');

const app = express();
const PORT = 3000;

let connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    database: 'tourwebsite',
    password:'subbu-moni-2001'
    
});

connection.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
  
    console.log('Connected to the MySQL server.');
  });

  app.get('/user', (req, res) => {
    // Acquire a connection from the pool
    pool.query('SELECT * FROM roles', (err, rows) => {
      if (err) {
        return res.status(500).send('Error fetching data from database');
      }
      
      // Send the query results as JSON
      res.json(rows);
    });
  });
  
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });





