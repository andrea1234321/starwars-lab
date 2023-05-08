import { useEffect } from "react";
import { getAllStarships } from "../../services/sw-api";
import { useState } from "react";
import { Link } from "react-router-dom";
import './Starships.css'

const Starships = () => {
  const [allStarships, setAllStarships]= useState([])


  useEffect(()=> {
    const fetchAllStarships= async () => {
      const starshipsData= await getAllStarships()
      setAllStarships(starshipsData.results)
    }
    fetchAllStarships()
  }, [])

  if(!allStarships.length) return <h1>Loading all starships...</h1>

  return ( 
    <>
      <div className="starships">
        {allStarships.map((starship)=> {
          let starshipId= starship.url.slice(32)
          return <Link to={`starships/${starshipId}`} key={starshipId}>{starship.name}</Link>
        })}
      </div>
    </>
  )
}
 
export default Starships;