const express = require('express')
const fetch = require('node-fetch')
const app = express()
const port = 3000

const chuckieKey = '4fb12825b7msh51f653b00d3a3e4p134a2ajsn85857b79fc18'
const chucksUrl = 'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random'

app.use(express.static('public'))

app.get('/api/chuckieJoke', (req, res) => {
    fetch(chucksUrl, {
        method: 'GET',
        headers: {
        'x-rapidapi-key' : chuckieKey,
        'accept' : 'application/json'
        }
    })
    .then(res => res.json())
    .then(json => {
        res.send(json)
    }).catch(err => console.error(err))
})

app.get('/api/postMovie', (req, res) => {
    res.send(JSON.stringify(req.query.search))
})

app.listen(port, () => console.log(`App listening on port ${port}`))