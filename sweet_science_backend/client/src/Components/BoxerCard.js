import React from 'react'
import {useState, useEffect} from 'react'


function BoxerCard({ id }) {
    const [currentBoxer, setCurrentBoxer]= useState({})
    useEffect(() =>
    fetch(`http://localhost:3000/boxers/${id}`)
    .then((response) =>response.json())
    // .then(boxerData => console.log(boxerData))
    .then(boxerData => setCurrentBoxer(boxerData))
    .then(console.log(currentBoxer))
    
    ,[])
  return (
    <div className="boxer-container">
        <img alt="{currentBoxer.name}" src={currentBoxer.image}></img>
        <h1>Boxer name: {currentBoxer.name}</h1>
        <h2>Experience level: {currentBoxer.experience}</h2>
        <h3>Weight: {currentBoxer.weight}</h3>


    </div>
  )
}

export default BoxerCard