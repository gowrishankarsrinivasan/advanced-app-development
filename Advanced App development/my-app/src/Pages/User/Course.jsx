import React from "react";
import CourseData from "./data";
import "/src/assets/Css/courseList.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Course = () => {
  const handleEnroll = (courseName) => {
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
                  <button
                    className="enroll-button"
                    onClick={() => handleEnroll(data.courseName)}
                  >
                    Enroll
                  </button>
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
