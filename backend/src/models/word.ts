import {promises as fsPromises} from 'fs';
import { fileDir } from '../utils';
import Word from '../types/word'
class WordStore {
    static async getWords():Promise<Word[]>{
        try{
            const testDataFile = await fsPromises.readFile(`${fileDir}/TestData.json`);
            const allWords = JSON.parse(testDataFile.toString()).wordList;
            let randomWords:Word[] = [];
            while (true) {
                for(let i =0 ; i< 10 ; i++) {
                    randomWords.push(allWords[Math.floor(Math.random()*allWords.length)])
                }
                if(randomWords.find((word)=> word.pos === 'verb' && randomWords.find((word)=> word.pos === 'noun') && randomWords.find((word)=> word.pos === 'adverb')) && randomWords.find((word)=> word.pos === 'adjective')){
                    break;
                }
            }
            console.log(randomWords.length);
            return randomWords;
        }catch(err){
            throw new Error (`can not get words , error is ${err}`)
        }
    }

}
export default WordStore;