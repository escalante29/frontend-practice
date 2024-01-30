const syncPromise = (value=99) => {
    try {
        return new Promise((resolve, reject) => {
            if (value > 4) {
                return resolve(value)
            } else return reject(`Value {${value}} is not greater than 4!`)
        })
    } catch (e) {
        console.error(e)
    }
}

Promise.allSettled([
    syncPromise(),
    syncPromise(2),
    syncPromise(7),
    syncPromise(8)
]).then(values=> {
    // console.log('values are:', values)
    values.map(v=> v.value ? console.log(v.value): console.error(v.reason))
}).catch(err => console.error(err))