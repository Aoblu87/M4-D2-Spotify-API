// creo funzione per estrapolare la stringa dalla barra di ricerca e inserirla nel url della fetch

const buttonSearch = document.querySelector('#button-search')
const inputSearch = document.querySelector('#searchField')

buttonSearch.addEventListener('click', event => {

    const inputText = inputSearch.event.target.innerText

    console.log(inputText)


})





// --------------------------------------------------------
function displayMusicAlbum(result) {

    const songArray = result.data

    const titles = document.querySelectorAll('.albumTitle')
    const divContainer = document.querySelector('.songs')

    for (let i = 0; i < songArray.length; i++) {

        const arstistName = document.querySelectorAll('songs')
        arstistName
        
        const newHTML = divContainer.innerHTML = `<h2 id="artistName">${songArray[i].artist.name}</h2>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="eminemSection">
        <div class="card bg-transparent text-white border border-0">
        <img src="${songArray[i].album.cover_big}" class="cover card-img" alt="album cover">
        <div class="card-img-overlay">
        <h5 class="albumTitle" class="card-title"></h5>
        <p class="card-text"></p>
        <p class="card-text"></p>
        </div>
        </div>`

        card.appendChild(newHTML[i])






    }



}

function getRandomAlbum() {
    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem")
        .then(response => response.json())
        .then(displayMusicAlbum)
}

getRandomAlbum()



