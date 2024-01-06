function user(name, password) {
    this._name = name;
    this._password = password;

    Object.defineProperty(this, 'name', {
        get: function() {
            return this._name.toUpperCase();
        },
        set: function(name) {
            this._name = name;
        }
    });

    Object.defineProperty(this, 'password', {
        get: function() {
            return this._password
        },
        set: function(value) {
            this._password = value;
        }
    });
};

const Ahmad = new user('Ahmad', '123');
console.log(Ahmad.name);
console.log(Ahmad.password);