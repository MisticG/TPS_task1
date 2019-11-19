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

function getMovieInfo() {
    var searchInput = document.forms['movieForm']['search'].value

    fetch('/api/movieInfo/?search=' + searchInput, {
        method: 'GET',
    }).then(res =>
        res.json()
    ).then(data => {
        console.log(data.Plot)
    }).catch(err =>
        console.error(err))
}