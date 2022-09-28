const express = require('express');
const mysql = require('mysql');
const db = mysql.createConnection({
  host :'localhost',
  user :'root',
  password:'examly',
  });
  db.connect((err) => {
    if(err){
    throw err;
    }
    console.log('MySql Connected ....');
    
    });
const app = express()
app.get('/createDb', (req, res) => {
  let sql = 'CREATE DATABASE airnet';
  db.query(sql, (err, result) => {
      if(err) throw err;
      console.log(result);
      res.send('Database created...');
  });
});
app.listen('8080', () => 
{
  console.log('server started on port 8080');
});
