const WebSocket = require('ws')
const fs = require('fs')

let wss = 'wss://openai-whisper.hf.space/queue/join';
const whisper = async (buffer) => {
return new Promise(async (resolve, reject) => {
let result = {}
let send_data_payload = {
"fn_index":0,
"data":
[
{
"name": "audio",
"data":"data:audio/wav;base64," + buffer.toString('base64')
}
],
"session_hash":"cwpo8hy02ed"
}
const ws = new WebSocket(wss);
ws.onopen = function() {
console.log("Connected to websocket")
};
ws.onmessage = async function(event) {
let message = JSON.parse(event.data);
ws.send(JSON.stringify(send_data_payload));
switch (message.msg) {
case 'process_completed': 
result.text = message.output.data[0];
break;
}
};

ws.onclose = function(event) {
if (event.code === 1000) {
console.log('Process completed successfully');
} else {
m.reply('Err : WebSocket Connection Error:\n');
}
resolve(result)
};
})
}

module.exports = { whisper }