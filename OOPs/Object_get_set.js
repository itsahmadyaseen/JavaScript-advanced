const user = {
    _name: 'Ahmad',
    _password: '123',

    get name(){
        return this._name.toUpperCase();
    },
    set name(name) {
        return this._name = name
    },

    get password(){
        return this._password;
    },
    set password(value) {
        return this._password = value;
    }
}

const Ahmad = Object.create(user);
console.log(Ahmad.name);
console.log(Ahmad.password);
