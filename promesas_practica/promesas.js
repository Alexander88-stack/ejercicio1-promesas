console.log('Hola mundo')
const helloPromise = () => {
    return new Promise((resolve,reject) => {
    if(true) {
        setTimeout( () => {
            resolve('Hello');
        },1000);
    } else {
        reject('Depierta');
    } 
});
};

const goodbyePromise = () => {
    return new Promise((resolve,reject) => {
        if(true) {
            setTimeout( () => {
                resolve('BYE BYE!');
            },4000);
        }else {
            reject('Now way!');
        }
    });
};

Promise.all([helloPromise(),goodbyePromise()])
.then(response => console.log('Respuesta es:',response))
.catch(error => console.log('Se ha producido un error',error))

Promise.race([helloPromise(),goodbyePromise()])
    .then(response => console.log('La respuesta es',response))
    .catch(error => console.log('Estas disparado:',error))