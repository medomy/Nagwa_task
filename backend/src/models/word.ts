import Word from '../types/word'
import readFile from '../utils/readFile';
// this is where functionality of module words happens
class WordStore {
    // function to get random words
    static async getWords():Promise<Word[]>{
        try{
            // read the json file
            const readedObj = await readFile();
            // get list of all words exist in wordList
            const allWords = readedObj.wordList;
            let randomWords:Word[] = [];
            // getting into a loop to get words randomely inside the list and making sure that at least one of every type exists
            while (true) {
                for(let i =0 ; i< 10 ; i++) {
                    // using math random to get rondom indices in array
                    randomWords.push(allWords[Math.floor(Math.random()*allWords.length)])
                }
                // check evey word type exists
                if(randomWords.find((word)=> word.pos === 'verb' && randomWords.find((word)=> word.pos === 'noun') && randomWords.find((word)=> word.pos === 'adverb')) && randomWords.find((word)=> word.pos === 'adjective')){
                    break;
                }
            }
            return randomWords;
        }catch(err){
            throw new Error (`can not get words , error is ${err}`)
        }
    }

}
export default WordStore;