import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import scoreHandler from './handlers/scores';
import wordsHandler from './handlers/words';
import scoresRoute from './routes/scores/scores_route';
import wordsRoute from './routes/words/words_route';
// declare the app 
const app: express.Application = express();
// declare the port on which app is hosted
const port: number = 4000;
const address: string = `http://localhost:${port}`;
// declare cors options to control the reachability of our api
// make sure your fronend app is hosted on port 3000 locally or you can always change the origin from here
const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
// use cors middleware
app.use([cors(corsOptions) , bodyParser.json()]);
// establishing our routes
app.use('/words' , wordsRoute);
app.use('/scores' , scoresRoute);
// our root directory of api
app.get('/' , (req:express.Request , res:express.Response)=>{
    res.send('welcome to words application, hope all is well');
});
// applying our handlers on routes
wordsHandler(wordsRoute);
scoreHandler(scoresRoute);

// bind and listen to connections made to server
app.listen(port , ()=>{
    console.log(`app is opened at : ${address}`);
})