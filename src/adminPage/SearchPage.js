import React, { useContext} from "react";
import { babyshop } from "../context";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../products/product.css";


function SearchPage() {

  const data=useContext(babyshop)
  const {searchdata}=data
  const navigate=useNavigate()
 


console.log(searchdata);

  return (
    <div className="topdiv" >
   

      {searchdata.length > 0 ? (
       searchdata.map((post) => (
        <Card className='products mt-5 d-inline-block shadow' style={{ width: '21rem'}}>
         <Card.Img className='cardimg' variant="top" src={post.productImage}  />
         <Card.Body>
           <Card.Title>₹ {post.price}</Card.Title>
           <Card.Text>
           {post.productName}
           </Card.Text>
          <Button variant="primary" onClick={()=>navigate(`/cart/${post.id}`)}>view item</Button>
      
         </Card.Body>
       </Card>
      ))
      ) : (
        <p>No items found</p>
      )}

  
    </div>
  );
}

export default SearchPage;
