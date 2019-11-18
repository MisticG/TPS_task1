function initSite() {

}

function getChuckieQuote() {
    fetch('http://localhost:3000/api/chuckieJoke', {
        method: 'GET'
    }).then(res => 
        res.json()
    ).then(data => {
        console.log(data.value)
    }).catch(err => 
        console.error(err))
}

function makeRequest() {

}

function printChuckieInfo() {

}

function printMovieInfo() {

}