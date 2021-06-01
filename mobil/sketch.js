const remote = document.getElementById("remote");
remote.addEventListener("click", remoteWork);
function remoteWork(e){
    // console.log(e);
    if(e.target.classList.contains('shutdown')){
        console.log("shutdown");

    } else if (e.target.classList.contains('mute')){
        console.log("mute");
    } else if (e.target.classList.contains('up')){
        console.log("up");
    }
    else if (e.target.classList.contains('down')){
        console.log("down");
    }
    else if (e.target.classList.contains('prev')){
        console.log("prev");
    }
    else if (e.target.classList.contains('play')){
        console.log("play");
    }
    else if (e.target.classList.contains('next')){
        console.log("next");
    }
}