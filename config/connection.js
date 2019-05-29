const mysql = require('mysql')
require('dotenv/config')

const dbName = 'pies_db'

// MySQL DB Connection settings
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: `${process.env.DB_PASS}`,
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
