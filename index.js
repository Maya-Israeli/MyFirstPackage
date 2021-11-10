const code = require('./myFunction')

let maya = {
    id: '123',
    company: 'minute-media'
}

let maya2 = code.cloneAndFreeze(maya);
console.log(maya2);
maya2.id = '345';
console.log(maya2);