import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Sidebar from './Sidebar'
const context=createContext()
function App() {
  const [Table, setTable] = useState([])
  const [filter, setfilter] = useState({})
  const [show, setShow] = useState(false);
  const [table, settable] = useState([])
  const [filtt, setfiltt] = useState([])
  const [sshow, ssetShow] = useState(false);

  return (
    <div>
      <context.Provider value={{Table,setTable,filter,setfilter,show,setShow,table,settable,filtt,setfiltt,sshow,ssetShow}}>
        <BrowserRouter>
        <Sidebar/> 
        </BrowserRouter>
        </context.Provider>
    </div>
  )
}

export default App
export {context}