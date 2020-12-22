filePath = 'FinalProject/python.md'
contentOfFile = '### That works in python with open() command!!!!'

def writeFile(filePath,fileContent):
    with open(filePath, 'w') as file:
        file.write(fileContent)

def readFile(filePath):
    with open(filePath, 'r') as file:
        return file.read()

writeFile(filePath, contentOfFile)
contentOfReadedFile = readFile(filePath)

if contentOfReadedFile == contentOfFile :
    print({
        'status':200,
        'description':'The file has been successfully updated'
    })
else:
    print({
        'status':400,
        'description':'The file has not been changed'
    })
