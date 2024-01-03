const promiseOne = new Promise(function(resolve, reject) {

    setTimeout(function() {
        console.log('Async code running');
        resolve();
    }, 1000)
})

promiseOne.then(function(){
    console.log('Promise completed');
})



const promiseTwo = new Promise(function(resolve, reject){
    setTimeout(function() {
        console.log('Async 2 code running');
        resolve();
    }, 2000)
}).then(function() {
    console.log('Promise 2 completed');
})



const  promiseThree = new Promise(function(resolve, reject){
    setTimeout(function() {
        resolve({user : 'Ahmad', email : 'abc@gmail.com'});
    }, 3000)
})

promiseThree.then(function(user){
    console.log(user);
})

Promise.all([promiseOne, promiseTwo, promiseThree])



const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function() {
        let error = false;
        if(!error){
            resolve({username : 'ahmad', password : '123'});
        }
        else{
            reject('Error has been detected');
        }
    }, 4000);
});

promiseFour.then((user) => {
    console.log(user);
    return user.username;
}).then((username) => {
    console.log(username);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log('Promises are completed');
})



const promiseFive = new Promise((resolve, reject) => {
    setTimeout(function() {
        let error = true;
        if(!error){
            resolve({username : 'Rust', password: 'abc'});
        } else{
            reject('Error encountered');
        }

    }, 1000);
});

async function consumePromise(){
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
} 

consumePromise();



async function getUser(){
    try {
        const response = await fetch('api.github.com/users/ahmadyaseen');
        const data = await response.jason();
        console.log(data);
    } catch (error) {
        console.log('Error detected');
    }
};

getUser()



fetch('api.github.com/users/ahmadyaseen').then((response) => {
    return response.jason();
}).then((data) => {
    console.log(data);
}).catch((error) => console.log('Error detected')
)



