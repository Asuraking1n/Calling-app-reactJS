import React from 'react'
import "./phonebook.css"
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import DialpadIcon from '@mui/icons-material/Dialpad';
import CustomizedDialogs from './modal'
const Phonebook = (props) => {
    return (
        <>
        
             <div className="container">
                 <div className="heading">
                     <span style={{fontSize:"25px",margin:"5px",marginRight:"5px"}}>Contact List</span>
                     <div style={{marginTop:"-120px",marginRight:"-80px"}}><CustomizedDialogs/></div>
                     <AddRoundedIcon style={{color:"rgba(245, 22, 7, 0.847)",fontSize:"30px",cursor:"pointer",position:"absolute",right:"520px",zIndex:"-10"}}/>
                 </div>
                 <div className="search">
                 <SearchRoundedIcon style={{fontSize:"20px",color:"rgba(192, 190, 190, 0.746)"}}/>
                 <input type="text" placeholder="Search" className="searchText"/>
                 </div>
                 <div className="contactList">
                     <div className="name">
                         <span className="listText">Nishant</span>
                         <span className="listText">Arun</span>
                         <span className="listText">Aman</span>
                         <span className="listText">Ravan</span>
                     </div>
                     <div className="number">
                     <span className="listText">+97 9983582051</span>
                     <span className="listText">+97 9983581257</span>
                     <span className="listText">+97 2453342552</span>
                     <span className="listText">+97 2422522355</span>
                     </div>
                 </div>
                 <DialpadIcon className="keypad" onClick={()=> props.phoneBook(false)}/>

             </div>
        </>
    )
}

export default Phonebook
