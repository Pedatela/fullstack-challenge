import { Router } from 'express';

import BookController from './app/controllers/BookController'


// Validator
import validateBookStore from './app/validators/BookStore';


const routes = new Router();

routes.get('/books', BookController.index)
routes.post('/books', validateBookStore, BookController.store)
routes.get('/books/:id', BookController.bookDetails)







export default routes