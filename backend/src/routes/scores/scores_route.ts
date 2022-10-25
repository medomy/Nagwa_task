import express from 'express';
const scoresRoute:express.Router = express.Router();

scoresRoute.get('/',(req:express.Request , res: express.Response)=>{
    res.send('welcome to scores part');
})

export default scoresRoute;