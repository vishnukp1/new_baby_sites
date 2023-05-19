import React, { useContext } from "react";
import "./Navbar.css";
import "../products/product.css";
import { Button, Card } from "react-bootstrap";
import { babyshop } from "../context";
import { useNavigate } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

const Main = () => {
  const data = useContext(babyshop);
  const { state } = data;

  const navigate = useNavigate();
  const main = state.filter((item) => item.id % 2 === 0);
  return (
    <div style={{ textAlign: "center" }}>
      {/* <SearchPage /> */}

      <div className="mainhead">
        <div className="moving">
          <Carousel>
            <Carousel.Item interval={500}>
              <img
                className="d-block w-100"
                src="https://cdnext.fynd.com/live/image/catalog/brandstore/mothercare/MCBeddingRangeBanner920x650.jpg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img
                className="d-block w-100"
                src="https://cdnext.fynd.com/live/image/mothercare/banner/333_202206030532_MC_Banner_1920x650_Feeding_Essentials.png"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img
                className="d-block w-100"
                src="https://cdnext.fynd.com/live/image/mothercare/banner/333_202206061058_MC_Banner_1920x650_BathTimeEssentials@2x.png"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="topdiv d-flex mt-5 d-inline-block shadow">
          {main.map((post) => (
            <Card
              className="products mt-5 d-inline-block shadow  "
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
                  onClick={() => navigate(`/cart/${post.id}`)}
                >
                  view item
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
