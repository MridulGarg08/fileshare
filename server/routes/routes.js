import express from 'express';
import { createsignedurl } from '../controllers/imagecont.js';
import { Router } from 'express';

const routes= express.Router();
routes.get('/image-url',createsignedurl)

export default routes;