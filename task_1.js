const user = {
    company: 'Google'
}

const admin = Object.create(user);
admin.name = 'John';
admin.getName = function() {
    return this.name
}

function printOwnProperties (obj) {
    for (let prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            console.log(`${prop}: ${obj[prop]}`)
        }
    }
}

printOwnProperties(admin);
