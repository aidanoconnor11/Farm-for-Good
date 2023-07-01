//imports
import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {Route, Link, Routes, useParams} from 'react-router-dom';

import "./EducationPlant.css";

function EducationPlant() {
    //use states for plant object and plant name. plant name comes from params
    const [plant,setPlant] = useState([]);
    const params = useParams();
    const[name,setName]= useState(params.plantName);

    
   

    
    useEffect(()=>{ //on each page reload call the express endpoint
        axios.get("http://localhost:10505/api/plants/"+name).then( res=>{
            setPlant(res.data.results);
             });
    },[])
    

  return (
    <>
    {/* plant is an array of objects so we need to map through the objects */}
        {
        plant.map((singlePlant) => (
            <div>
           <h1 className='center'>{singlePlant.plantName}</h1>
           <img src={singlePlant.imageSRC}></img>
           <h1 className='center'>{singlePlant.plantDescription}</h1>
            </div>
        ))
    }
    </>
  )
}
  

export default EducationPlant