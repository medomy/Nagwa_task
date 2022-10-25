import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import wordsHandler from './handlers/words';
import wordsRoute from './routes/words/words_route';
const app: express.Application = express();
const port: number = 4000;
const address: string = `http://localhost:${port}`;

const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use([cors(corsOptions) , bodyParser.json()]);
app.use('/words' , wordsRoute);
app.get('/' , (req:express.Request , res:express.Response)=>{
    res.send('welcome to words application, hope all is well')
});
wordsHandler(wordsRoute);
app.listen(port , ()=>{
    console.log(`app is opened at : ${address}`);
})