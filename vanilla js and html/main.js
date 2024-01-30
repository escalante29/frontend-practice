create a function that receives a value and returns a promise
if the value is greater than 4, return a reject 
otherwise fullfill the promise and return entered value

const isValidPromise = value => {
    try {
        const myPromise = new Promise((resolve, reject) => {
            if (value > 4) {
                return resolve(value)
            } else return reject(new Error('Value is not greater than 4!'))
        })

        return myPromise.then(val => console.log('got value: ', val))
            .catch(err => console.error(err, `got ${value}`))
            .finally('promise end')
    } catch (e) {
        console.log('there was en error: ', e)
    }
}

Promise.all([
    isValidPromise(3),
    isValidPromise(6)
])