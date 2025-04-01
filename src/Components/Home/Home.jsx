import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Home.css";

const employeeURL =
  "https://hackt-6c946-default-rtdb.asia-southeast1.firebasedatabase.app/employees.json";

const Home = () => {
  const [employees, setEmployees] = useState([]);

  // Fetch employees data on component mount

  const fetchEmployees = async () => {
    try {
      const response = await axios.get(employeeURL);
      const employeeData = response.data;

      // Convert the object into an array of employees
      const employeeArray = Object.keys(employeeData).map((key) => ({
        id: key,
        ...employeeData[key],
      }));
      setEmployees(employeeArray);
      console.log(employeeArray);
    } catch (error) {
      console.error("Error fetching employee data", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      console.log(id);
      await axios.delete(
        `https://hackt-6c946-default-rtdb.asia-southeast1.firebasedatabase.app/employees/${id}.json`
      );
      fetchEmployees();
    } catch (error) {
      console.log(error, "Error Deleting Employees");
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div className="home-container">
      <h1>Employee List</h1>
      <div className="employee-list">
        {employees.length > 0 ? (
          employees.map((employee) => (
            <div key={employee.id} className="employee-card">
              <h2>{employee.fullName}</h2>
              <p>
                <strong>Email:</strong> {employee.email}
              </p>
              <p>
                <strong>Phone:</strong> {employee.phone}
              </p>
              <p>
                <strong>Department:</strong> {employee.department}
              </p>
              <p>
                <strong>Job Title:</strong> {employee.jobTitle}
              </p>
              <p>
                <strong>Salary:</strong> ${employee.salary}
              </p>
              <p>
                <strong>Date of Birth:</strong> {employee.dob}
              </p>
              <p>
                <strong>Joining Date:</strong> {employee.joiningDate}
              </p>
              <p>
                <strong>Gender:</strong> {employee.gender}
              </p>
              <p>
                <strong>Current Address:</strong> {employee.currentAddress}
              </p>
              <p>
                <strong>Permanent Address:</strong> {employee.permanentAddress}
              </p>
              <div className="button-container">
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(employee.id)}
                >
                  Delete
                </button>
                <button className="edit-btn">Edit</button>
              </div>
            </div>
          ))
        ) : (
          <p>No employees found.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
