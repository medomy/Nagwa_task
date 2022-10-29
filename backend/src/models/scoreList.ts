import readFile from '../utils/readFile';
// scoreList model to include all functionality of scoreList 
class ScoreListStore {
    // function to get rank
    static async knowRank(totalScore: number): Promise<number> {
        try {
            // read the json file
            const readedObj = await readFile();
            // sort all scores in list 
            const allScores: number[] = readedObj.scoresList.sort((a: number, b: number) => a - b);
            // in 90% of cases will enter this condition to get a rank based on other scores
            if (allScores.includes(totalScore)) {
                // the rank based on indices of sorted array
                const rank: number = (allScores.indexOf(totalScore) / allScores.length) * 100;
                return Number(rank.toFixed(2));
            }
            // in case the total score is not in the scoreList
            // we have to get its position if it was in the list
            let counter = 0;
            // look for its place in list:
            for(let i =0 ; i< allScores.length ; i++){
                if(totalScore > allScores[i]){
                    counter +=1;
                }
                else break;
            }
            return Number(((counter / allScores.length) * 100).toFixed(2));
        } catch (err) {
            throw new Error(`can not post scores , ${err}`)
        }
    }

}
export default ScoreListStore;