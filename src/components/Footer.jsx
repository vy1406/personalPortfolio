import React from "react";
import linkedIn from "../assets/linkedin-icon.svg";
import githubCat from "../assets/github-octocat.svg";
import gmail from "../assets/google-gmail.svg";
import { DATA } from "../data";

export default function Footer({ toggleModal }) {

    return (
        <>
            <footer className="bg-gray-900 text-white py-4 mt-8">
                <div className="container mx-auto flex justify-center gap-8">
                    <a
                        href={DATA.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white"
                    >
                        <img src={githubCat} alt="GitHub" height={24} width={24} />
                    </a>

                    <a
                        href={DATA.links.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white"
                    >
                        <img src={linkedIn} alt="LinkedIn" height={24} width={24} />
                    </a>

                    <button
                        onClick={() => toggleModal(true)}
                        className="text-gray-400 hover:text-white"
                    >
                        <img src={gmail} alt="Gmail" height={24} width={24} />
                    </button>
                </div>
            </footer>
        </>
    );
}
