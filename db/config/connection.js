const mysql = require('mysql')

const dbName = 'pies_db'

// MySQL DB Connection settings
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'root',
  database: `${dbName}`
})

// Initiate MySQL Connection.
const connect = () => {
  connection.connect(err => {
    if (err) {
      console.error(`error connecting: ${err.stack}`)
      return
    }
    console.log(`connected as id ${connection.threadId}`)
  })
}

module.export = connect
