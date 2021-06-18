require('../bootstrap')

module.exports = {
    dialect: process.env.DB_DIALECT || 'postgres',
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    port: 5432,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    storage: './__tests__/database.sqlite',
    define: {
        timestamp: true,
        underscored: true,
        underscoredAll: true
    }
}