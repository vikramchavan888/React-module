import React, {useEffect,  useState } from "react";
//import {v4 as getID} from "uuid"
import './Newnote.css'
function    Newnote({setOpen}) {
     
  
    const [Grpname ,setgrpname]=useState("");
    const [Profilecolor ,setProfilecolor]=useState("");
    const closeform = () =>{setOpen (false);    window.location.reload();}
    const [notes ,setnotes]=useState([]); 

           
    useEffect(()=>{
        const notecollection = JSON.parse( localStorage.getItem("notes"))||[];
        setnotes(notecollection);
        },[])
     const   handelsubmit=()=>{if(Grpname!=="" && Profilecolor!==""){
                    let notesdata= notes;
                        notesdata.push({
                         Grpname,
                         Profilecolor,
                         points:[]
                       })
                setnotes(notesdata)
                localStorage.setItem("notes",JSON.stringify(notesdata)); 
                    }
                    alert("New Note Created");}
        
    console.log(Grpname,Profilecolor);

    return (  <>
    
    <div onClick={closeform} className="Form-wrapper"> </div>
              
        <form onSubmit={ (e) =>{e.preventDefault();handelsubmit()}}>
            <div className="create-note">
        <label className="Create-New-group">Create New group</label>
        <label className="New-group-lebel">Group Name</label>
        <input required type="text" value={Grpname} onChange={(e)=>setgrpname(e.target.value)}  className="New-group"  placeholder="Enter group name"></input>
        <label className="Choose-colour">Choose colour</label>
        
        <div   className="profilecolour">
        <input  type="button"  value="#B38BFA" onClick={(e)=>setProfilecolor(e.target.value)}  className="purple" ></input>
        <input  type="button"  value="#FF79F2" onClick={(e)=>setProfilecolor(e.target.value)} className="pink" ></input>
        <input  type="button"  value="#43E6FC" onClick={(e)=>setProfilecolor(e.target.value)}  className="cyan" ></input>
        <input  type="button"  value="#F19576" onClick={(e)=>setProfilecolor(e.target.value)}  className="orange" ></input>
        <input  type="button"  value="#0047FF" onClick={(e)=>setProfilecolor(e.target.value)} className="blue" ></input>
        <input  type="button"  value="#6691FF" onClick={(e)=>setProfilecolor(e.target.value)}  className="light-blue" ></input></div>
           
        <button className="button" type="submit">Create</button>
            </div> 
        </form>
    
    </>)
}

export default Newnote