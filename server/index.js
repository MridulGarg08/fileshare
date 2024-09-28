import express from 'express';
import routes from './routes/routes.js';
import cors from 'cors'
import bodyParser from 'body-parser';

const app = express();
app.use(cors());
app.use(bodyParser.json({express: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', routes)
app.use(express.json());
app.listen(8000,() => {
    console.log("Server listening on Port 8000")
})
