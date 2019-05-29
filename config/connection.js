const mysql = require('mysql')
require('dotenv').config()

const dbName = 'pies_db'

let connection

if (process.env.JASWB_URL) {
  // JawsDB connection settings
  connection = mysql.createConnection(process.env.JASWB_URL)
} else {
  // MySQL DB connection settings
  connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: `${process.env.DB_PASS}`,
    database: `${dbName}`
  })
}

// Initiate MySQL Connection
connection.connect(err => {
  if (err) {
    console.error(`error connecting: ${err.stack}`)
    return
  }
  console.log(`connected as id ${connection.threadId}`)
})

module.exports = connection
