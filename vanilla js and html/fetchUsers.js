const apiUrl = 'https://randomuser.me/api/'

const fetchUsers = async (amount) => {
    const users = []
    for(let i=0; i<amount; i++){
        await fetch(apiUrl).then(async user=> {
            return await user.json()
        }).then(userData => {
            users.push(userData)
        })
    }

    console.log(users)
    renderUsers(users) 
    return users
}

// render users to the DOM
const renderUsers = (users, selector='users') => {
    const containerNode = document.getElementsByClassName(selector)[0]
    users.map(user=> {
        const pre = document.createElement('code')
        const text = document.createElement('pre', {class: 'language-javascript'})
        pre.appendChild(text)
        text.appendChild(document.createTextNode(JSON.stringify(user, null, 4)))
        containerNode.appendChild(pre)
    })
}

fetchUsers(10)