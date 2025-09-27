import React from "react";
import Addstore from "../../components/Addstore/Addstore";

const Adminhomepage = () => {
  return (<>
  <div><h1>Welcome Admin</h1>This is a Admin page. Admin can see this page only</div>
  <>This is cart to add store for admin</>
  <div>
    <Addstore/>
  </div>
  </>
  )
};

export default Adminhomepage;
