import React from 'react'
import "./callscreen.css"
import PhoneIcon from '@mui/icons-material/Phone';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import FiberManualRecordOutlinedIcon from '@mui/icons-material/FiberManualRecordOutlined';
import BorderAllRoundedIcon from '@mui/icons-material/BorderAllRounded';
function Callscreen(props) {
    return (
        <>
           <div className="container">
               <div className="recText">
               <div className="rec"></div>
               Recording
               </div>
               <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
               <div style={{marginTop:"20px",fontWeight:"800",color:"rgba(0,0,0,0.5)"}}>Dialing/Connected</div>
               <div style={{color:"rgba(0,0,0,0.5)",position:"absolute",top:"190px"}}>10:30</div>
               <div style={{position:"absolute",top:"220px",height:"120px",width:"120px", borderRadius:"50%",backgroundColor:"#FDF3F1"}}></div>
               <div style={{position:"absolute",top:"230px",height:"100px",width:"100px", borderRadius:"50%",backgroundColor:"#F7DACB"}}></div>
               <div style={{position:"absolute",top:"240px",height:"80px",width:"80px", borderRadius:"50%",backgroundColor:"#EEA98F"}}></div>
               <div style={{position:"absolute",top:"250px",height:"60px",width:"60px", borderRadius:"50%",overflow:"hidden",objectFit:"coverS"}}>
                   <img src="https://t3.ftcdn.net/jpg/04/49/25/36/360_F_449253617_hHCzo5axDbfAoNIrmEHTWg1ar2fC5DMW.jpg"  style={{height:"84px",width:"84px",position:"absolute",top:"-12px",left:"-12px"}}/></div>
               <div className="callerName">Alina D'Souza</div>
               <div className="callerNo">+97 7880647182</div>
               <div className="hr"></div>
               <div className="dialBtn1">
               <PhoneIcon className="phoneI" onClick={()=> props.callScreen(false)}/>
               {/* <orderAllRoundedIcon className="cont"/>
               <orderAllRoundedIcon className="phonebook"/> */}
               </div>
              
            </div>
           </div> 
        </>
    )
}

export default Callscreen
