
// dichiaro posizioni DOM
const inputSearch = document.querySelector('#searchField')
const cardContainer = document.querySelector('#cardContainer')
const arstistName = document.querySelector('#artistName')
const buttonSearch = document.querySelector('#btnSearch')
const modalList = document.querySelector('#albumTitle')


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

        arstistName.innerText = inputSearch.value.toUpperCase()

        cardContainer.innerHTML += `<div class="card d-flex align-items-center bg-transparent text-white border border-0 mb-4">
                                        <img src="${songArray[i].album.cover_xl}" class="cover card-img" alt="album cover">
                                        <div class="card-img-overlay d-flex justify-content-center align-items-center">
                                            <h5 class="album-title text-center">Album: <br> <span class="text-center fs-5"> ${songArray[i].album.title} </span></h5>
                                            <p class="card-text"></p>
                                            <p class="card-text"></p>
                                        </div>
                                    </div>`


        // creo DOM per il modale
        modalList.innerHTML += `<li class="list-group-item">${songArray[i].album.title}</li>`
    }
}




// ------------funzione di chiamata API
function getRandomAlbum(getUrl) {


    fetch(getUrl())

        .then(response => response.json())
        .then(displayMusicAlbum)
}



//---------------- Abilito enter per catturare input ricerca


// Execute a function when the user presses a key on the keyboard
inputSearch.addEventListener("keypress", function (event) {


    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        buttonSearch.click();
    }
})

//------------------- Rimuovo elementi DOM della precedente ricerca al click del bottone GO
buttonSearch.addEventListener("click", removeElement)
buttonSearch.addEventListener('keypress', removeElement)

function removeElement() {

    // rimuovo lista album da MYlist
    modalList.innerHTML = ''
    // rimuovo titolo sezione
    arstistName.innerText = ''

    // rimuovo precedenti risultati
    while (cardContainer.hasChildNodes()) {
        cardContainer.removeChild(cardContainer.firstChild)
    }

}

