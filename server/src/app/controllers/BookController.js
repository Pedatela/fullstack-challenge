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
        res.status(201).json({ data: book, message: "The Book was successfully created" })
    }

    async bookDetails(req, res) {
        const book = await Book.findOne({ where: { id: req.params.id } })
        if (!book) {
            return res.status(404).json({ data: 'Book not found' }).status(404)
        }
        return res.json({ data: book })
    }
}

export default new BookController()