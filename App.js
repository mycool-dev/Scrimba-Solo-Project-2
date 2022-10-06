import React from 'react'
import Header from './Components/Header'
import Card from './Components/Card'
import travelData from './data'

export default function App () {
  const travel = travelData.map(data =>{
      return(
          <div>
       <Card
        key = {data.id}
        title = {data.title}
        location = {data.location}
        googleMapsUrl = {data.googleMapsUrl}
        startDate = {data.startDate}
        endDate = {data.endDate}
        description = {data.description}
        imageUrl = {data.imageUrl}
      />
      </div>
      )
  })
    return(<div>
    <Header />
   {travel}
    </div>)
}