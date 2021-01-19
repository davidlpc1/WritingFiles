const filesystem = require('fs');

function writeFile(filePath,fileContent){
    try{
        filesystem.writeFileSync(filePath, fileContent)
    }catch(err){
        console.log(`> WriteFile: error=${err}`)
    }
}

function readFile(filePath){
    try{
        return filesystem.readFileSync(filePath, 'utf-8');
    }catch(err){
        console.log(`> ReadFile: error=${err}`)
    }
}

const filePath = 'js.md'; // Alterar dependendo do local no CMD
let contentOfFile = `### That works in JS with filesystem package!!!!`;
writeFile(filePath, contentOfFile)
const contentOfReadedFile = readFile(filePath); 

if(contentOfReadedFile == contentOfFile){
    console.log({
        status:200,
        description:'The file has been successfully updated'
    })
} else{
    console.log({
        status:400,
        description:'The file has not been changed'
    })
}