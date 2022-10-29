import express from 'express';
// make a seperate route for words to make independency
const wordsRoute:express.Router = express.Router();
wordsRoute.get('/',(req:express.Request , res: express.Response)=>{
    res.send('welcome to words part');
})

export default wordsRoute;