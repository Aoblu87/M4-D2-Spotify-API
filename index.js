// creo funzione per estrapolare la stringa dalla barra di ricerca e inserirla nel url della fetch

const buttonSearch = document.querySelector('#button-search')
const inputSearch = document.querySelector('#searchField')

function readInputValue() {

    let value = inputSearch.value

    let url = "https://striveschool-api.herokuapp.com/api/deezer/search?q="

    let fetch = url.concat('',value)

}





// --------------------------------------------------------
function displayMusicAlbum(result) {

    const songArray = result.data

    const divContainer = document.querySelector('.songs')
    const cardContainer = document.querySelector('#cardContainer')

    for (let i = 0; i < songArray.length; i++) {

        const arstistName = document.querySelector('#artistName')
        arstistName.innerText = songArray[i].artist.name

        cardContainer.innerHTML += `
        
        <div class="card bg-transparent text-white border border-0 mb-4">
        <img src="${songArray[i].album.cover_big}" class="cover card-img" alt="album cover">
        <div class="card-img-overlay">
        <h5 class="albumTitle" class="card-title"></h5>
        <p class="card-text"></p>
        <p class="card-text"></p>
        </div>
        </div>`


    }

}








function getRandomAlbum(readInputValue) {

    fetch(readInputValue)
        .then(response => response.json())
        .then(displayMusicAlbum)
}

// getRandomAlbum()



