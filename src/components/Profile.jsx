
import React, {useEffect,  useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import './Profile.css'
function    Profile() {
 

    let navigate = useNavigate(); 
       const [Point ,setPoint]=useState(""); 
    const [GrouPname ,setGrouPname]=useState(""); 
    const [ProFileColor ,setProFileColor]=useState("");
    const [Points ,setPoints]=useState([]); 
    const {id}=useParams(); 


   
    
     const date= new Date();
     var MYhour=date.getHours();
     MYhour =MYhour % 12;
     MYhour=MYhour ? MYhour: 12
     const MYmin= date.getMinutes();
     const AmPm= MYhour>=12 ? 'PM':'AM'
     const showtime=MYhour+':'+MYmin+ ' '+AmPm;
     const MYmonth=date.getMonth();
     const months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
     const currentmonth=months[MYmonth];
     const showdate= date.getDate()+' '+currentmonth+' '+date.getFullYear();
    
    
    const   addpoints=()=>{
    const NOTE = JSON.parse( localStorage.getItem("notes")) || [];
    NOTE[id].points.push(Point);
    localStorage.setItem("notes",JSON.stringify(NOTE));
    setPoints(NOTE[id].points);
    setPoints("");
    window.location.reload();}
    
         

       useEffect(()=>{
       if(id){
        const NOTE = JSON.parse( localStorage.getItem("notes")) || [];
        setPoints(NOTE[id]?.points);
        setGrouPname(NOTE[id]?.Grpname);
        setProFileColor(NOTE[id]?.Profilecolor);
      
       }},[id])
        

        

                    
    return (
    <>   
 

<div className='note-content-container'>
            <div onClick={() => navigate(-1)} className="profile-container">  <div className="home">➜</div>
                    <div className="profile-pic"  style={{background:ProFileColor}} >{GrouPname[0]}</div>
                    <div className="profile-content" >{GrouPname}</div>
                   
            </div>
             <div className="input-background"> 
                        <textarea placeholder="Enter your text here..........." value={Point} onChange={(e)=>setPoint(e.target.value)}  type="text" className="text-container" ></textarea>
                        <button onClick={addpoints} className="note-buttton" >
                            <svg width="35" height="29" viewBox="0 0 35 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 29V18.125L14.5 14.5L0 10.875V0L34.4375 14.5L0 29Z" fill="#ABABAB"/></svg>
                        </button>
            </div>
            <div className='points'>
                {
                    Points.map((mynote,index)=>(  
                        <div className="point" key={index}>  {mynote}  <div className="date">{showdate}  ●  {showtime}</div></div>
                       ))
                }
                
            </div>
           

 </div>
    
    </>
    
)
}

export default Profile

