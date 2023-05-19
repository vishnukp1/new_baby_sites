import React, { useContext, useRef } from "react";
import { babyshop } from "../context";
import { Button } from "react-bootstrap";

function AdminAddproducts() {
  const { state, setState, setCartItems } = useContext(babyshop);
  const formRef = useRef(null);

  function addItem(e) {
    e.preventDefault();

    const item = {
      id: Math.floor(Math.random() * 10000),
      productName: formRef.current.productName.value,
      price: formRef.current.price.value,
      type: formRef.current.type.value,
      productImage: formRef.current.productImage.value,
      quatity: formRef.current.quantity.value,
    };

    setState([...state, item]);
    setCartItems("");
    formRef.current.reset();
  }

  console.log(state);

  return (
    <div className="form">
      <form ref={formRef} onSubmit={addItem}>
        <h2 style={{ textAlign: "center" }}>Add Product</h2>
        <div className="form-body">
          <div className="username">
            <label className="form__label" for="firstName">
              ProductName{" "}
            </label>
            <input
              className="form__input"
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
            <input id="email" className="form__input" name="type" />
          </div>
          <div className="password">
            <label className="form__label" for="password">
              Quantity{" "}
            </label>
            <input className="form__input" id="password" name="quantity" />
          </div>
        </div>
        <div class="footer">
          <Button type="submit" class="btn">
            Add Product
          </Button>
        </div>
      </form>
    </div>
  );
}

export default AdminAddproducts;
