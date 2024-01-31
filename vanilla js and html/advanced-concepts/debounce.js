function debounce(fn, wait) {
    if(!wait) {
        console.log('You must supply debounce time in seconds!')
        return ()=>{}
    }
    let timer;
    return function(...args) {
        // console.log(...args, args)
        if(timer) {
            clearTimeout(timer)
        }

        this.secret = 456
        const context = this
        console.log(`debounced function will execute in ${wait} seconds`)
        timer = setTimeout(()=> {
            // console.log('args', args)
            // console.log('context', context)
            fn.call(context, ...args)
        }, wait*1000)
    }
}

this.secret = 123;
function sum(num1, num2){
    console.log(num1+num2, this.secret)
}

const debounced = debounce(sum, 1)
debounced(2,3)

module.exports = {
    debounce
}