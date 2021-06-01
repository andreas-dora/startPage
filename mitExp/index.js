const { request, response } = require('express');
const express = require('express');
const app = express();
app.listen(3000, ()=> console.log("LAUSCHT 3000"));
app.use(express.static('public'));
app.use(express.json({ limit: '1mb'}));

app.post('/api', (request, response) =>{
    console.log('Ich hab Request');
    console.log(request.body);
    const data = request.body;
    response.json({
        startus: 'succses',
        latitude: data.lat,
        longitude: data.lon
    });
});