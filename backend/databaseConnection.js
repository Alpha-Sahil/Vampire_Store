const mySql =  require('mysql')

let connection = mySql.createConnection({
    host: 'localhost',
    database: 'vampire_store', 
    user: 'root', 
    password:''
})

connection.connect((err) => {
    err !== null ? console.log(`Unable to connect to the database${err}`) : console.log("connected successfully !!!!")
})

module.exports = connection;