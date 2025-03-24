import React from "react";
import "./sidebar.css";

function Sidebar({ setCategory }) {
  return (
    <div className="sidebar p-3" style={{ borderRight: "1px solid black", height: "85vh" }}>
      <button className="btn btn-secondary w-100 mb-3">Top Categories to choose from!</button>
      <ul className="nav flex-column">
        {["Painting", "Crochet", "Sculpting", "Photography", "Pen Sketch"].map((category) => (
          <li key={category} className="nav-item">
            <button className="nav-link btn btn-light w-100" onClick={() => setCategory(category)}>
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
