var chucksData;
var chuckExist;

function initSite() {
    chuckExist = false;
}

function getChuckieQuote() {
    if (chuckExist) {
        document.getElementsByTagName('main')[0].innerHTML = "";
    }
    fetch('http://localhost:3000/api/chuckieJoke', {
        method: 'GET'
    }).then(res => 
        res.json()
    ).then(data => {
        chucksData = data.value
        chuckBox()
    }).catch(err => 
    console.error(err))
}

function chuckBox() {
    var myBox = document.getElementsByTagName('main')[0]
    myBox.style.display = 'flex'
    myBox.style.justifyContent = 'flex-end'
    var myDiv = document.createElement('div')
    myDiv.classList = 'myContainer'
    chuckExist = true

    if(myDiv.style.opacity == 0) {
        myDiv.classList.add('fadeIn')
    } else {
        myDiv.style.opacity = 0
    }

    myDiv.innerHTML = '<h3>' + chucksData + '</h3>'
    
    myBox.appendChild(myDiv)
}
