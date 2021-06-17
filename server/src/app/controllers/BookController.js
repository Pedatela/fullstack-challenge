import Book from '../models/Book'
import { Op } from "sequelize";


class BookController {
    async index(req, res) {
        let where = {}
        if (req.query.search)
            where = { name: { [Op.like]: `%${req.query.search}%` } }

        const books = await Book.findAndCountAll({ limit: req.query.limit, where, offset: req.query.offset, order: [['id', 'ASC']] })
        res.json({ data: books })
    }

    async store(req, res) {
        const book = await Book.create(req.body).catch(err => console.log(err))
        res.json({ data: book, message: "The Book was successfully created" })
    }

    async bookDetails(req, res) {
        const book = await Book.findOne({ where: { id: req.params.id } })
        res.json({ data: book })
    }
}

export default new BookController()