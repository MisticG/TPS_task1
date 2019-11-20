function initSite() {
    //$('#nav-home-tab a[href="#nav-home"]').tab('show')
    //$('nav-profile-tab a[href="#nav-profile"]').tab('show')

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
        console.log(data)
    }).catch(err =>
        console.error(err)
    )

    movieInfoBox();
}

function movieInfoBox() {
    var movieMain = document.getElementsByTagName('main')[1]
    var movieDiv = document.createElement('div')
    movieDiv.classList = 'movieContainer'
    if(movieDiv.style.opacity == 0) {
        movieDiv.classList.add('fadeIn')
    } else {
        movieDiv.style.opacity = 0
    }
    movieDiv.style.color = 'black'
    movieDiv.innerHTML = 'hej'

    movieMain.appendChild(movieDiv)
    movieInfoImage()
}

function movieInfoImage() {
    var movieMain = document.getElementsByTagName('main')[1]
    var movieImageDiv = document.createElement('div')
    var movieImage = document.createElement('img')
    movieImageDiv.classList= 'imageContainer'
    if(movieImageDiv.style.opacity == 0) {
        movieImageDiv.classList.add('fadeIn')
    } else {
        movieImageDiv.style.opacity = 0
    }
    movieImage.classList = 'imageSrc'
    movieImage.src = 'tiger.jpg'
    //göra en klass för image src o styla den i samma storlek som imagecontainer. Borderradius och eventuella transitions

    movieImageDiv.appendChild(movieImage)
    movieMain.appendChild(movieImageDiv)
}