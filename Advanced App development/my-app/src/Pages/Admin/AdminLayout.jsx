import React from "react";
import PropTypes from "prop-types";
import Navbar from "./AdminNavBar";
import Footer from "../User/footer";
const AdminLayout = ({ children }) => {
  return (
    <div className="admin">
      <header style={{ position: "sticky", top: "0", zIndex: "1" }}>
        <Navbar />
      </header>
      <main>{children}</main>
      <Footer>
        <Footer />
      </Footer>
    </div>
  );
};

AdminLayout.prototype = {
  Children: PropTypes.node.isRequired,
};

export default AdminLayout;
