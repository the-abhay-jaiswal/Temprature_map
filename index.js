function updateMap() {
    fetch("/data.json")
        .then(response => response.json())
        .then(rsp => {
            console.log(rsp.data)
            rsp.data.forEach(element => {
                latitude = element.lat;
                longitude = element.lon;
                temp = element.temp_c;
                stat = element.condition;
                if (temp > 30) {color = 'red';}
                else {color = 'blue';}
                new mapboxgl.Marker({ color: color })
                    .setLngLat([longitude, latitude])
                    .addTo(map);
            });

        })
}

updateMap();