import React from "react";
import "./AddEmployee.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const employeeURL =
  "https://hackt-6c946-default-rtdb.asia-southeast1.firebasedatabase.app/employees.json";

const AddEmployee = () => {
  const navigate = useNavigate();
  const [employeesData, setEmployeesData] = useState({
    fullName: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    employeeID: "",
    department: "",
    jobTitle: "",
    joiningDate: "",
    employmentType: "",
    salary: "",
    currentAddress: "",
    permanentAddress: "",
    emergencyContact: "",
    username: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      axios.post(employeeURL, employeesData);
      alert("Employee added Successfully...");
      navigate("/");
    } catch (error) {
      console.log("Error adding employees", error);
      alert("Error adding employees, please try again");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeesData({ ...employeesData, [name]: value });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        {/* Basic Employee Information */}
        <div className="form-section">
          <h2>Basic Employee Information</h2>
          <input
            type="text"
            placeholder="Enter Full Name"
            name="fullName"
            value={employeesData.fullName}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            placeholder="Enter Email"
            name="email"
            value={employeesData.email}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            placeholder="Enter Phone Number"
            name="phone"
            value={employeesData.phone}
            onChange={handleChange}
            required
          />
          <label style={{ marginTop: "10px" }}>Date Of Birth</label>
          <input
            type="date"
            placeholder="Enter Birth Date"
            name="dob"
            value={employeesData.dob}
            onChange={handleChange}
            required
          />
          <div className="gender-container">
            <label>Gender:</label>
            <div className="gender-options">
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={employeesData.gender === "Male"}
                  onChange={handleChange}
                />{" "}
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={employeesData.gender === "Female"}
                  onChange={handleChange}
                />{" "}
                Female
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Others"
                  checked={employeesData.gender === "Others"}
                  onChange={handleChange}
                />{" "}
                Others
              </label>
            </div>
          </div>
        </div>

        {/* Job Details */}
        <div className="form-section">
          <h2>Job Details</h2>
          <input
            type="number"
            placeholder="Enter Employee ID"
            name="employeeID"
            value={employeesData.employeeID}
            onChange={handleChange}
            required
          />
          <select
            value={employeesData.department}
            name="department"
            onChange={handleChange}
            required
          >
            <option value="">Select Department</option>
            <option value="HR">HR</option>
            <option value="IT">IT</option>
            <option value="Finance">Finance</option>
            <option value="Operations">Operations</option>
            <option value="Others">Others</option>
          </select>
          <input
            type="text"
            placeholder="Enter Job Title"
            name="jobTitle"
            value={employeesData.jobTitle}
            onChange={handleChange}
            required
          />
          <label style={{ marginTop: "10px" }}>Date Of Joining</label>
          <input
            type="date"
            placeholder="Enter Joining Date"
            name="joiningDate"
            value={employeesData.joiningDate}
            onChange={handleChange}
            required
          />
          <select
            name="employmentType"
            value={employeesData.employmentType}
            onChange={handleChange}
            required
          >
            <option value="">Employment Type</option>
            <option value="Full Time">Full Time</option>
            <option value="Part Time">Part Time</option>
            <option value="Intern">Intern</option>
          </select>
          <input
            type="number"
            placeholder="Enter Salary"
            name="salary"
            value={employeesData.salary}
            onChange={handleChange}
            required
          />
        </div>

        {/* Address Details */}
        <div className="form-section">
          <h2>Address Details</h2>
          <label>Current Address</label>
          <textarea
            placeholder="Enter Current Address"
            name="currentAddress"
            value={employeesData.currentAddress}
            onChange={handleChange}
            required
          ></textarea>
          <label>Permanent Address</label>
          <textarea
            placeholder="Enter Permanent Address"
            name="permanentAddress"
            value={employeesData.permanentAddress}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        {/* Additional Information */}
        <div className="form-section">
          <h2>Additional Information</h2>
          <input
            type="number"
            placeholder="Emergency Contact Number"
            name="emergencyContact"
            value={employeesData.emergencyContact}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            placeholder="Enter Username"
            name="username"
            value={employeesData.username}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            value={employeesData.password}
            onChange={handleChange}
            required
          />
        </div>

        {/* Submit Button */}
        <div className="submit-btn">
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default AddEmployee;
