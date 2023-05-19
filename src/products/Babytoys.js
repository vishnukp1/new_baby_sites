import React, { useContext } from 'react'

import { Button, Card } from 'react-bootstrap'
import { babyshop } from '../context'
import { useNavigate } from 'react-router-dom'


function Babytoys() {
  const data=useContext(babyshop)
  const navigate=useNavigate()
  const {state}=data
  const dress=state.filter((item)=>item.type==="toys")
 
  return (
    <div className='topdiv d-flex' style={{ textAlign: 'center'}}>
    
{dress.map((post) => (
  <Card className='products mt-5 d-inline-block shadow' style={{ width: '21rem'}}>
  <Card.Img className='cardimg' variant="top" src={post.productImage}  />
  <Card.Body>
    <Card.Title>₹ {post.price}</Card.Title>
    <Card.Text>
    {post.productName}
    </Card.Text>
    <Button  variant="outline-secondary" onClick={()=>navigate(`/cart/${post.id}`)}>view item</Button>
  </Card.Body>
</Card>
  
))}
      

      
       

      </div>
  )
}

export default Babytoys