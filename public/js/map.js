
// mapboxgl.accessToken = mapToken;
// const map = new mapboxgl.Map({
    
//     container: 'map',
//     center: listing.geometry.coordinates,// starting position [lng, lat]
//     zoom: 12
      
// });

// const marker = new mapboxgl.Marker({ color: 'red'})
//     .setLngLat(listing.geometry.coordinates)
//     .setPopup(new mapboxgl.Popup({offset: 25})
//         .setHTML(
//           `<h4>${listing.title}</h4>
//           <p>Exact location will be provided after booking!!</p>`
//     ))
//     .addTo(map);




mapboxgl.accessToken = mapToken;

// Check if listing.geometry exists before initializing the map
if (listing.geometry && listing.geometry.coordinates) {
    const map = new mapboxgl.Map({
        container: 'map',
        center: listing.geometry.coordinates, // Ensure it's [lng, lat]
        zoom: 12
    });

    // Create a marker with a popup
    new mapboxgl.Marker({ color: 'red' })
        .setLngLat(listing.geometry.coordinates)
        .setPopup(new mapboxgl.Popup({ offset: 25 })
            .setHTML(
                `<h4>${listing.title}</h4>
                <p>Exact location will be provided after booking!</p>`
            ))
        .addTo(map);
} else {
    console.error("Error: listing.geometry.coordinates is undefined or invalid.");
}

