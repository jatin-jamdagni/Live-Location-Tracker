const socket = io();

// scoket to get location in every 5 sec
if(navigator.geolocation){

    navigator.geolocation.watchPosition((position)=>{
        const {latitude, longitude}= position.coords;
        // console.log(latitude, longitude)
        socket.emit('send-location', {latitude, longitude});
    
    },
    
    (error)=>{
        console.log(error);
    
    },
    {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge:0
    }
);

}
 

//leaflet


const map =L.map("map").setView([0,0],10);

L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '<a href="https://jatin-sharma.vercel.app/">Jatin Sharma</a>',
    
}).addTo(map);


const markers = {}



socket.on("receive-location", (data)=>{
    const {id, latitude,longitude} = data;
    console.log(">>>>",id, latitude,longitude)
    map.setView([latitude,longitude],16)
    if(markers[id]){
        markers[id].setLatLng([latitude, longitude]);
    }
    else {
        markers[id]= L.marker([latitude, longitude]).addTo(map);
    }
})

socket.on("user-disconnected",(id)=>
{
    if(markers[id]){
        map.removeLayer(markers[id]);
        delete markers[id]
    }
}
)