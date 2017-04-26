function ItunesController() {
    var itunesService = new ItunesService()
    //Do Not Modify the getMusic function
    this.getMusic = function getMusic(e) {
        e.preventDefault();
        var artist = e.target.artist.value;
        itunesService.getMusicByArtist(artist).then(drawSongs);
    }

    function drawSongs(songList) {
        // This is where you task begins
        var template = ""
        for (var i = 0; i < songList.length; i++) {
            var songs = songList[i]
            template += `
                    <div class="col-xs-4 text-center">
                <div class="well">
                    <div class="media">
                        <div class="media-left">
                            <a href="#">
                    <img class="media-object" src="${songs.albumArt}" class="thumbnail">
                        </a>
                        </div>
                     </div>
                    <h2>${songs.artist}</h2>
                    <h4>${songs.title}</h4>
                    <h5>${songs.collection}</h5>
                    <h4>$${songs.price}</h4>
                    <audio src="${songs.preview}"controls></audio>
                     </div>
                    </div>
            `
                    document.addEventListener("play", function(event){
                     var allAudioTags = document.getElementsByTagName("audio")
                     for(var i=0; i<allAudioTags.length; i++){
                         var stopSong = allAudioTags[i]
                         if(stopSong != event.target){
                             stopSong.pause()
                         }
                     }
                    }, true)
        }
        document.getElementById("songs").innerHTML = template
    }




}



var itunesCtrl = new ItunesController()