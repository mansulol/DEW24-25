let reproducer = document.querySelector("#reproducer");
let audio = document.querySelector("#audio");
let songList = document.querySelectorAll(".song");

let currentSong = 0;

let playBtn = document.querySelector("#play");
let backBtn = document.querySelector("#backward");
let fowardBtn = document.querySelector("#fordward");

// Al principio
document.addEventListener("DOMContentLoaded", () => {
  let playIcon = document.createElement("i");
  playIcon.className = "fa fa-play";

  currentSong = 0;
  updateSong();
  audio.play();

});

// Controlador para el boton de pausar y reproducir
playBtn.addEventListener("click", () => {
  if (playBtn.childNodes[0].className == "fa fa-play") {
    playBtn.childNodes[0].className = "fa fa-pause";
    audio.play();
} else {
    playBtn.childNodes[0].className = "fa fa-play";
    audio.pause();
  }
});

// Boton de ir para atras
backBtn.addEventListener("click", () => {
  currentSong >= 0 ? currentSong-- : (currentSong = 0);
  updateSong();
});

// Boton de ir adelante
fowardBtn.addEventListener("click", () => {
  currentSong <= 2 ? currentSong++ : (currentSong = 2);
  updateSong();
});

// Este metodo puede activar el escuchador de otro elemento con escuchador
audio.addEventListener('ended', () => fowardBtn.click() )

// Limpia todo los innerhtmls
function cleanSongIcon(){
    songList.forEach(s => {
        s.innerHTML = ""
    })
}

// Metodo que me actualiza la interfaz apartir de la cancion actual
function updateSong() {
    if (currentSong == 0) {
    reproducer.src ="./sounds/Kendrick_Lamar-Backseat_Freestyle.mp3";
    audio.load()
    audio.play()

    cleanSongIcon()
    songList[currentSong].innerHTML= '<i class="fa fa-play"></i>';

    console.log(reproducer.src);
  } else if (currentSong == 1) {
    reproducer.src = "./sounds/Kendrick_Lamar-XXX.mp3";
    audio.load()
    audio.play()

    cleanSongIcon()
    songList[currentSong].innerHTML= '<i class="fa fa-play"></i>';

    console.log(reproducer.src);
  } else if (currentSong == 2) {
    reproducer.src = "./sounds/Ye-GOOD_(DON'T DIE).mp3";
    audio.load()
    audio.play()

    cleanSongIcon()
    songList[currentSong].innerHTML= '<i class="fa fa-play"></i>';

    console.log(reproducer.src);
  } else {
    console.log("Max songList");
  }
}