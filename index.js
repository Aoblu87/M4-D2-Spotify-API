window.onload= function(){

    
    function displayMusicAlbum(result) {
        console.log(result)
        
        const track = result.data[0]
        const artist = track.artist
        const album= track.album
        console.log(artist.name)

        document.querySelector('#artistName').innerText= artist.name
        document.querySelector('#cover').src=album.cover_big
        
    }
    
    function getRandomAlbum() {
        fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem")
        .then(response => response.json())
        .then(displayMusicAlbum)
    }

getRandomAlbum()

}