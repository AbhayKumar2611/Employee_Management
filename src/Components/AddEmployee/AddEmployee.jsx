import React from "react";
import "./AddEmployee.css";
import { useState } from "react";

const employeeURL =
  "https://hackt-6c946-default-rtdb.asia-southeast1.firebasedatabase.app/employees.json";
// const cloudinaryUploadURL =
//   "https://api.cloudinary.com/v1_1/dxiql6qj5/image/upload";

const AddEmployee = () => {
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
    imageURL: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
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
            value={employeesData.fullName}
            required
          />
          <input
            type="email"
            placeholder="Enter Email"
            value={employeesData.email}
            required
          />
          <input
            type="number"
            placeholder="Enter Phone Number"
            value={employeesData.phone}
            required
          />
          <label style={{ marginTop: "10px" }}>Date Of Birth</label>
          <input
            type="date"
            placeholder="Enter Birth Date"
            value={employeesData.dob}
            required
          />
          <div className="gender-container">
            <label>Gender:</label>
            <div className="gender-options">
              <label>
                <input type="radio" name="gender" value="Male" /> Male
              </label>
              <label>
                <input type="radio" name="gender" value="Female" /> Female
              </label>
              <label>
                <input type="radio" name="gender" value="Others" /> Others
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
            value={employeesData.employeeID}
            required
          />
          <select value={employeesData.department} required>
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
            value={employeesData.jobTitle}
            required
          />
          <label style={{ marginTop: "10px" }}>Date Of Joining</label>
          <input
            type="date"
            placeholder="Enter Joining Date"
            value={employeesData.joiningDate}
            required
          />
          <select value={employeesData.employmentType} required>
            <option value="">Employment Type</option>
            <option value="Full Time">Full Time</option>
            <option value="Part Time">Part Time</option>
            <option value="Intern">Intern</option>
          </select>
          <input
            type="number"
            placeholder="Enter Salary"
            value={employeesData.salary}
            required
          />
        </div>

        {/* Address Details */}
        <div className="form-section">
          <h2>Address Details</h2>
          <label>Current Address</label>
          <textarea
            placeholder="Enter Current Address"
            value={employeesData.currentAddress}
            required
          ></textarea>
          <label>Permanent Address</label>
          <textarea
            placeholder="Enter Permanent Address"
            value={employeesData.permanentAddress}
            required
          ></textarea>
        </div>

        {/* Additional Information */}
        <div className="form-section">
          <h2>Additional Information</h2>
          <label>Upload Profile Picture</label>
          <input type="file" required />
          <input
            type="number"
            placeholder="Emergency Contact Number"
            value={employeesData.emergencyContact}
            required
          />
          <input
            type="text"
            placeholder="Enter Username"
            value={employeesData.usename}
            required
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={employeesData.password}
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
