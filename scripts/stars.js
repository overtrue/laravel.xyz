require('dotenv').config()
const github = require('octonode')
const fs = require('fs')
const path = require('path')
const client = github.client(process.env.GITHUB_TOKEN)
const stars = require('../content/stars.json')
const output = path.join(process.cwd(), 'content/compiled/stars.json')

Promise.all(stars.map((item) => {
    return client.user(item.github_id)
        .infoAsync()
        .then(user => user ? { ...item, ...user[0] } : null)
        .catch(console.error)
})).then((users) => {
    users = users.filter(v => !!v)
    fs.writeFileSync(output, JSON.stringify(users, null, 2), { flag: 'w+' })
    console.log(`${users.length} stars refreshed`)
}).catch(console.error)
