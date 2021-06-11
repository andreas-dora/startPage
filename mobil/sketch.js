const socket = io.connect('http://volumio.local/');
const remote = document.getElementById("remote");
remote.addEventListener("click", remoteWork);
function remoteWork(e){
    // console.log(e);
    if(e.target.classList.contains('shutdown')){
        console.log("shutdown");
        socket.emit('shutdown', '');

    } else if (e.target.classList.contains('mute')){
        console.log("mute");
        socket.emit('volume', 10);
    } else if (e.target.classList.contains('up')){
        console.log("up");
        socket.emit('volume', '+');
    }
    else if (e.target.classList.contains('down')){
        console.log("down");
        socket.emit('volume', '-');
    }
    else if (e.target.classList.contains('prev')){
        console.log("prev");
        socket.emit('prev', '');
    }
    else if (e.target.classList.contains('play')){
        console.log("play");
        socket.emit('toggle', '');
    }
    else if (e.target.classList.contains('next')){
        console.log("next");
        socket.emit('next', '');    
    }
}