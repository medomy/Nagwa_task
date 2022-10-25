import {promises as fsPromises} from 'fs';
import { fileDir } from '../utils';
import readFile from '../utils/readFile';

class ScoreListStore{
    static async knowRank(totalScore : number):Promise<number>{
        try{
            const readedObj = await readFile();
            const allScores = readedObj.scoresList.sort((a:number,b:number)=> a-b);
            const rank:number = (allScores.indexOf(totalScore) / allScores.length) * 100;
            return Number(rank.toFixed(2));
        }catch(err){
            throw new Error(`can not post scores , ${err}`)
        }
    }

}
export default ScoreListStore;