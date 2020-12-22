const filesystem = require('fs');
const filePath = 'FinalProject/js.md'; // Alterar dependendo do local no CMD
let contentOfFile = `### That works in JS with filesystem package!!!!`;

function writeFile(filePath,fileContent){
    filesystem.writeFileSync(filePath, fileContent)
}

function readFile(filePath){
    return filesystem.readFileSync(filePath, 'utf-8');
}

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