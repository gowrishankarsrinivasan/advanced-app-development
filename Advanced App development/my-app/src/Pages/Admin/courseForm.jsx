import React, { useState } from "react";
import "/src/assets/Css/Admincss/courseForm.css"; // Import your CSS file for styling
import { AddCourse } from "../../services/auth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Form = () => {
  const [courseName, setCourseName] = useState("");
  const [courseDuration, setCourseDuration] = useState("");
  const [courseFees, setCourseFees] = useState("");
  const [image, setImage] = useState(null);
  const examformat = "Computer or paper-based";
  const noofpapers = "3";
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        courseName: courseName,
        duration: courseDuration,
        fees: courseFees,
        examformat: examformat,
        noofpapers: noofpapers,
      };

      // Make a POST request to the backend API
      const response = AddCourse(data);
      toast.success("Courses added successfully");
      setCourseName("");
      setCourseFees("");
      setCourseDuration("");
      setImage("");
      // Handle the response
      console.log("Form submitted successfully:", response.data);
    } catch (error) {
      // Handle errors
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="form-wrapper">
      <div className="form-container-img"></div>
      <div className="form-container">
        <h2 className="form-container-header">Create Course</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-group-label" htmlFor="courseName">
              Course Name
            </label>
            <input
              type="text"
              className="form-group-input"
              id="courseName"
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="courseDuration">Course Duration</label>
            <input
              type="text"
              className="form-group-input"
              id="courseDuration"
              value={courseDuration}
              onChange={(e) => setCourseDuration(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="courseFees">Course Fees</label>
            <input
              type="text"
              className="form-group-input"
              id="courseFees"
              value={courseFees}
              onChange={(e) => setCourseFees(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="courseImage">Course Image</label>
            <input
              className="form-group-input"
              type="file"
              id="courseImage"
              accept="image/*"
              onChange={handleImageChange}
              required
            />
          </div>
          <button className="form-group-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Form;
