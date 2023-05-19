import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";
import { ShoppingCart, User } from "phosphor-react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { MdAdsClick } from "react-icons/md";

import { babyshop } from "../context";

// import Sidebar from '../Sidebar';

function NavbarTop() {
  const { setsearchdata, searchQuery, state, setSearchQuery, auth,userdata,setauth} =
    useContext(babyshop);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    const filtered = state.filter((item) =>
      item.productName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (searchQuery) {
      e.preventDefault();
      setsearchdata(filtered);
      navigate("/searchpage");
      console.log(filtered.length);
    }
  };
  const index=userdata.length-1
const newdata=userdata[index]
const goods=newdata

  return (
    <div className="mainnavbar">
      {/* <Sidebar /> */}
      <header>
        <Navbar bg="light" className="navbar" variant="light">
          <Container>
            <div className="navimg">
              <img
                src="https://websitedemos.net/baby-store-04/wp-content/uploads/sites/750/2020/12/baby-store-logo.svg"
                width="100"
                height="100"
                className="d-inline-block align-top "
                alt="React Bootstrap logo"
                onClick={() => navigate("/")}
              />
            </div>

            <Navbar.Brand onClick={() => navigate("/")}>Home</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link onClick={() => navigate("/babydress")}>
                Babydress
              </Nav.Link>
              <Nav.Link onClick={() => navigate("/babytoys")}>
                Babytoys
              </Nav.Link>
              <Nav.Link onClick={() => navigate("/babyfood")}>
                Babyfoods
              </Nav.Link>
              <Nav.Link onClick={() => navigate("/adminpage/adminproduct")}>
                <MdAdsClick />
              </Nav.Link>
              {/* <Nav.Link onClick={() => navigate("/searchpage")}>Search Page</Nav.Link> */}
            </Nav>
            <Form className="d-flex" onSubmit={handleSearch}>
              <Form.Control
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
              />
              <Button
                type="submit"
                variant="outline-secondary"
                onClick={() => navigate("/searchpage")}
              >
                Search
              </Button>
            </Form>

            <Nav>
             { auth ? <ShoppingCart className="ms-3 me-3" size={32} onClick={() => navigate("/cartitem")} /> :null }
             { auth ? <>  <Button  variant="outline-danger" onClick={() => navigate("/login")} style={{borderRadius: "50px"}} className="text-uppercase ms-2" > {goods.name}</Button> <Button  variant="outline-secondary" onClick={()=>setauth(false)}>Sign Out</Button></> : <Button className="ms-2" variant="outline-secondary" onClick={() => navigate("/login")} size={32} >signIn</Button> }
             
            </Nav>
          </Container>
        </Navbar>
      </header>
    </div>
  );
}

export default NavbarTop;
