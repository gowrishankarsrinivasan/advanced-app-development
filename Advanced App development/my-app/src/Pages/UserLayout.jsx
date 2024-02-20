import React from "react";
import PropTypes from 'prop-types';
const UserLayout = (Children) => {
  return (
    <div className="user_container">
      <header></header>
      <main>{Children}</main>
      <footer></footer>
    </div>
  );
};

UserLayout.PropTypes = {
    Children: PropTypes.node.isRequired
}

export default UserLayout;
