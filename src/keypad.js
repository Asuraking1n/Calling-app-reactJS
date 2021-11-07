import React, { useState } from 'react'
import "./keypad.css"
import PhoneIcon from '@mui/icons-material/Phone';
import ContactsIcon from '@mui/icons-material/Contacts';
import CancelIcon from '@mui/icons-material/Cancel';
import CustomizedDialogs from './modal'

const Keypad = (props) => {
    const[show, setShow] = useState("")
    
    const noCancel=()=>{
        const len = show.length
        setShow(show.slice(0,len-1))
    }
    const addContact=()=>{
        
        if(show.length > 0){
            return (<span className="contactAdd">ADD TO CONTACTS</span>)
        }
    }
    

    return (
        <>
            <div className="container">
                <div className="phonestring">
                    <div className="inputData" >{show}</div>
                    {addContact()}
                    <CustomizedDialogs  />
                    
                </div>
                <div className="digits">
                    <div class="dig " name="1" onClick={()=>{setShow(show+"1") }}>1</div>
                    <div class="dig " name="2" onClick={()=>{setShow(show+"2")}} >2</div>
                    <div class="dig " name="3" onClick={()=>{setShow(show+"3")}}>3</div>
                    <div class="dig " name="4" onClick={()=>{setShow(show+"4")}}>4</div>
                    <div class="dig " name="5" onClick={()=>{setShow(show+"5")}}>5</div>
                    <div class="dig " name="6" onClick={()=>{setShow(show+"6")}}>6</div>
                    <div class="dig " name="7" onClick={()=>{setShow(show+"7")}}>7</div>
                    <div class="dig " name="8" onClick={()=>{setShow(show+"8")}}>8</div>
                    <div class="dig " name="9" onClick={()=>{setShow(show+"9")}}>9</div>
                    <div class="dig  pound" name="0" onClick={()=>{setShow(show+"0")}}>0</div>
                    <CancelIcon className="cancel" onClick={noCancel}/>
                    <div className="dialBtn">
                        <PhoneIcon className="phoneIcon" onClick={()=>props.callScreen && props.callScreen(true) }/>
                        <ContactsIcon className="contact" onClick={()=>props.phoneBook && props.phoneBook(true)}/>
                        {/* <ContactsIcon className="phonebook"/> */}
                    </div>
            
                </div>

            </div>
        </>
    )
}

export default Keypad
