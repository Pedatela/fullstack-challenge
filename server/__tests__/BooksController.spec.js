import request from 'supertest'
import app from '../src/app'


describe('Books', () => {
    it('should create a book', async () => {
        const resp = await request(app)
            .post('/books')
            .send({
                name: 'I Am Legend',
                author: 'Richard Matheson',
                description: "I Am Legend (no Brasil: Eu Sou a Lenda ou A Última Esperança sobre a Terra) é um livro de horror e ficção científica escrito por Richard Matheson e publicado em 1954. A obra foi influente no desenvolvimento do gênero zumbi e na popularização do conceito de um apocalipse em todo o mundo devido a uma doença. A obra foi um sucesso e foi adaptado para o cinema como The Last Man on Earth (O Último Homem na Terra), em 1964, como The Omega Man, em 1971, e como Eu Sou a Lenda, em 2007. O romance também inspirou o roteiro do filme Night of the Living Dead, de George Romero (1968).Eu sou a Lenda conta a história de um homem que foi o único sobrevivente não-infectado por uma bactéria mortífera — o resto da população tornou-se vampiros.",
                image: 'TESTE'
            })
        expect(resp.status).toBe(201)
        expect(resp.body).toHaveProperty('data.id')
    })


    it('should return an error', async () => {
        const resp = await request(app)
            .post('/books')
            .send({
                name: '',
                author: 'Richard Matheson',
                description: "I Am Legend (no Brasil: Eu Sou a Lenda ou A Última Esperança sobre a Terra) é um livro de horror e ficção científica escrito por Richard Matheson e publicado em 1954. A obra foi influente no desenvolvimento do gênero zumbi e na popularização do conceito de um apocalipse em todo o mundo devido a uma doença. A obra foi um sucesso e foi adaptado para o cinema como The Last Man on Earth (O Último Homem na Terra), em 1964, como The Omega Man, em 1971, e como Eu Sou a Lenda, em 2007. O romance também inspirou o roteiro do filme Night of the Living Dead, de George Romero (1968).Eu sou a Lenda conta a história de um homem que foi o único sobrevivente não-infectado por uma bactéria mortífera — o resto da população tornou-se vampiros.",
                image: 'TESTE'
            })
        expect(resp.status).toBe(400)
        expect(resp.body).toHaveProperty('error')
    })


    it('should return the book with id 1 ', async () => {
        const response = await request(app)
            .get('/book/1')
        expect(response.body.data.id).toBe(1)
        expect(response.status).toBe(200)
    })

    it('should return an error', async () => {
        const response = await request(app)
            .get('/book/2')
        expect(response.status).toBe(404)
    })


    it('should return all books` ', async () => {
        const response = await request(app)
            .get('/books?offset=0&limit=5')
        expect(response.body).toHaveProperty('data.rows')
        expect(response.body.data.count).toBe(1)
        expect(response.status).toBe(200)

    })

    it('should return all books` ', async () => {
        const response = await request(app)
            .get('/books?offset=0&limit=5')
        expect(response.body).toHaveProperty('data.rows')
        expect(response.body.data.count).toBe(1)
        expect(response.status).toBe(200)
    })

    it('should return no book` ', async () => {
        const response = await request(app)
            .get('/books')
        expect(response.body).toHaveProperty('data.rows')
        expect(response.body.data.rows.length).toBe(0)
        expect(response.status).toBe(200)
    })
})