const express = require('express');
const mysql = require('mysql');

const db = mysql.createConnection({
  host :'localhost',
  user :'root',
  password:'examly',
  database : 'airnet'

  });
  db.connect((err) => {
    if(err){
    throw err;
    }
    console.log('MySql Connected ....');
    });
const app = express();
app.get('/create/admin', (req, res) => {
  let sql = 'CREATE TABLE admin(firstname VARCHAR(255),lastname VARCHAR(255),email VARCHAR(255),password int, PRIMARY KEY(email))';
  db.query(sql, (err, result) => {
      if(err) throw err;
      console.log(result);
      res.send('admin table created...');
  });
  
});

app.listen('8080', () => {
  console.log('Server started on port 8080');
});