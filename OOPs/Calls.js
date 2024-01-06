function setUserName(userName){
    this.userName = userName;
    console.log(`Completed`);
}

function createUser(userName, email){
    setUserName.call(this, userName);
    this.email = email;
}

const newUser = new createUser('Ahmad', 'abc@mail.com')
console.log(newUser);