import React from "react"
import Travel from "./Travel.js"

const ravels = [
    {
        destination: "Lyon",
        country: "France",
        photo: "https://www.telegraph.co.uk/content/dam/Travel/leadAssets/25/19/Lyon_2519897a.jpg?imwidth=900",
        distance: "0km" 
    },
    {
        destination: "Bruxelles",
        country: "Belgique",
        photo: "https://s3-eu-west-1.amazonaws.com/brussels-images/content/gallery/visit/article/festival-bieres-bruxelles_sq_640.jpg",
        distance: "900km" 
    },
    {
        destination: "Florence",
        country: "Italie",
        photo: "https://static.vinepair.com/wp-content/uploads/2016/11/florence-internal.jpg",
        distance: "1000km" 
    },
    {
        destination: "Barcelone",
        country: "Espagne",
        photo: "https://www.shbarcelona.fr/blog/fr/wp-content/uploads/2015/03/148932-425x282-barcelona1-300x199.jpg",
        distance: "1000km" 
    },
    {
        destination: "New York",
        country: "Etats-Unis",
        photo: "https://cdn.fodors.com/ee/files/slideshows/11042/2.-dont-waste-time-in-times-square.jpg",
        distance: "6000km" 
    },
]

const Travels = () => (
    <div>
        {ravels.map((voyage, index) => ( <Travel destination={voyage.destination} country={voyage.country} photo={voyage.photo} distance={voyage.distance} key={index} /> ))}
    </div>
)

export default Travels