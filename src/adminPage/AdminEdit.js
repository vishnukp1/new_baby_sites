import React, { useContext, useState } from 'react'
import {  useNavigate, useParams } from 'react-router-dom'
// import {care,toys,dress} from "./Datas"
import { Button } from 'react-bootstrap'
// import { useContext } from 'react';

import { babyshop } from '../context';



const AdminEdit= () => {

    const navigate = useNavigate()

     const {state} = useContext(babyshop)

    const {id}= useParams()
   
  
    const newPdrt =state.filter((item)=>item.id === parseInt(id))

     const [edit,setEdit] =useState(newPdrt[0]) 


     const editHandler = (e) =>{
      
        const name=e.target.name;
        const value=e.target.value;

        setEdit((prev)=>{
            return({...prev,[name]:value});
        });
      
       
     }

     const confirmEdit = (id)=>{

        const itemIndex= state.findIndex(item => item.id === id)

        state[itemIndex]=edit;

        // alert('Product Edited')

        // link('/collection')

         

     }

    //  (e) => e.preventDefault()

     const handleSubmit = (e) =>{
        e.preventDefault()
        navigate('/adminpage/adminproduct')
    
        
     }
     console.log(newPdrt)
   
  return (
      <div>
    <div className='form' >

    <h2 style={{ textAlign: 'center'}}>Edit Product</h2>

   <form   onSubmit={handleSubmit} className='add_form'>
       
  <div className="form-body">
  <div className="username">
      <label className="form__label" for="firstName">
      Product Id {" "}
        {" "}
      </label>
      <input
        className="form__input"
        value={edit.id}
        onChange={editHandler} p
        type="text"
        id="firstName"
        placeholder="product id"
      name="id"
      />
    </div>
    <div className="username">
      <label className="form__label" for="firstName">
      ProductName {" "}
        {" "}
      </label>
      <input
        className="form__input"
        value={edit.productName}
        onChange={editHandler} 
        type="text"
        id="firstName"
        placeholder="productName"
      name="productName"
      />
    </div>
    <div className="username">
      <label className="form__label" for="firstName">
        ProductImage{" "}
      </label>
      <input
        className="form__input"
        value={edit.productImage} 
        onChange={editHandler} 
        type="text"
        id="lastName"
        placeholder="productImage" 
      name="productImage" 
      />
    </div>
    <div className="username">
      <label className="form__label" for="firstName">
        Price{" "}
      </label>
      <input
        className="form__input"
        value={edit.price} 
        onChange={editHandler} 
        type="text"
        id="lastName"
        placeholder="price" 
      name="price" 
      />
    </div>

    <div className="email">
      <label className="form__label" for="email">
        Type{" "}
      </label>
      <input
     
        id="email"
        className="form__input"
        value={edit.type} 
        onChange={editHandler} 
        name="type" 
      />
    </div>
    <div className="password">
      <label className="form__label" for="password">
        Quantity{" "}
      </label>
      <input
        className="form__input"
        value={edit.quatity} 
        onChange={editHandler} 
        id="password"
       name="quatity"
      />
    </div>
  </div>
  <div class="footer">
          
          
    <Button type="submit"  onClick={confirmEdit(edit.id)} class="btn" >
   Add Change
    </Button>
  </div>

</form>

</div>

</div>
  )
}

export default AdminEdit