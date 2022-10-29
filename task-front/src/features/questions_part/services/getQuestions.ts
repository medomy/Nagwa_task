import { public_instance } from "../../../network/axios_instance";
import Word from "../models/word";
// questions service to get random words
class QuestionsStore {
    static async getQuestions():Promise<Word[]>{
        try{
            const res = await public_instance.get('/words/randomWords');
            return res.data;
        }catch(err){
            throw new Error(`${err}`)
        }
    }
}

export default QuestionsStore;