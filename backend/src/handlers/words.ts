import express from 'express';
import WordStore from '../models/word';


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

const wordsHandler = (route : express.Router)=>{
    route.get('/rondomWords' , getWords);
}
export default wordsHandler;