import React from 'react';
import {useState,useEffect} from 'react'
import WritersDetails from '../writer-details/WritersDetails';
const Writers = () => {
    const [writers,setWriters] =  useState([])
    useEffect(()=>{
        fetch('./writers.JSON')
        .then(res  =>res.json())
        .then(data => setWriters(data))
    },[])
    const [details,setDetals] = useState([])
    const detail = (detail)=>{
       setDetals([...details,detail]);
      
    }
    return (
        <div className='container'>
            <div className="row">
            <div className='col-9'>
            <div className="row  ">
            {
               writers.map(writer=> <WritersDetails 
                key={writer.id}
                details={detail}
                writers={writer}/>)
           }
            </div>
           </div>
           <div className='col-3'>
               <h1 className='text-center'>See Details</h1>
               <p>Writers:{details.length}</p>
               
           </div>
           
            </div>
           
        </div>
    );
};

export default Writers;