import readFile from '../utils/readFile';

class ScoreListStore {
    static async knowRank(totalScore: number): Promise<number> {
        try {
            const readedObj = await readFile();
            const allScores: number[] = readedObj.scoresList.sort((a: number, b: number) => a - b);
            if (allScores.includes(totalScore)) {
                const rank: number = (allScores.indexOf(totalScore) / allScores.length) * 100;
                return Number(rank.toFixed(2));
            }
            let counter = 0;
            for(let i =0 ; i< allScores.length ; i++){
                if(totalScore > allScores[i]){
                    counter +=1;
                }
                else break;
            }
            console.log(counter);
            return (counter / allScores.length) * 100;
        } catch (err) {
            throw new Error(`can not post scores , ${err}`)
        }
    }

}
export default ScoreListStore;