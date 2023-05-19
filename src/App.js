import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Main from "./Pages/Main";
import Babydress from "./products/Babydress";
import Babyfood from "./products/Babyfood";
import Babytoys from "./products/Babytoys";
import { useEffect, useState } from "react";
import { babyshop } from "./context";
import { PRODUCTS } from "./data";
import NavbarTop from "./Pages/Navbar";
import LogIn from "./Pages/LogIn";
import SignUp from "./Pages/SignUp";
import Cartitem from "./cart/CartItem";
import ViewCart from "./cart/Viewcart";
import AdminEdit from "./adminPage/AdminEdit";
import AdminProduct from "./adminPage/AdminProduct";
import Adminuser from "./adminPage/Adminuser";
import Admin from "./adminPage/Admin";
import AdminAddproducts from "./adminPage/AdminAddproducts";
import Footer from "./Pages/Footer";
import SearchPage from "./adminPage/SearchPage";

function App() {
  const location = useLocation();

  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    if (location.pathname.includes("adminpage")) {
      setAdmin(true);
    } else {
      setAdmin(false);
    }
  }, [location]);
  console.log(admin);
  const [state, setState] = useState(PRODUCTS);
  const [email, setemail] = useState([]);
  const [cart, setcart] = useState([]);
  const [auth, setauth] = useState(false);
  const [userdata, setuserdata] = useState([]);
  const [cartItems, setCartItems] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchdata, setsearchdata] = useState([]);
  const data = {
    state,
    setState,
    email,
    setemail,
    cart,
    setcart,
    auth,
    setauth,
    userdata,
    setuserdata,
    cartItems,
    setCartItems,
    searchdata,
    setsearchdata,
    searchQuery,
    setSearchQuery,
  };
  console.log(state);
  return (
    <>
      <babyshop.Provider value={data}>
        {admin ? null : <NavbarTop />}

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/babyfood" element={<Babyfood />} />

          <Route path="/babydress" element={<Babydress />} />
          <Route path="/babytoys" element={<Babytoys />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/cart/:id" element={<ViewCart />} />
          <Route path="/cartitem" element={<Cartitem />} />
          <Route path="/searchpage" element={<SearchPage />} />
          <Route path="/adminpage" element={<Admin />} />
          <Route element={<Admin />}>
            <Route path="/adminpage/adminedit/:id" element={<AdminEdit />} />
            <Route path="/adminpage/adminproduct" element={<AdminProduct />} />
            <Route path="/adminpage/adminuser" element={<Adminuser />} />
            <Route
              path="/adminpage/addproduct"
              element={<AdminAddproducts />}/>
          </Route>
        </Routes>
        {admin ? null : <Footer />}
      </babyshop.Provider>
    </>
  );
}
export default App;
