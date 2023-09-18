
// dichiaro posizioni DOM
const inputSearch = document.querySelector('#searchField')
const cardContainer = document.querySelector('#cardContainer')
const arstistName = document.querySelector('#artistName')
const buttonSearch = document.querySelector('#btnSearch')
const modalList = document.querySelector('#albumTitle')
const mainPage = document.querySelector('.mainPage')



//-------------------- funzione di chiamata per la schermata home
function homeResult() {
    
    const arrayArtist = ['thecranberries', 'theoffsprings', 'sum41']
    let query=[]
    for (let i = 0; i < arrayArtist.length; i++) {
        const artist = arrayArtist[i];

        let url = "https://striveschool-api.herokuapp.com/api/deezer/search?q="
        query += url.concat('', artist)

 
        
    }
    return query

}

function getAlbumHome(getUrl) {


    fetch(getUrl())

        .then(response => response.json())
        .then(displayHomeCard)
}




getAlbumHome(homeResult)


//-------------------- MOstro card della home 
function displayHomeCard(result) {
    const songArray = result.data


    for (let i = 0; i < 7; i++) {

        // arstistName.innerText = inputSearch.value.toUpperCase()

        mainPage.innerHTML += ` <div class="row">
                                    <div class="col-10">
                                        <div class="songs">
                                            <h2 id="artistName">${songArray[i].artist.name.toUpperCase()}</h2>
                                            <div id="cardContainer" class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
                                                <div class="card d-flex align-items-center bg-transparent text-white border border-0 mb-4">
                                                    <img src="${songArray[i].album.cover_xl}" class="cover card-img" alt="album cover">
                                                    <div class="card-img-overlay d-flex justify-content-center align-items-center">
                                                        <h5 class="album-title text-center">Album: <br> <span class="text-center fs-5"> ${songArray[i].album.title} </span></h5>
                                                        <p class="card-text"></p>
                                                        <p class="card-text"></p>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>`
    }
}






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




    // ------------funzione di chiamata API che prende il paramentro dall'input della ricerca
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
    inputSearch.addEventListener('keypress', removeElement)

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

