var grate = document.querySelector('audio');
var play = document.querySelector('.fa-play');
var ban = document.querySelector('img');
var pre = document.getElementById('prev');
var nex = document.getElementById('next');
var tit = document.getElementById('title');
var art = document.getElementById('artist');

const songs = [{
    name: "grate",
    title: "gratefull",
    artist: "neffex"
},
{
    name: "faded",
    title: "Faded",
    artist: "neffex"
},

{
    name: "never",
    title: "Somethings Never Chnage",
    artist: "neffex"
},

];

play.addEventListener('click', () => {

    if (grate.paused) {
        grate.play();
        play.classList.replace('fa-play', 'fa-pause');
        ban.classList.add('animate')



    } else {
        grate.pause();
        play.classList.replace('fa-pause', 'fa-play');
        ban.classList.remove('animate')
    }
})

// Change music data
const loadSong = (songs) => {
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    grate.src = "audio/" + songs.name + ".mp3";
    ban.src = "images/" + songs.name + ".png";

};
songIndex = 0;

const nextSong = () => {
    songIndex = (songIndex + 1) % songs.length
    loadSong(songs[songIndex]);
    grate.play();
    play.classList.replace('fa-play', 'fa-pause');
    ban.classList.add('animate');

}

const preSong = () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    grate.play();
    play.classList.replace('fa-play', 'fa-pause');
    ban.classList.add('animate');

}
nex.addEventListener('click', nextSong);
pre.addEventListener('click', preSong);







