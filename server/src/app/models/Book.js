import Sequelize, { Model } from 'sequelize'

class Book extends Model {
    static init(sequelize) {
        super.init(
            {
                image: Sequelize.TEXT,
                name: Sequelize.STRING,
                author: Sequelize.STRING,
                description: Sequelize.TEXT
            },
            {
                sequelize,
            }
        )
        return this
    }
}

export default Book;