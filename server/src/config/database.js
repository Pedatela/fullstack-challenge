require('dotenv').config
module.exports = {
    dialect: 'postgres',
    host: "127.0.0.1",
    username: "postgres",
    port: 5432,
    password: "lucasspc",
    database: "noia_challenge",
    define: {
        timestamp: true,
        underscored: true,
        underscoredAll: true
    }
}