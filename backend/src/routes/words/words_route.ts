import express from 'express';
const wordsRoute:express.Router = express.Router();

wordsRoute.get('/',(req:express.Request , res: express.Response)=>{
    res.send('welcome to words part');
})

export default wordsRoute;