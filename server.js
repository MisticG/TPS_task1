const express = require('express')
const fetch = require('node-fetch')
const app = express()
const port = 3000

const apiKey = '4fb12825b7msh51f653b00d3a3e4p134a2ajsn85857b79fc18'
const url = 'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random'
//const hostUrl = 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com'

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/api/chuckieJoke', (req, res) => {
    fetch(url, {
        method: 'GET',
        headers: {
        //'x-rapidapi-host' : hostUrl,
        'x-rapidapi-key' : apiKey,
        'accept' : 'application/json'
        }
    })
    .then(res => res.json())
    .then(json => {
        res.send(json)
    }).catch(err => console.error(err))
} )

app.listen(port, () => console.log(`App listening on port ${port}`))