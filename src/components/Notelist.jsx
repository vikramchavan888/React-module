"client side"
import React, {useEffect,  useState } from "react";

import {BrowserRouter as Router,Link} from "react-router-dom"

import './Notelist.css'
function    Notelist() {


    const [notes ,setnotes]=useState([]);

    useEffect(()=>{
        const notecollection = JSON.parse( localStorage.getItem("notes"))||[];
        setnotes(notecollection);
        },[])

         const  editnote=() =>{
          

             window.reload()
         }
     

    return (
        <div > 
            {notes.map((Currentnote, index) =>(  
                        <Router key={index} >
                            <Link  onClick={() =>editnote(Currentnote) } to={"/Profile/"+ index} style={{ textDecoration: 'none', color:"black"}}  >
                            <div className="item" >
                            <div className="profile" style={{backgroundColor  : Currentnote.Profilecolor}} >{Currentnote.Grpname[0]}{Currentnote.Grpname[5]}</div>
                            <h2>{Currentnote.Grpname}</h2>
                            </div>           
                            </Link >
                         </Router> ))
            }         
        </div>
    )
}

export default Notelist

