# Für Volumio
io.emit('message','data');
io.emit('volume', 90);
io.emit('volume', '+');
io.emit('mute', '');
io.emit('unmute', '');

### Alarm an:
setAlarm {id:1,enabled:true, time:hh:mm, playlist:uriplaylist}

setAlarm {id:1,enabled:false, time:hh:mm, playlist:uriplaylist}

addAlarm {time:hh:mm, playlist:uriplaylist}

setSleep {enabled:true|false, time:hh:mm:}

  {
    "name":"my playlist"
   }

### shutdown:

   https://volumio.github.io/docs/API/WebSocket_APIs.html

   https://github.com/volumio/Volumio2/blob/master/app/plugins/user_interface/websocket/index.js


setAlarm {'id:1','enabled:true', time:hh:mm, playlist:uriplaylist}

emit('setAlarm', {"id":"1","enabled":"true", "time":"10:04", "playlist":"music-library/sunrise"});

io.emit('playPlaylist', {"name":"sunrise"});
{"playlist":"music-library/sunrise"});

let data = {
"id":"1",
"enabled":"true",
"time":"10:04",
"playlist":"sunrise"
}
