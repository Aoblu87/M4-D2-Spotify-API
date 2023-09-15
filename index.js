window.onload = function () {


    function displayMusicAlbum(result) {

        const songArray = result.data
        const imgTags = document.querySelectorAll('.cover')
        const titles=document.querySelectorAll('.albumTitle')

        for (let i = 0; i < songArray.length; i++) {

            
            // titolo artista
            const artist = songArray[i].artist
            document.querySelector('#artistName').innerText = artist.name

            // Immagini cover
            const album = songArray[i].album
            for (const img of imgTags) {
                img.src = album.cover_medium
            }

            // testo card overlay
            const titleAlbum= album.title
            for (const title of titles) {
                ti
            }



        }

        // console.log(songArray)
        // const artist = track.artist
        // const album= track.album
        // console.log(artist.name)

        // const artistName= document.querySelectorAll('.artistName').innerText= artist.name


        // document.querySelector('#cover').src=album.cover_big


    }

    function getRandomAlbum() {
        fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem")
            .then(response => response.json())
            .then(displayMusicAlbum)
    }

    getRandomAlbum()

}