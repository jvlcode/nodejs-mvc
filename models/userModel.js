const fs = require('fs');
const path = require('path')

exports.getUser = (email) => {
    const bufferData = fs.readFileSync(path.join(__dirname, '..', 'data','users.json' ))
    const jsonData = JSON.parse(bufferData);

    const filteredUser =  jsonData.filter((user) => {
        return user.email == email
    })

    if(filteredUser.length > 0) {
        return filteredUser[0];
    }
    return null
}
