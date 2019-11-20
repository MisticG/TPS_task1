const express = require('express')
const fetch = require('node-fetch')
const app = express()
const port = 3000

const chuckieKey = '4fb12825b7msh51f653b00d3a3e4p134a2ajsn85857b79fc18'
const chucksUrl = 'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random'

const movieKey = '13dc0edf'
const movieUrl = 'http://www.omdbapi.com/?t='

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

app.get('/api/movieInfo', (req, res) => {
    let searchInput = req.query.search
    fetch(movieUrl + searchInput + '&plot=full&apikey=' + movieKey, {
        method: 'GET',
    })
    .then(res => res.json())
    .then(json => { 
        res.send(json)
    }).catch(err => console.error(err))
})

app.listen(port, () => console.log(`App listening on port ${port}`))