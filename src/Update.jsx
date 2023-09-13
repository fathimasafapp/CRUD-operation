import React, { useState } from 'react'
import { useContext } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { context } from './App'
function Update() {
    const nav=useNavigate()
    const{filtt}=useContext(context)
    console.log(filtt);
    const[filteredData]=filtt;

    const [idd, setidd] = useState(filteredData.id)
    const [reaction, setreaction] = useState(filteredData.reactions)
    const [titlee, settitlee] = useState(filteredData.title)

    const object={
      id:idd,
      reactions:reaction,
      title:titlee,
    }
    
    const add=(e)=>{
        e.preventDefault();
        const added=Object.assign(filteredData,object)
        nav('/taable')
    }
  return (
    <div>
    <Form> 
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>id</Form.Label>
        <Form.Control type="text" defaultValue={filteredData.id} onChange={(e)=>setidd(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>reactions</Form.Label>
        <Form.Control type="text"  defaultValue={filteredData.reactions} onChange={(e)=>setreaction(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>title</Form.Label>
        <Form.Control type="text" defaultValue={filteredData.title} onChange={(e)=>settitlee(e.target.value)}/>
      </Form.Group>
      <Button variant="primary" type="submit" onClick={add}>
      Submit
      </Button>
    </Form>
    </div>
  )
}
export default Update