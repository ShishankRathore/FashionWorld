import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the form data to a server or an API
        console.log('Form submitted:', formData);
        // Reset the form
        setFormData({ name: '', email: '', message: '' });
    };

    const backgroundStyle = {
        backgroundImage: 'url("https://img.freepik.com/free-photo/attractive-female-office-manager-making-table-reservation-calling-restaurant-via-smartphone-chosing_1258-134550.jpg?t=st=1733459692~exp=1733463292~hmac=9741a6482e660afed3fa86a1638d3b767b8cafa8c829f643e4a7b86ef07f7271&w=1380")',
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        height: '82vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    return (
        <div style={backgroundStyle}>
            <div className="container mt-5" style={{width:"50%"}}>
                <h1 className="text-center">Contact Us</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="message" className="form-label">Message</label>
                        <textarea
                            className="form-control"
                            id="message"
                            name="message"
                            rows="4"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;