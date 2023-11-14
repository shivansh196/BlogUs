import express from 'express';
import cors from 'cors';  //Cross-Origin Resource Sharing
import user_auth from './routes/auth.js';
import blogs from './routes/blogs.js';
import news from './routes/news.js'

const app = express();
app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Hello - Main Page")
})

//Routes :: API = /api/<version number>
app.use('/api/v1/auth',user_auth);
app.use('/api/v1/blogs',blogs);
app.use('/api/v1/news',news);
app.use('*',(req,res)=>{
    res.status(404).json({error: "Not Found"})
});

export default app;