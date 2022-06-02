const axios = require('axios')
const yaml = require('js-yaml')
const fs = require('fs')

axios.get('https://raw.githubusercontent.com/github/linguist/master/lib/linguist/languages.yml').then(text => {
    fs.writeFileSync('content/compiled/languages.json', JSON.stringify(yaml.load(text.data), null, 2), { flag: 'w+' })
})