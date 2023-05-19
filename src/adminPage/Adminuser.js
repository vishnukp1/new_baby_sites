import React, { useContext } from "react";
import { babyshop } from "../context";

function Adminuser() {
  const data = useContext(babyshop);
  const { email, userdata } = data;
  console.log(email);
  console.log(userdata);

  return (
    <div>
      {userdata.map((item) => {
        return (
          <div
            className=" m-2 shadow-lg m-1 "
            style={{ alignItems: "center", borderBottom: "2px brown solid" }}
          >
            <div>
              <h6 className="mt-3 fst-italic fw-bolder fs-3 ms-5">
                Name:{item.name}&nbsp;{item.lastname}
              </h6>
            </div>

            <div>
              <h6 className="mt-3 fst-italic fw-bolder fs-3 ms-5">
                Email:{item.email}
              </h6>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Adminuser;
