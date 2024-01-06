class User {
    constructor(username) {
        this.username = username;
    }

    LogMe(){
        console.log(`Username: ${this.username}`);
    }
    
    static createId() {
        return `123`;
    }
}

const ahmad = new User('Ahmad');
ahmad.LogMe();
ahmad.createId();