import api from './index.js';
// eslint-disable-next-line
export default {
    getAll() {
        return api.get('/books')
    },

    getOne(bookId) {
        return api.get(`/book/${bookId}`)
    },

    create(book) {
        return api.post('/books', book)
    },
};