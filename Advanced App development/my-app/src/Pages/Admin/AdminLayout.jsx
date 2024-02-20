import React from 'react';
import PropTypes from 'prop-types';
const AdminLayout = (Children) => {
  return (
    <div>
      <div className='admin_container'>
        <aside>
            {/* sidenav */}
        </aside>
        <main>
            {Children}
        </main>
      </div>
    </div>
  );
}

AdminLayout.prototype={
    Children: PropTypes.node.isRequired
}

export default AdminLayout;
