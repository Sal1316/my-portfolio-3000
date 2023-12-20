import React from "react";
import { useState } from "react";

// import Auth from "../utils/auth";

const Contact = () => {
  const [formState, setFormState] = useState({ email: "", password: "" });

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        username: formState.username,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  return (
    <div className="container pt-5">
      <div className="row">
        <div className="col">
          <h2 className="text-center">
            Need link to download resume, and developers work prefrences.
          </h2>
          <form>
            <div className="mb-3">
              <label for="firstName" className="form-label">
                Name
              </label>
              <input
                type="firstName"
                className="form-control"
                id="firstName"
                placeholder="First Name"
              />
            </div>
            <div className="mb-3">
              <label for="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="name@example.com"
              />
            </div>
            <div className="mb-3">
              <label for="messageArea" className="form-label">
                Short Message
              </label>
              <textarea
                className="form-control"
                // style={{ width: "200px" }}
                id="messageArea"
                rows="3"
              ></textarea>
            </div>
          </form>
        </div>
      
      </div>
    </div>
  );
};

export default Contact;
