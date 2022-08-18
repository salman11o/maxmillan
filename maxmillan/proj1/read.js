const fs = require('fs').promises;
const path ='../files'
async function readFile() {
    const path = "some texxt";
    try {
        const data = await fs.writeFile('..files/file1.txt',path);
        console.log(path);
    } catch (error) {
        console.error(`Got an error trying to read the file: ${error.message}`);
    }
}