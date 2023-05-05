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
  
  console.log(allStarships)
  return ( 
    <>
      <div className="starships">
        {allStarships.map((starship, idx)=> {
          return <Link to={``} key={starship.idx}>{starship.name}</Link>
        })}
      </div>
    </>
  )
}
 
export default Starships;