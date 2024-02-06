import React from "react";

const ContactMe = () => {
    return (
    <div
        className="flex flex-col justify-center items-center gap-5"
        id="contact-me"
    >
        <h1 className="text-center font-bold text-3xl mb-4" id="contact-heading">
            Contact Me
        </h1>
        <a href="mailto:babalolakayode44@gmail.com" id="email">
            <p className="text-lg text-green-800 text-center underline mb-4">
                babalolakayode44@gmail.com
            </p>
        </a>
        <a
            href="https://calendly.com/babalolakayode44"
            target="_blank"
            rel="noreferrer"
            id="meeting"
        >
            <button className="h-10 w-30 p-2 rounded-lg bg-green-800 text-white hover:scale-110 duration-500">
                Book a Meeting
            </button>
        </a>
        <p id="follow">Follow me on:</p>
        <div className="flex justify-center items-center gap-10 text-3xl" id="platforms">
            <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/kayode-dev"
            >
                <i className="fa-brands fa-github"></i>
            </a>
            <a
                target="_blank"
                rel="noreferrer"
                href="https://instagram.com/kayode.docx"
            >
                <i className="fa-brands fa-instagram"></i>
            </a>
            <a
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/kayode_txt"
            >
                <i className="fa-brands fa-x-twitter"></i>
            </a>

            <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/kayode-babalola-a522a6226/"
            >
                <i className="fa-brands fa-linkedin"></i>
            </a>
        </div>
    </div>);
}

export default ContactMe;