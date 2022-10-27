import { public_instance } from "../../../network/axios_instance";

class RankService {
    static async rankAnswers(answers : boolean[]):Promise<number>{
        try{
            const score = answers.filter((answer)=> answer === true).length * 10;
            console.log(score);
            const rank = await public_instance.post('/scores/getRank' ,{
                totalScore : score
            });
            return rank.data.rank;
        }catch(err){
            throw new Error(`${err}`);
        }
    }
}

export default RankService;