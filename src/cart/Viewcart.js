import React, { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { babyshop } from "../context";

function ViewCart() {
  const data = useContext(babyshop);
  const navigate = useNavigate();
  const { state, setcart, cart, auth } = data;

  const { id } = useParams();
  const newcart = state.filter((item) => item.id === parseInt(id));
  function addcart() {
    if (auth === true) {
      const [goods] = newcart;
      console.log(newcart);
      console.log(goods);
      const cartproduct = cart.filter((item) => item.id === goods.id);
      if (cartproduct.length > 0) {
        alert("product already in the cart");
      } else {
        setcart((prevState) => [...prevState, goods]);
      }
    } else {
      alert("please login");
      navigate("/login");
    }
  }

  console.log(cart);
  return (
    <div style={{ textAlign: "center" }}>
      {newcart.map((post) => (
        <Card className="viewproducts" style={{ width: "31rem" }}>
          <Card.Img className="cardimg" variant="top" src={post.productImage} />
          <Card.Body>
            <Card.Title>₹ {post.price}</Card.Title>
            <Card.Text>{post.productName}</Card.Text>

            <Button variant="outline-secondary" onClick={addcart}>
              add cart
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default ViewCart;
