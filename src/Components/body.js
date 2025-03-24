import React, { useState } from "react";
import Sidebar from "./sidebar";
import MainBody from "./mainbody";
import "./body.css";

function Body() {
  const [selectedCategory, setCategory] = useState("");

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <div className="col-2">
          <Sidebar setCategory={setCategory} />
        </div>
        {/* Main Content */}
        <div className="col-10">
          <MainBody category={selectedCategory} />
        </div>
      </div>
    </div>
  );
}

export default Body;
