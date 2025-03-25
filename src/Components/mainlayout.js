import React, { useEffect, useState } from "react";
import Header from "./header";
import Footer from "./footer";
import ProductList from "./ProductList";
import Sidebar from "./sidebar";

function Home() {
  const [selectedCategory, setCategory] = useState("");
  useEffect(() => {
    setCategory(selectedCategory);
  }, [selectedCategory]);
  return (
    <div>
      <Header />
      <div>
        <div className="welcome text-center">
          <h2>Welcome to the ART CORNER!</h2>
        </div>
        <div className="container-fluid flex-column">
          <div className="row">
            {/* Sidebar */}
            <div className="col-2">
              <Sidebar setCategory={setCategory} />
            </div>
            {/* Main Content */}
            <div className="col-10">
              <ProductList categorySidebar={selectedCategory} />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
