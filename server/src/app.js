import './bootstrap'

import 'express-async-errors'
import Youch from 'youch'
import cors from 'cors'
import express from 'express';
import routes from './routes';
import paginate from 'express-paginate';

import './database'

class App {
    constructor() {
        this.server = express();
        this.middlewares();
        this.routes();
        this.exceptionHandler()
    }

    middlewares() {
        this.server.use(paginate.middleware(0, 5))
        this.server.use(express.json({ limit: '5mb' }));
        this.server.use(cors())
    }

    routes() {
        this.server.use(routes);
    }

    exceptionHandler() {
        this.server.use(async (err, req, res, next) => {
            if (process.env.NODE_ENV === 'development') {
                const errors = await new Youch(err, req).toJSON();
                return res.status(500).json(errors)
            } else {
                return res.status(500).json({ error: 'Internal server error' })
            }
        })
    }
}

export default new App().server;