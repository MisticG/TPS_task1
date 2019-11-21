function initSite() {
    //$('#nav-home-tab a[href="#nav-home"]').tab('show')
    //$('nav-profile-tab a[href="#nav-profile"]').tab('show')

}

var movieData;
var searchInput;

function getChuckieQuote() {
    fetch('http://localhost:3000/api/chuckieJoke', {
        method: 'GET'
    }).then(res => 
        res.json()
    ).then(data => {
        console.log(data)
    }).catch(err => 
        console.error(err))
}

function getMovieInfo() {
    searchInput = document.forms['movieForm']['search'].value

    fetch('/api/movieInfo/?search=' + searchInput, {
        method: 'GET',
    }).then(res =>
        res.json()
    ).then(data => {
        movieData = data
        console.log(data)
        movieInfoBox()
        //movieInfoImage()
    }).catch(err =>
        console.error(err)
    )
}

function movieInfoBox() {
    var mData = movieData.Search
    /*if(movieData.Search == undefined) {
        alert('No movie found! Try again!')
        searchInput = document.getElementById('myForm').reset()
    }*/
    var movieMain = document.getElementsByTagName('main')[1]
    var movieDiv = document.createElement('div')
    var movieOl = document.createElement('ol')
    movieDiv.classList = 'movieContainer'

    if(movieDiv.style.opacity == 0) {
        movieDiv.classList.add('fadeIn')
    } else {
        movieDiv.style.opacity = 0
    }
    mData.forEach( data => {
        var movieLi = document.createElement('li')
        movieLi.style.fontSize = 1.6 + 'em'
        movieLi.innerText = data.Title        
        movieOl.appendChild(movieLi)
    })
    //console.log(movieData.Search)
    /*movieDiv.innerHTML = 
    '<h5>Title: </h5>' + 
    '<p>' + movieData.Search + '</p>' */
    /*'<h5>Year: </h5>' + 
    '<p>' + movieData.Year + '</p>' +
    '<h5>Plot: </h5>' + 
    '<p>' + movieData.Plot + '</p>' +
    '<h5>Rating IMDb: </h5>' + 
    '<p>' + movieData.Ratings[0].Value + '</p>' */
    
    movieDiv.style.color = 'black'
    movieDiv.appendChild(movieOl)
    movieMain.appendChild(movieDiv)
}

/*function movieInfoImage() {
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
    movieImage.src = movieData.Poster
    //göra en klass för image src o styla den i samma storlek som imagecontainer. Borderradius och eventuella transitions

    movieImageDiv.appendChild(movieImage)
    movieMain.appendChild(movieImageDiv)
}*/