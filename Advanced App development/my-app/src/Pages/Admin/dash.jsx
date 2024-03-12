// Dashboard.jsx
import { getAllUser } from "../../services/auth";
import "/src/assets/Css/Admincss/dashboard.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AdminProfilePage = () => {
  const [userData, setUserData] = useState([]);
  const [editedUserId, setEditedUserId] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8181/api/v1/auth/all");
      setUserData(response.data.users);
    } catch (error) {
      console.error(error);
    }
  };

  const enrolled = localStorage.getItem("enrolled");

  useEffect(() => {
    fetchData();
  }, []);

  const handleEdit = (userId) => {
    setEditedUserId(userId);
  };

  const handleSave = () => {
    // Perform save operation
    setEditedUserId(null); // Reset edited user ID to disable editing
    toast.success("Changes saved successfully!", { autoClose: 2000 });
  };

  return (
    <div className="admin-profile-container">
      <div className="container">
        <div className="half-size">
          <div className="half-size-content">
            <h1>Hello Gowri Shankar</h1>
            <p>
              {" "}
              Welcome to our online learning platform! We're excited to have you
              here and help you achieve your goals. Good Luck with your
              learning.
            </p>
          </div>
          <div className="card-wrapper">
            <div className="card">
              <p>Total Users</p>
              <br />
              <h1>{userData.length}</h1>
            </div>
            <div className="card">
              <p>Admin</p>
              <br />
              <h1>1</h1>
            </div>
            <div className="card">
              <p>Total Courses</p>
              <br />
              <h1>8</h1>
            </div>
            <div className="card">
              <p>Courses Enrolled</p>
              <br />
              <h1>{enrolled}</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="admin-profile-header">
        <h1>Welcome, Admin</h1>
      </div>
      <div className="admin-profile-content">
        <div className="user-cards">
          {userData.map((user, index) => (
            <div key={user.email} className="user-card">
              <div className="user-info">
                {editedUserId === user.id ? (
                  <div>
                    <input
                      className="admin-input"
                      type="text"
                      placeholder="Name"
                      value={user.name}
                      onChange={(e) =>
                        setUserData((prevData) => {
                          const updatedData = [...prevData];
                          updatedData[index].name = e.target.value;
                          return updatedData;
                        })
                      }
                    />
                    <input
                      className="admin-input"
                      type="text"
                      placeholder="Mobile"
                      value={user.mobile}
                      onChange={(e) =>
                        setUserData((prevData) => {
                          const updatedData = [...prevData];
                          updatedData[index].mobile = e.target.value;
                          return updatedData;
                        })
                      }
                    />
                    <input
                      className="admin-input"
                      type="text"
                      placeholder="Email"
                      value={user.email}
                      onChange={(e) =>
                        setUserData((prevData) => {
                          const updatedData = [...prevData];
                          updatedData[index].email = e.target.value;
                          return updatedData;
                        })
                      }
                    />
                    <input
                      className="admin-input"
                      type="text"
                      placeholder="Role"
                      value={user.role}
                      onChange={(e) =>
                        setUserData((prevData) => {
                          const updatedData = [...prevData];
                          updatedData[index].role = e.target.value;
                          return updatedData;
                        })
                      }
                    />
                  </div>
                ) : (
                  <div className="profile-datas">
                    <h3>{user.name}</h3>
                    <p>Mobile: {user.mobile}</p>
                    <p>Email: {user.email}</p>
                    <p>Role: {user.role}</p>
                  </div>
                )}
              </div>
              <div className="user-actions">
                {editedUserId === user.id ? (
                  <button className="edit-button" onClick={handleSave}>
                    Save
                  </button>
                ) : (
                  <button
                    className="edit-button"
                    onClick={() => handleEdit(user.id)}
                  >
                    Update
                  </button>
                )}
                <button
                  className="edit-button"
                  // onClick={() => deleteUser(user.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AdminProfilePage;
