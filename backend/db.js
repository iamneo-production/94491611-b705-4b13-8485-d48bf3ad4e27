const {
    createpool
} = require('mysql');
const pool =createpool({
    host:"localhost",
    user:"root",
    password:"",
    database:"test"
})
pool.query(`select * from  temp`,(err,result,fields)=> {
    if(err)
    {
        return console.log(err);
    }
    return console.log(result);
})