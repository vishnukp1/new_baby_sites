import React, { useContext } from "react";
import { babyshop } from "../context";
import { Button, Card } from "react-bootstrap";
import "../products/product.css";
import { useNavigate } from "react-router-dom";

function AdminProduct() {
  const navigate = useNavigate();
  const data = useContext(babyshop);
  const { state, setState } = data;

  function deleteItem(id) {
    const newArray = state.filter((item) => item.id !== id);
    setState(newArray);
  }
  console.log(state);
  return (
    <div className="topdiv" style={{ textAlign: "center" }}>
      {state.map((post) => (
        <Card
          className="products mt-5 d-inline-block shadow"
          style={{ width: "21rem" }}
        >
          <Card.Img
            className="cardimg"
            style={{ marginTop: "-1px" }}
            variant="top"
            src={post.productImage}
          />
          <Card.Body>
            <Card.Title>₹ {post.price}</Card.Title>
            <Card.Text>{post.productName}</Card.Text>
            <Button
              variant="outline-secondary"
              className="margin-left"
              onClick={() => deleteItem(post.id)}
            >
              Delete
            </Button>
            <Button
              variant="outline-secondary"
              className="margin-left"
              onClick={() => navigate(`/adminpage/adminedit/${post.id}`)}
            >
              Edits
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default AdminProduct;
