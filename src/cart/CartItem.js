import React, { useContext } from "react";
import { babyshop } from "../context";

import "./cartitem.css";
import { FiMinus, FiPlus } from "react-icons/fi";
import { TiDeleteOutline } from "react-icons/ti";

function Cartitem() {
  const data = useContext(babyshop);
  const { cart, setcart ,auth} = data;
  function deleteItem(id) {
    const newArray = cart.filter((item) => item.id !== id);
    setcart(newArray);
  }
  const increament = (id) => {
    setcart(
      cart.map((item) =>
        item.id === id ? { ...item, quatity: item.quatity + 1 } : item
      )
    );

    console.log(cart);
  };
  const decreament = (id) => {
    setcart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quatity: item.quatity - (item.quatity > 0 ? 1 : 0) }
          : item
      )
    );

    console.log(cart);
  };
  return (
    <div style={{ height: "800px" }}>
      {cart.length > 0 && auth ? (
        cart.map((post) => (
          <div
            className="d-flex  m-2 shadow-lg m-1 "
            style={{
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 5% 0 5%",
              borderBottom: "2px brown solid",
            }}
          >
            <div style={{ padding: "2%" }}>
              <img
                style={{ height: "100px" }}
                src={post.productImage}
                alt="fvafds"
              />
            </div>
            <div>
              <h6 className="mt-3 fst-italic fw-bolder fs-3 ms-5">
                {post.productName}
              </h6>
            </div>

            <div style={{ cursor: "pointer" }}>
              <FiPlus onClick={() => increament(post.id)} />

              <input
                className="mt-1 "
                style={{ textAlign: "center", margin: "5px", width: "25px" }}
                placeholder={post.quatity}
                type="text"
              ></input>

              <FiMinus onClick={() => decreament(post.id)} />
            </div>
            <p className="fw-bold mt-4"> ₹ {post.quatity * post.price}</p>
            <TiDeleteOutline
              style={{ fontSize: "40px", cursor: "pointer" }}
              id={post.id}
              onClick={() => deleteItem(post.id)}
            />
          </div>
        ))
      ) : (
        <h2 style={{ textAlign: "center" }}>No item Found</h2>
      )}
    </div>
  );
}

export default Cartitem;
