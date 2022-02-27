// Imports
import React from 'react';

const Contact = () => {
    return (
        <main className="grow text-theme-purple">
            <div className="m-4 px-3">
                <p className="text-justify">
                    Want to collaborate? Looking for a killer website? Just
                    wanna talk about vikings and runes? Shoot me a message below
                    and I'll get back to you ASAP!
                </p>
            </div>
            <div className="m-4 p-6 rounded-bl-2xl rounded-tr-2xl shadow-sm bg-theme-lilac/[.20]">
                <form>
                    <div className="mb-6">
                        <input
                            type="text"
                            id="nameInput"
                            placeholder="Name"
                            className="w-full px-3 py-1.5 rounded font-black focus:outline-none"
                        ></input>
                    </div>
                    <div className="mb-6">
                        <input
                            type="email"
                            id="emailInput"
                            placeholder="E-mail Address"
                            className="w-full px-3 py-1.5 rounded font-black focus:outline-none"
                        />
                    </div>
                    <div className="mb-6">
                        <textarea
                            id="messageInput"
                            rows="4"
                            placeholder="Your Message"
                            className="w-full px-3 py-1.5 rounded font-black focus:outline-none"
                        />
                    </div>
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
