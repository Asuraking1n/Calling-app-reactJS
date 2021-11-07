import React, { useState } from 'react'
import Keypad from "./keypad"
import Callscreen from "./callScreen"
import Phonebook from './phonebook';
import "./app.css"

const App = () => {
  const [dial, setDial] = useState(false)
	const [book, setBook] = useState(false)
  return (
    <><div 
    style={{
      height:"100vh",width:"100vw",display:'flex',
      alignItems:"center",justifyContent:"center",
      background: "rgb(2,0,36)",
      background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(121,28,9,0.9556197478991597) 35%, rgba(0,212,255,1) 100%)"
       }}
       
      >

   
    	{
					(dial || book) ? dial ? <Callscreen callScreen={dial => setDial(dial)} /> 
					: <Phonebook phoneBook={book => setBook(book)} /> 
					: <Keypad callScreen={dial => setDial(dial)} phoneBook={book => setBook(book)} />
				}
        </div>
    </>
  )

};
export default App;


