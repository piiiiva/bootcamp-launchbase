const { Pool } = require("pg") // Não vai requisitar login e senha para todas as Queries, só conectamos uma vez

module.exports = new Pool({
    user: 'postgres',
    password: '0000',
    host: 'localhost',
    port: 5432,
    database: 'launchstoredb'
})

