import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={headerStyle}>
      <h1>TodosList</h1>
      <Link className="link" to="/">
        Todo List
      </Link>{" "}
      |{" "}
      <Link className="link" to="/contact">
        Contact
      </Link>
    </header>
  );
}
const headerStyle = {
  background: "blue",
  color: "#fff",
  textAlign: "center",
  padding: "10px",
  borderRadius: "5px"
};
export default Header;
