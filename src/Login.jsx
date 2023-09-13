import React, { useContext, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import {ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import {context} from './App'
function Login() {
    const goto=useNavigate()
    const{table,settable}=useContext(context)
    const [postid, setpostid] = useState("")
    const [postreact, setpostreact] = useState("")
    console.log(postreact)
    const [posttit, setpostit] = useState("")
     const objj={
        id:postid,
        reactions:postreact,
        title:posttit,
     }
     console.log(table)
   const add=(e)=>{
     e.preventDefault()
     if(!postid||!postreact||!posttit)
     {
        settable(table)
     }
    else
     {
    const addeditem=[...table,objj]
    settable(addeditem)
     }

    if(!postid||!postreact||!posttit)
    {
        toast(null)
    }
    else
    {
    toast('new item added')
    }

    if(!postid||!postreact||!posttit){
    toast("should'nt be empty")}
    // goto('/')
   }
   console.log(table)
  return (
    <div>    
        <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>id</Form.Label>
      <Form.Control type="text" placeholder="id" onChange={(e)=>setpostid(e.target.value)}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>reactions</Form.Label>
      <Form.Control type="text" placeholder="react" onChange={(e)=>setpostreact(e.target.value)}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>title</Form.Label>
      <Form.Control type="text" placeholder="tilte" onChange={(e)=>setpostit(e.target.value)}/>
    </Form.Group>
   <Button variant="primary" type="submit" onClick={add}>
        submit
    </Button>
    </Form>
    <ToastContainer style={{marginLeft:'10%',color:'green'}}/>
</div>
  )
}
export default Login
