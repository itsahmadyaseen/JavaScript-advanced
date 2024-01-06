class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Admin extends User {
    constructor(username, password) {
        super(username);
        this.password = password;
    }
    addUser(){
        console.log(`A new user is added ${this.username}`);
    }
}

const Ahmad = new Admin('Ahmad', '123');
Ahmad.addUser();

const Yaseen = new User('Yaseen', '456');
Yaseen.logMe();

console.log(Ahmad instanceof Admin);
console.log(Yaseen instanceof User);