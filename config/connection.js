const mysql = require('mysql')

const dbName = 'pies_db'

// MySQL DB Connection settings
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'kirby0077',
  database: `${dbName}`
})

// Initiate MySQL Connection
connection.connect(err => {
  if (err) {
    console.error(`error connecting: ${err.stack}`)
    return
  }
  console.log(`connected as id ${connection.threadId}`)
})

module.exports = connection
