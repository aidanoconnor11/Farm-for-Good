//imports
import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {Route, Link, Routes, useParams} from 'react-router-dom';
import "./EducationBug.css"


function EducationBug() {
    //use states for bug object and bug name. Bug name comes from params
    const [bug,setBug] = useState([]);
    const params = useParams();
    const[name,setName]= useState(params.bugName);

    
   

    
    useEffect(()=>{ //on each page reload call the express endpoint
        axios.get("http://localhost:10505/api/bugs/"+name).then( res=>{
            setBug(res.data.results);
             });
    },[])
    

  return (
    <>
    {/* bug is an array of objects so we need to map through the objects */}
        {
        bug.map((singleBug) => (
            <div>
           
           <h1 className='center'>{singleBug.bugName}</h1>
           <img className='center'src={singleBug.imageSRC}></img>
           <h3 className='center'>Description:</h3>
           <p className='center'>{singleBug.bugDescription}</p>
        </div>
        ))
    }
    </>
  )
}
  

export default EducationBug