
// dichiaro posizioni DOM
const inputSearch = document.querySelector('#searchField')
const cardContainer = document.querySelector('#cardContainer')
const arstistName = document.querySelector('#artistName')


// creo funzione per estrapolare la stringa dalla barra di ricerca e inserirla nel url della fetch
function readInputValue() {

    let query = ''
    let input = inputSearch.value

    let url = "https://striveschool-api.herokuapp.com/api/deezer/search?q="

    query = url.concat('', input)
    
    return query
}






// ---------funzione che mostra i risultati della chiamata----------
function displayMusicAlbum(result) {

    const songArray = result.data

    // const divContainer = document.querySelector('.songs')

    for (let i = 0; i < songArray.length; i++) {

        arstistName.innerText = inputSearch.value

        cardContainer.innerHTML += `<div class="card bg-transparent text-white border border-0 mb-4">
                                        <img src="${songArray[i].album.cover_xl}" class="cover card-img" alt="album cover">
                                        <div class="card-img-overlay">
                                            <h5 class="albumTitle" class="card-title"></h5>
                                            <p class="card-text"></p>
                                            <p class="card-text"></p>
                                        </div>
                                    </div>`


        // creo DOM per il modale
        const modalList = document.querySelector('#albumTitle')

        modalList.innerHTML += `<li class="list-group-item">${songArray[i].album.title}</li>`
    }
}



// ------------funzione di chiamata 
function getRandomAlbum(getUrl) {
    
    
    fetch(getUrl())

        .then(response => response.json())
        .then(displayMusicAlbum)
}



//---------------- Abilito enter per catturare input ricerca
// Get the input field
const buttonSearch = document.querySelector('#btnSearch')


// Execute a function when the user presses a key on the keyboard
inputSearch.addEventListener("keypress", function(event) {

    // rimuovo titolo sezione
    arstistName.innerText = ''

    // rimuovo precedenti risultati
    while (cardContainer.hasChildNodes()) {
        cardContainer.removeChild(cardContainer.firstChild)
      }

  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    buttonSearch.click();
  }
})

