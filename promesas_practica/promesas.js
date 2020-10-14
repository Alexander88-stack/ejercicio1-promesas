console.log('Hola mundo')

const goodbyePromise = () => {
    return new Promise((resolve,reject) => {
        if(true) {
            setTimeout( () => {
                resolve('BYE BYE!');
            },1000);
        }else {
            reject('Now way!');
        }
    })
}
goodbyePromise()
.then(response => console.log('Respuesta es:',response))
.then(response => console.log('Vaya lo has liado parda !!!!',response))
.catch(error => console.log('Has motado el lio',error))