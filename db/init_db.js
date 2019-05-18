// This file is run once to initialize the database from node without the need of a SQL processor.
// There may be a cleaner way to do this but I am unsure of how.
// You can easily initialize or reset the database by running this file once.
// ===========================================================================================

const mysql = require('mysql')

const dbName = 'pies_db'
const tableName = 'pies'
const tableQuery = `
  CREATE TABLE ${tableName} (
  id INT NOT NULL AUTO_INCREMENT,
  pie_name VARCHAR(255) NULL,
  devoured BOOLEAN default false,
  PRIMARY KEY (id))`

// Full array of SQL commands to create each individual product
const tableDataArr = [
  `INSERT INTO pies (pie_name) values ('pi pie')`,
  `INSERT INTO pies (pie_name) values ('lie pie')`,
  `INSERT INTO pies (pie_name) values ('dye pie')`,
  `INSERT INTO pies (pie_name) values ('cry pie')`,
  `INSERT INTO pies (pie_name) values ('fly pie')`
]

// MySQL connection options ** REPLACE THESE WITH YOUR OPTIONS **
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'root'
})

// Entry point, starts the app
connection.connect(err => {
  if (err) throw err
  initDB()
})

function initDB () {
  // Drop blacksmith database if it exists
  connection.query(`DROP DATABASE IF EXISTS ${dbName}`, (err, res) => {
    if (err) throw err
    console.log('Dropping database...')
    // Create database
    connection.query(`CREATE DATABASE ${dbName}`, (err, res) => {
      if (err) throw err
      console.log('Database created succesfully...')
    })
    // Use the blacksmith database
    connection.query(`USE ${dbName}`, (err, res) => {
      if (err) throw err
      // Create the products table
      connection.query(tableQuery, (err, res) => {
        if (err) throw err
        console.log('Table created...')
        // Add data to table from array above
        console.log('Adding products to table...')
        for (let i = 0; i < tableDataArr.length; i++) {
          const query = tableDataArr[i]
          connection.query(query)
        }
        // Exit app
        console.log(`Added ${tableDataArr.length} items to the product table...`)
        console.log('Database initialized! Exiting...')
        connection.end()
      })
    })
  })
}
