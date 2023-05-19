import React, { useContext } from "react";
import { babyshop } from "../context";
import "../Pages/Navbar.css";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Babydress() {
  const data = useContext(babyshop);
  const { state } = data;
  const navigate = useNavigate();
  const dress = state.filter((item) => item.type === "dress");

  return (
    <div className="topdiv d-flex shadow" style={{ textAlign: 'center'}}>
      {dress.map((post) => (
        <Card className="products  mt-5 d-inline-block shadow" style={{ width: "21rem" }}>
          <Card.Img className="cardimg" variant="top" src={post.productImage} />
          <Card.Body>
            <Card.Title variant="secondary">₹ {post.price}</Card.Title>
            <Card.Text>{post.productName}</Card.Text>
            <Button
             variant="outline-secondary"
              onClick={() => navigate(`/cart/${post.id}`)}
            >
              view item
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Babydress;
