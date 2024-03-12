import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { getCourses } from "../../services/auth";
import "/src/assets/Css/Admincss/AdminCourse.css";
import CourseData from "../User/data.json";
import img from "/src/assets/Images/coursesImages/B1.png";
const Course = () => {
  const nav = useNavigate();
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchCourseData();
  }, []);

  const fetchCourseData = async () => {
    try {
      const response = await getCourses();
      setCourses(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error("Failed to fetch data");
    }
  };

  const getImageByCourseName = (courseName) => {
    const course = CourseData.find(
      (course) => course.courseName === courseName
    );
    return course ? course.img : img;
  };

  const handleEnroll = (courseName) => {
    nav("/bec.com/user/payment");
    toast.success(`Course Enrolled: ${courseName}`);
  };

  return (
    <div className="course-wrapper">
      <div className="course_container">
        {courses.map((data) => (
          <div className="box" key={data.id}>
            <div className="box-content">
              <div className="image-box">
                <img
                  src={getImageByCourseName(data.courseName)}
                  alt={data.courseName}
                  className="course-image"
                />
              </div>
              <div className="image-box-details">
                <div className="image-box-details-info">
                  <h3>{data.courseName}</h3>
                  <p>Duration: {data.duration}</p>
                  <p>Fees: {data.fees}</p>
                  <div className="course-btn-wrapper">
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
