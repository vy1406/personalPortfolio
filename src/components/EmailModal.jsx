import React, { useState } from "react";
import { DATA } from "../data";

export default function EmailModal({ isOpen, toggleModal }) {

    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const handleCloseModal = () => {
        toggleModal(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const mailtoLink = `mailto:${DATA.contact.email}?subject=${encodeURIComponent(
          subject
        )}&body=${encodeURIComponent(message)}`;
        window.location.href = mailtoLink;
        toggleModal(false);
    };

    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-screen-md dark:bg-gray-800">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
                            Say Hi
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="relative z-0 w-full mb-5 group">
                                <input
                                    type="email"
                                    name="floating_email"
                                    id="floating_email"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    disabled                                    
                                    value={DATA.contact.email}
                                />
                                <label
                                    htmlFor="floating_email"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                </label>
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <input
                                    type="text"
                                    name="floating_text"
                                    id="floating_text"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    required
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                />
                                <label
                                    htmlFor="floating_text"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Subject
                                </label>
                            </div>
                            <textarea
                                id="message"
                                rows="4"
                                className="dark:bg-gray-800 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Leave a message..."
                                required
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                            <div className="flex justify-end gap-2">
                                <button
                                    type="button"
                                    onClick={handleCloseModal}
                                    className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-gray-600 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300"
                                >
                                    Send Email
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}
