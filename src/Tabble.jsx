import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Button, Modal, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { BiShow,BiCalendarEdit } from "react-icons/bi";
import { FiDelete } from "react-icons/fi";
import { context } from './App';
function Tabble() {
    const {table, settable,filtt,setfiltt,sshow,ssetShow} = useContext(context)
    const [search, setsearch] = useState("")
    const data = table.filter((item)=>item.title.toLowerCase().includes(search.toLowerCase()))   
       
    useEffect(() => {
      if(table.length ==0){
      axios.get("https://dummyjson.com/posts").then((res)=>settable(res.data.posts))}
    }, [table])
    const view=(id)=>{
      const filt = table.filter((item) =>
      item.id===id)
      setfiltt(filt)
      console.log(filtt);
      ssetShow(true)
      }
      const update =(id)=>{
        const filt = table.filter((item) =>
        item.id===id)
        setfiltt(filt)
      }
     const handleClose=()=>{
      ssetShow(false)
     }
     const deletee=(id)=>{
      const del = table.filter((item) =>
      item.id!==id)
      settable(del)
     }
     const find=(e)=>{
     setsearch(e.target.value)
     }         
  return (
    <div>
      <div>
      <input type="text" placeholder='search..' style={{border:'1px',marginLeft:'80%'}} onChange={find}/>
      </div>
            <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>id</th>
          <th>reactions</th>
          <th>title</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item)=>{
            return(
        <tr>
          <td>{item.id}</td>
          <td>{item.reactions}</td>
          <td>{item.title}</td>             
         <td> <Button className='btn btn-info' onClick={()=>view(item.id)}><BiShow/></Button>          </td>
         <td> <Link to ='/update'> <Button className='btn btn-warning' onClick={()=>update(item.id)}><BiCalendarEdit/></Button> </Link> </td>
         <td> <Button className='btn btn-danger' onClick={()=>deletee(item.id)}><FiDelete/></Button></td>
        </tr>
            )
        })}
      </tbody>
    </Table>
   <Link to ='/loginn'> <Button className='btn btn-info' style={{marginLeft:'85%'}}>ADD ITEMS</Button></Link>
      <Modal show={sshow} onHide={handleClose} style={{marginTop:"20%"}}>
        <Modal.Body>
        {filtt.map((item)=>{
          return(
            <>
         <h5> id:{item.id}</h5>
        <h5> reaction: {item.reactions}</h5>
        <h5> title: {item.title}</h5>
          </>
          )
        }  
)}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          </Modal.Footer>
      </Modal>
    </div>
  )
}
export default Tabble