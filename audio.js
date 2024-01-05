const audio = new Audio("./soundfx/Rick Roll (Different link  no ads).mp3")
const buttons = document.getElementById("boton")

buttons.addEventListener("click", () =>{
    audio.play();

});

