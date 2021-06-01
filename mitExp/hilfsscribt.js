if('geolocation' in navigator){
    console.log('geolacation is da');
    navigator.geolocation.getCurrentPosition(position =>{
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        document.getElementById('latitude').textContent(lat);
        document.getElementById('longitude').textContent(lat);
        
        const data ={lat, lon};
        const options = {
            metghod: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };
    }
)}