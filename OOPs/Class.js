// class User {
//     constructor(username, password) {
//         this.username = username;
//         this.password = password;
//     }

//     encryptPassword() {
//         return `${this.password}abc`
//     }
//     changeUserName() {
//         return `${this.username.toUpperCase()}`
//     }
// }

// const ahmad = new User('Ahmad', '123');

// console.log(ahmad.encryptPassword());
// console.log(ahmad.changeUserName());

// Method 2

function User(username, password) {
        this.username = username;
        this.password = password;
    }

Object.prototype.encryptPassword = function() {
    return `${this.password}def`
}
Object.prototype.changeUserName = function() {
    return `${this.username.toUpperCase()}`
}

const yaseen = new User('Yaseen', 'abc');

console.log(yaseen.encryptPassword());
console.log(yaseen.changeUserName());