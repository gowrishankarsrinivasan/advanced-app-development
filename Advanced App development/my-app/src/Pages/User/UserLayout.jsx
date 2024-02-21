import React from "react";
import propTypes from "prop-types";
import Navbar from "./Navbar";
const UserLayout = ({children}) => {
  return (
    <div className="user_container" style={{background:"gray"}}>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <footer></footer>
    </div>
  );
};

UserLayout.propTypes = {
  children: propTypes.node.isRequired,
};

export default UserLayout;
