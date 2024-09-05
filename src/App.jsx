import {useState } from 'react'

import {BrowserRouter as Router,Routes,Route} from "react-router-dom"

import Notelist from './components/Notelist'
import Newnote from './components/Newnote'
import Profile from './components/Profile'

import './App.css'

function App() {
  const [onAddnote ,setonAddnote]=useState(false);

     return (
    <>

    <Router>
         <Routes>
                <Route path='/Profile/:id' element={<Profile/>}/>
        </Routes>
    </Router>
    <div className='note-content-container-parent'>
    <img className='bg-image' src="./Images/img1.png"/>
        <div  className="Pocket-Notes">Pocket Notes</div>
        <p className='paragraph'>Send and receive messages without keeping your phone online.<br></br> Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p> 
   

           </div>


       <div className='note-list-container'>
           <div  className="Heading">Pocket Notes</div>
           <div className='note-list' ><Notelist  /></div>        
           </div>
       {onAddnote && (<Newnote  setOpen={setonAddnote}/>)}
       <button  onClick={() =>setonAddnote(true) } className="Add-note">+</button>

    </>
  )
}

export default App
