const express = require('express');
const mysql = require('mysql');

// create connection
const db = mysql.createConnection({
  host :'localhost',
  user :'root',
  password:'',
  });
  
  // connect 
  db.connect((err) => {
    if(err){
    throw err;
    }
    console.log('MySql Connected ....');
    
    });

const app = express();
// create DB 
app.get('/createDb', (req, res) => {
  let sql = 'CREATE DATABASE ujjwaldatabase';
  db.query(sql, (err, result) => {
      if(err) throw err;
      console.log(result);
      res.send('Database created...');
  });
});

app.listen('', () => 
{
  console.log('server started on port 3000');
});
