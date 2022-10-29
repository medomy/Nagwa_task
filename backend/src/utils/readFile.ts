import {promises as fsPromises} from 'fs';
// get the directory of file to get the directory of the json we want to read
const fileDir = __dirname;
// read json file function 
// only reads the json given
async function readFile(directory:string = fileDir){
    try{
        // get the json file using node file system
        const testDataFile = await fsPromises.readFile(`${directory}/TestData.json`);
        return JSON.parse(testDataFile.toString());
    }catch(err){
        throw new Error(`can not read file , ${err}`)
    }
}
export default readFile;