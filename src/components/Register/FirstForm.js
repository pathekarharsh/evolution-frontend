import React, { useState } from "react";
import "./FirstForm.css"
import { Link } from "react-router-dom";
import Footer from "../Footer";

function RegistrationForm() {
  const [registrationId, setRegistrationId] = useState("");
  const [name, setName] = useState("");
  const [classValue, setClassValue] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [idCard, setIdCard] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform form validation
    if (
      !registrationId ||
      !name ||
      !classValue ||
      !email ||
      !phoneNumber ||
      !idCard
    ) {
      setErrorMessage("All fields are required.");
      return;
    }

    // Process the form data
    // Send the data to the server or perform any desired actions

    // Reset form fields
    setRegistrationId("");
    setName("");
    setClassValue("");
    setEmail("");
    setPhoneNumber("");
    setIdCard(null);
    setErrorMessage("");
  };

  return (
    <div className="main-container">
      <h1>Registration Form</h1>
      {errorMessage && <p>{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Registration ID:
            <input
              type="text"
              value={registrationId}
              onChange={(e) => setRegistrationId(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Class:
            <input
              type="text"
              value={classValue}
              onChange={(e) => setClassValue(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Phone Number:
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            ID Card (Upload):
            <input
              type="file"
              accept=".jpg,.jpeg,.png"
              onChange={(e) => setIdCard(e.target.files[0])}
              required
            />
          </label>
        </div>
        <Link to="/payment" class="btn" type="submit">Payment</Link>
      </form>
      <Footer/>
    </div>
  );
}

export default RegistrationForm;
