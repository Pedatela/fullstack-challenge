import Book from '../models/Book'
import { Op } from "sequelize";


class BookController {
    async index(req, res) {
        let where = {}
        if (req.query.search)
            where = { name: { [Op.like]: `%${req.query.search}%` } }

        const books = await Book.findAll({ where })
        res.json({ data: books })
    }

    async store(req, res) {
        const book = await Book.create(req.body)
        res.json({ data: book })
    }

    async bookDetails(req, res) {
        const book = await Book.findOne({ where: { id: req.params.id } })
        res.json({ data: book })
    }
}

export default new BookController()