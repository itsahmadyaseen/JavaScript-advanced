const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI')
// console.log(descriptor);

const user = {
    name: 'Ahmad',
    id: '001'
}

Object.defineProperty(user, 'name', {
    writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(user, 'name'));
