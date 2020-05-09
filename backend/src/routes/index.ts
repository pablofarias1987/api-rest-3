import {Router} from 'express';
const router = Router();

const uuidv4 = require('uuid/v4');

import upload from '../libs/multer';
import { getPhotos, createPhoto, deletePhoto, getPhoto, updatePhoto } from '../controllers/photo.controller';
import { getPeliculas, createPelicula, deletePelicula, getPelicula, updatePelicula } from '../controllers/pelicula.controller';
import multer from '../libs/multer';

// middleware
// router.use(upload.single('image'));

// routes;

router.route('/photos')
    .get(getPhotos)
    .post(upload.single('image'), createPhoto);

router.route('/photos/:id')
    .get(getPhoto)
    .delete(deletePhoto)
    .put(updatePhoto);

    router.route('/peliculas')
    .get(getPeliculas)
    .post(upload.single('image'), createPelicula);

router.route('/peliculas/:id')
    .get(getPelicula)
    .delete(deletePelicula)
    .put(updatePelicula);

export default router;