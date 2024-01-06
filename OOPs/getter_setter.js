class User {
    constructor(name, password) {
        this.name = name;
        this.password = password;
    }

    get name(){
        return this._name.toUpperCase();
    }
    set name(newName) {
        this._name = newName;
    }
}

const Ahmad = new User('Ahmad', 'asd');
console.log(Ahmad.name);
console.log(Ahmad.password);