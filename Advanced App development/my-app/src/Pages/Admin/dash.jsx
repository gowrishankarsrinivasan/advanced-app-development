// Dashboard.jsx
import "/src/assets/Css/dashboard.css";
import { useState } from "react";

const AdminProfilePage = () => {
  const [users, setUsers] = useState([
    { id: 1, username: "user1", email: "user1@example.com", role: "Admin" },
    { id: 2, username: "user2", email: "user2@example.com", role: "User" },
    { id: 3, username: "user3", email: "user3@example.com", role: "User" },
  ]);
  const [formData, setFormData] = useState({
    id: "",
    username: "",
    email: "",
    role: "",
  });
  const [isEdit, setIsEdit] = useState(false);

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const handleEdit = (user) => {
    setFormData(user);
    setIsEdit(true);
  };

  const handleSave = () => {
    if (isEdit) {
      setUsers(
        users.map((user) => (user.id === formData.id ? formData : user))
      );
    } else {
      setUsers([...users, { ...formData, id: Date.now() }]);
    }
    setFormData({ id: "", username: "", email: "", role: "" });
    setIsEdit(false);
  };

  return (
    <div className="admin-profile-container">
      <div className="container">
        <div className="half-size">
        <div className="half-size-content">
          <h1>Hello Gowri Shankar</h1>
          <p> Welcome to our online learning platform! We're excited to have you here and help you achieve your goals.
          Good Luck with your learning.</p>
          </div>
          <div className="card-wrapper">
            <div className="card">Users</div>
            <div className="card">Admin</div>
            <div className="card">Add Courses</div>
            <div className="card">View Query</div>
          </div>
        </div>
      </div>
      <div className="admin-profile-header">
        <h1>Welcome, Admin</h1>
      </div>
      <div className="admin-profile-content">
        <div className="user-table">
          <h2>Users</h2>
          <table>
            <thead>
              <tr>
                <th>Username</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>
                    <button
                      className="edit-button"
                      onClick={() => handleEdit(user)}
                    >
                      Edit
                    </button>
                    <button
                      className="edit-button"
                      onClick={() => deleteUser(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="user-form">
          <h2>{isEdit ? "Edit User" : "Add User"}</h2>
          <input
            className="dash-input"
            type="text"
            placeholder="Username"
            value={formData.username}
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
          />
          <input
            className="dash-input"
            type="text"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <input
            className="dash-input"
            type="text"
            placeholder="Role"
            value={formData.role}
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
          />
          <button onClick={handleSave} className="save-button">
            {isEdit ? "Save" : "Add"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminProfilePage;
