const promisifiedSetTimeout = (timeout, choice) => {
    console.log('Processing request...')
    const promise = new Promise((resolve, reject)=> {
        setTimeout(()=> {
            choice ? resolve({
                user: 'Charlie',
                timeWaited: `${timeout} seconds`
        }) : reject('Promise rejected')
        }, timeout*1000)
    }).catch(err=> {
        console.error(err)
    })
    return promise
}

const showTimeAfter = async(seconds, willResolve) => {
    const result = await promisifiedSetTimeout(seconds, willResolve)
    console.log('result ', result)
}

const result = showTimeAfter(3, false)
const result2 = showTimeAfter(2, true)