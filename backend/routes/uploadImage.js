import express from 'express';
const router = express.Router();
//Controllers ::
import {uploadImage , getImage} from '../controllers/uploadImage.js';
//Middleware's ::
import fetchuser from '../middleware/fetchuser.js';
import upload from '../middleware/upload.js';

//Route 1:: Get image using GET "/api/v1/blog/uploadImage/getfile/:filename"
router.get('/file/:filename', getImage);

//Route 2:: Upload image using POST "/api/v1/blog/uploadImage/uploadfile"  Login required 
router.post('/file/upload', fetchuser, upload.single('file'), uploadImage);

export default router;