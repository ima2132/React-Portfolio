import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";
import '../styles/Contact.css';



export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: ""});
    const [errorMessage, setErrorMessage] = useState("");
    const [formSubmissionMessage, setFormSubmissionMessage] = useState("");

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value});
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const { name, email, message } = formData;
    
        if (!name || !email || !message) {
          setFormSubmissionMessage("");
          setErrorMessage("All fields are required.");
          return;
        }

        if (!validateEmail(email)) {
          setFormSubmissionMessage("");
          setErrorMessage("Invalid Email. Please try again.");
          return;
        }

        setFormData({ name: "", email: "", message: ""});
        setErrorMessage("");
        setFormSubmissionMessage(`Thank you ${name} for reaching out.`);
    };

    return ( 
        <div>
            <div>
            <h1 className="contact">Contact Me</h1>
                <form className="contact-container">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input value={formData.name} name="name" onChange={handleInputChange} type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input value={formData.email} name="email" onChange={handleInputChange} type="email" placeholder="name@email.com" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea value={formData.message} name="message" onChange={handleInputChange} type="text" className="form-control" rows="3"></textarea>
                    </div>
                    <button type="submit" onClick={handleFormSubmit} className="button">Submit</button>
                </form>
            </div>
            <div className="message">
                <p>{errorMessage}</p>
                <p>{formSubmissionMessage}</p>
            </div>
        </div>
    )
}
