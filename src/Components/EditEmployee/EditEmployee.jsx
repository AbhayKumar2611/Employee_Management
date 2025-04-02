import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./EditEmployee.css";

const EditEmployee = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);
  const navigate = useNavigate();

  const departmentOptions = [
    "HR",
    "Engineering",
    "Marketing",
    "Sales",
    "Finance",
  ];
  const jobTitles = [
    "Manager",
    "Software Engineer",
    "Designer",
    "Analyst",
    "HR Executive",
  ];

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await axios.get(
          `https://hackt-6c946-default-rtdb.asia-southeast1.firebasedatabase.app/employees/${id}.json`
        );
        setEmployee(response.data);
      } catch (error) {
        console.error("Error fetching employee data", error);
      }
    };

    fetchEmployee();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(
        `https://hackt-6c946-default-rtdb.asia-southeast1.firebasedatabase.app/employees/${id}.json`,
        employee
      );
      navigate("/");
    } catch (error) {
      console.error("Error updating employee data", error);
    }
  };

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="edit-container">
      <h1>Edit Employee</h1>
      {employee ? (
        <form onSubmit={handleSubmit} className="edit-form">
          <div className="form-group">
            <label>Full Name:</label>
            <input
              type="text"
              name="fullName"
              value={employee.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={employee.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Phone:</label>
            <input
              type="text"
              name="phone"
              value={employee.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Department:</label>
            <select
              name="department"
              value={employee.department}
              onChange={handleChange}
              required
            >
              <option value="">Select Department</option>
              {departmentOptions.map((dept) => (
                <option key={dept} value={dept}>
                  {dept}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Job Title:</label>
            <select
              name="jobTitle"
              value={employee.jobTitle}
              onChange={handleChange}
              required
            >
              <option value="">Select Job Title</option>
              {jobTitles.map((title) => (
                <option key={title} value={title}>
                  {title}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Salary:</label>
            <input
              type="number"
              name="salary"
              value={employee.salary}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Date of Birth:</label>
            <input
              type="date"
              name="dob"
              value={employee.dob}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Joining Date:</label>
            <input
              type="date"
              name="joiningDate"
              value={employee.joiningDate}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Gender:</label>
            <select
              name="gender"
              value={employee.gender}
              onChange={handleChange}
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">Others</option>
            </select>
          </div>

          <div className="form-group">
            <label>Current Address:</label>
            <textarea
              name="currentAddress"
              value={employee.currentAddress}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="form-group">
            <label>Permanent Address:</label>
            <textarea
              name="permanentAddress"
              value={employee.permanentAddress}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="update-btn">
            Update Employee
          </button>
        </form>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default EditEmployee;
