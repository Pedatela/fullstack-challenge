import api from './index.js';
// eslint-disable-next-line
export default {
    getAll(limit = 5, offset) {
        return api.get('/books', { params: { limit, offset } })
    },

    getOne(bookId) {
        return api.get(`/book/${bookId}`)
    },

    create(book) {
        return api.post('/books', book)
    },
};