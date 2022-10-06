import React from 'react'



export default function Card (props) {
    return (<div className="card">
    <div className = "card--left-side">
   <img src={props.imageUrl} className="card--image"/>
   </div>
   <div className ="card-right-side">
   <div className="card--destination">
   <p className="location">{props.location}</p>
   <a href={props.googleMapsUrl}> View on Google Maps </a>
   </div>
   <h2 className="country">{props.title}</h2>
   <p className="dates">{props.startDate} - {props.endDate}</p>
   <p className="description">{props.description}</p>
   </div>
 
    </div>)
}