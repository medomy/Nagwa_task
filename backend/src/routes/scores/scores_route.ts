import express from 'express';
// make a seperate route for scores to make independency
const scoresRoute:express.Router = express.Router();

scoresRoute.get('/',(req:express.Request , res: express.Response)=>{
    res.send('welcome to scores part');
})

export default scoresRoute;