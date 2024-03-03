import React, { useEffect } from "react";
import CourseData from "./data";
import "/src/assets/Css/courseList.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Course = () => {
  const nav = useNavigate();

  useEffect(() => {
    fetchCourseData();
  }, []);

  const fetchCourseData = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8181/data");

      if (response.ok) {
        console.log("GET API is working");
        const data = await response.json();
        console.table(data);
      } else {
        console.error("Failed to fetch data from GET API");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error("Failed to fetch data");
    }
  };

  const handleEnroll = (courseName) => {
    nav("/bec.com/user/payment");
    toast.success(`Course Enrolled: ${courseName}`);
  };

  return (
    <div className="course-wrapper">
      <div className="course_container">
        {CourseData.map((data) => (
          <div className="box" key={data.id}>
            <div className="box-content">
              <div className="image-box">
                <img
                  src={data.img}
                  alt={data.courseName}
                  className="course-image"
                />
              </div>
              <div className="image-box-details">
                <div className="image-box-details-info">
                  <h3>{data.courseName}</h3>
                  <p>Exam Format: {data.examFormat}</p>
                  <p>No. of Papers: {data.Noofpapers}</p>
                  <p>Exam Length: {data.ExamLength}</p>
                  <div className="course-btn-wrapper">
                    <button
                      className="enroll-button"
                      onClick={() => handleEnroll(data.courseName)}
                    >
                      Enroll
                    </button>
                    <button className="enroll-button">Delete</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Course;
