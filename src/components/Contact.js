import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [responseMessage, setResponseMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false); // Track form submission

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/contact`, formData);
            setResponseMessage(res.data.message);
            setIsSubmitted(true); // Mark the form as submitted
        } catch (error) {
            console.error(error);
            setResponseMessage('An error occurred while sending the message.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact">
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={handleChange}
                    required
                    disabled={loading || isSubmitted}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    required
                    disabled={loading || isSubmitted}
                />
                <textarea
                    name="message"
                    placeholder="Message"
                    onChange={handleChange}
                    required
                    disabled={loading || isSubmitted}
                ></textarea>
                <button type="submit" disabled={loading || isSubmitted}>
                    {loading ? 'Sending...' : isSubmitted ? 'Message Sent' : 'Send'}
                </button>
            </form>
            {responseMessage && <p id={"responseMessage"}>{responseMessage}</p>}
        </section>
    );
};

export default Contact;
