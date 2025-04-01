import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./EditEmployee.css";

const employeeURL =
  "https://hackt-6c946-default-rtdb.asia-southeast1.firebasedatabase.app/employees.json";

const EditEmployee = () => {
  const { id } = useParams(); // Get the employee id from the URL
  const [employee, setEmployee] = useState(null);
  const navigate = useNavigate();

  // Fetch the employee data when the component mounts
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

  // Handle form submission to update the employee
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(
        `https://hackt-6c946-default-rtdb.asia-southeast1.firebasedatabase.app/employees/${id}.json`,
        employee
      );
      navigate("/"); // Navigate back to the home page after successful update
    } catch (error) {
      console.error("Error updating employee data", error);
    }
  };

  // Handle input change
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
        <form onSubmit={handleSubmit}>
          <label>
            Full Name:
            <input
              type="text"
              name="fullName"
              value={employee.fullName}
              onChange={handleChange}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={employee.email}
              onChange={handleChange}
            />
          </label>
          <label>
            Phone:
            <input
              type="text"
              name="phone"
              value={employee.phone}
              onChange={handleChange}
            />
          </label>
          <label>
            Department:
            <input
              type="text"
              name="department"
              value={employee.department}
              onChange={handleChange}
            />
          </label>
          <label>
            Job Title:
            <input
              type="text"
              name="jobTitle"
              value={employee.jobTitle}
              onChange={handleChange}
            />
          </label>
          <label>
            Salary:
            <input
              type="number"
              name="salary"
              value={employee.salary}
              onChange={handleChange}
            />
          </label>
          <label>
            Date of Birth:
            <input
              type="date"
              name="dob"
              value={employee.dob}
              onChange={handleChange}
            />
          </label>
          <label>
            Joining Date:
            <input
              type="date"
              name="joiningDate"
              value={employee.joiningDate}
              onChange={handleChange}
            />
          </label>
          <label>
            Gender:
            <input
              type="text"
              name="gender"
              value={employee.gender}
              onChange={handleChange}
            />
          </label>
          <label>
            Current Address:
            <input
              type="text"
              name="currentAddress"
              value={employee.currentAddress}
              onChange={handleChange}
            />
          </label>
          <label>
            Permanent Address:
            <input
              type="text"
              name="permanentAddress"
              value={employee.permanentAddress}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Update Employee</button>
        </form>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default EditEmployee;
