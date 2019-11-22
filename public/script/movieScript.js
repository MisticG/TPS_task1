var mData;
var movieData;
var movieDivExist;
var movieContent;
var modalExist;

function initSite() {
    movieDivExist = false;
    modalExist = false; 
}

function getMovieInfo() {
    var searchInput = document.getElementById('inlineFormInput').value
    if (movieDivExist) {
        document.getElementsByTagName('main')[1].innerHTML = "";
    }
    document.getElementById('movieform').reset()

    fetch('/api/movieInfo/?search=' + searchInput, {
        method: 'GET',
    }).then(res =>
        res.json()
    ).then(data => {
        movieData = data
        movieInfoBox()
    }).catch(err =>
        console.error(err)
    )
}

function movieInfoBox() {
    mData = movieData.Search
    if(!(mData === undefined)) {
        var x = 0;
        var movieMain = document.getElementsByTagName('main')[1]
        var movieDiv = document.createElement('div')
        movieDiv.id = 'movieDivId'
        var movieOl = document.createElement('ol')
        movieOl.id = 'orderedListId'
        movieDiv.classList = 'movieContainer'
        movieDivExist = true

        if(movieDiv.style.opacity == 0) {
            movieDiv.classList.add('fadeIn')
        } else {
            movieDiv.style.opacity = 0
        }

        mData.forEach( data => {
            var movieLi = document.createElement('li')
            movieLi.id = x++
            movieLi.style.fontSize = 1.6 + 'em'
            movieLi.innerText = data.Title  

            movieOl.appendChild(movieLi)
        })
        
        movieDiv.style.color = 'black'
        
        movieDiv.appendChild(movieOl)
        movieMain.appendChild(movieDiv)
        getClickedMovieIndex();
    } else {
        alert("Stop bashing your keyboard. Try again!")
    }
}

function getClickedMovieIndex() {
    var ol = document.getElementById('orderedListId'); // Parent

    ol.addEventListener('click', function (e) {
        var target = e.target; // Clicked element
        while (target && target.parentNode !== ol) {
            target = target.parentNode; // If the clicked element isn't a direct child
            if(!target) { 
                return; 
            } // If element doesn't exist
        }
        if (target.tagName === 'LI'){ //Check if the element is a LI
            getMoviePlot(target.id);
        }
    });
}

function getMoviePlot(movieIndex) {
    if (modalExist) {
        document.getElementById('movieContent').innerHTML = "";
    }
    $('#movieModal').modal('toggle');
    var imdbId = mData[movieIndex].imdbID
    fetch('/api/movieImdb/?search=' + imdbId, {
        method: 'GET',
    }).then(res =>
        res.json()
    ).then(data => {
        movieContent = data
        movieModal()
        movieImage()
    }).catch(err =>
        console.error(err)
    )
}

function movieModal() {
    var movieContents = document.getElementById('movieContent')
    var movieContentDiv = document.createElement('div')
    movieContentDiv.classList = 'modalDiv'
    movieContentDiv.innerHTML = 
        '<h4>Title: </h4>' + 
        '<p>' + movieContent.Title + '</p>' + 
        '<h4>Year: </h4>' + 
        '<p>' + movieContent.Year + '</p>' +
        '<h4>Plot: </h4>' + 
        '<p>' + movieContent.Plot + '</p>' +
        '<h4>Rating IMDb: </h4>' + 
        '<p>' + movieContent.Ratings[0].Value + '</p>'

    modalExist = true
    movieContents.appendChild(movieContentDiv)
}

function movieImage() {
    var movieContents = document.getElementById('movieContent')
    var movieImageDiv = document.createElement('div')
    var movieImage = document.createElement('img')
    movieImageDiv.classList= 'imageContainer'

    if(movieImageDiv.style.opacity == 0) {
        movieImageDiv.classList.add('fadeIn')
    } else {
        movieImageDiv.style.opacity = 0
    }

    movieImage.classList = 'imageSrc'
    movieImage.src = movieContent.Poster

    movieImageDiv.appendChild(movieImage)
    movieContents.appendChild(movieImageDiv)
}