require('dotenv').config()
const github = require('octonode')
const fs = require('fs')
const path = require('path')
const axios = require('axios')
const client = github.client(process.env.GITHUB_TOKEN)
const packagesList = require('../content/packages.json')
const languages = require('../content/compiled/languages.json')
const output = {
    package: path.join(process.cwd(), 'content/compiled/packages.json'),
    topics: path.join(process.cwd(), 'content/compiled/topics.json')
}

Promise.all(packagesList.map((item) => {
    return axios.get(`https://repo.packagist.org/p2/${item}.json`).then((response) => {
        const repoName = response.data.packages[item][0].source.url.substring('https://github.com/'.length).replace('.git', '')
        return client.repo(repoName)
            .infoAsync()
            .then(repo => repo ? repo[0] : null)
            .then((repo) => {
                console.info(`-> ${repoName} refreshed √`)
                return repo
            })
            .catch((err) => console.error(repoName, err))
    })
})).then((packages) => {
    packages = packages.filter(v => !!v).map(p => {
        p.language_color = languages[p.language].color || '#ccc'
        return p
    })
    fs.writeFileSync(output.package, JSON.stringify(packages, null, 2), { flag: 'w+' })
    console.log(`${packages.length} packages refreshed`)

    let topics = {}

    packages.map((p) => {
        p.topics.map(t => {
            topics[t] = (topics[t] || 0) + 1
        })
    })

    let topicsArray = []
    for (const [name, packages_count] of Object.entries(topics)) {
        topicsArray.push({ name, packages_count })
    }

    topicsArray.sort((a, b) => b.packages_count - a.packages_count)

    fs.writeFileSync(output.topics, JSON.stringify(topicsArray, null, 2), { flag: 'w+' })
    console.log(`${topicsArray.length} topics refreshed`)
}).catch(console.error)
