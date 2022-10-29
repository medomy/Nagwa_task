import express from 'express';
import ScoreListStore from '../models/scoreList';

// handling scores requests
// function when request is triggered to post the score
const getRank =async (req:express.Request , res:express.Response)=>{
    try{
        const rank = await ScoreListStore.knowRank(Number(req.body.totalScore));
        res.json({rank : rank});
    }catch(err){
        res.send(err);
        res.status(400);
    }
}
const scoreHandler = (route : express.Router)=>{
    route.post('/getRank' , getRank);
}
export default scoreHandler;