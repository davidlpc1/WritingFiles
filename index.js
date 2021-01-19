//Implemented for instagram
const filesystem = require('fs');
const user = {
    name:'davidlpc1',
    img:'https://github.com/davidlpc1.png',
    age:14
}

filesystem.writeFileSync('user.json', JSON.stringify(user,null,4));