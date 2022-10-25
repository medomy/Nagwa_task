import {promises as fsPromises} from 'fs';
const fileDir = __dirname;
async function readFile(directory:string = fileDir){
    try{
        const testDataFile = await fsPromises.readFile(`${directory}/TestData.json`);
        return JSON.parse(testDataFile.toString());
    }catch(err){
        throw new Error(`can not read file , ${err}`)
    }
}
export default readFile;