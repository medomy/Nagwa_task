import express from 'express';
import WordStore from '../models/word';

// handling the functions happen when making requests
const getWords = async (req:express.Request , res: express.Response)=>{
    try{
        const words = await WordStore.getWords();
        res.json(words);
    }catch(err){
        console.log(err);
        res.send(err);
        res.status(400);
    }
}
// giving out the end points
const wordsHandler = (route : express.Router)=>{
    route.get('/randomWords' , getWords);
}
export default wordsHandler;