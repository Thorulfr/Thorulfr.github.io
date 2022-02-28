// Imports
import React, { useState } from 'react';

// Utility imports
import { validateEmail } from '../utils/helpers';

const Contact = () => {
    // Initialize useState to control inputs
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: '',
    });

    // Destructure defaults
    const { name, email, message } = formState;

    // Initialize useState to control error messages
    const [errorMessage, setErrorMessage] = useState('');

    // Handle changes to input fields
    function handleChange(evt) {
        // Email validation
        if (evt.target.name === 'email') {
            const isValid = validateEmail(evt.target.value);
            if (!isValid) {
                setErrorMessage('Please enter a valid e-mail address!');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!evt.target.value.length) {
                setErrorMessage(`${evt.target.name} is required!`);
            } else {
                setErrorMessage('');
            }
        }
        setFormState({ ...formState, [evt.target.name]: evt.target.value });
    }

    // Handle form submission
    function handleSubmit(evt) {
        evt.preventDefault();
        console.log(formState);
    }

    return (
        <main className="grow text-theme-purple px-4">
            <div className="m-4">
                <p className="text-justify">
                    Want to collaborate? Looking for a killer website? Just
                    wanna talk about vikings and runes? Shoot me a message and
                    I'll get back to you ASAP!
                </p>
            </div>
            <div className="m-4 p-6 rounded-bl-2xl rounded-tr-2xl shadow-sm bg-theme-lilac/[.20]">
                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <input
                            type="text"
                            id="nameInput"
                            name="name"
                            placeholder="Name"
                            defaultValue={name}
                            onBlur={handleChange}
                            className="w-full px-3 py-1.5 rounded font-black focus:outline-none"
                        ></input>
                    </div>
                    <div className="mb-6">
                        <input
                            type="email"
                            id="emailInput"
                            name="email"
                            placeholder="E-mail Address"
                            defaultValue={email}
                            onBlur={handleChange}
                            className="w-full px-3 py-1.5 rounded font-black focus:outline-none"
                        />
                    </div>
                    <div className="mb-6">
                        <textarea
                            id="messageInput"
                            name="message"
                            rows="4"
                            placeholder="Your Message"
                            defaultValue={message}
                            onBlur={handleChange}
                            className="w-full px-3 py-1.5 rounded font-black focus:outline-none"
                        />
                    </div>
                    {errorMessage && (
                        <div>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )}
                    <button
                        type="submit"
                        className="w-full px-6 py-2.5 bg-theme-purple text-theme-pink font-black rounded shadow hover:text-theme-orange hover:shadow-lg focus:outline-none transition duration-300 ease-in-out"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </main>
    );
};

export default Contact;
