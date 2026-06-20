import { useEffect, useState } from 'react';
import './TopBar.css';
import logo from '../assets/profile-banner-new.png';

function TopBar() {
    const [isLogoOpen, setIsLogoOpen] = useState(false);
    const [isResumeOpen, setIsResumeOpen] = useState(false);

    useEffect(() => {
        function closeOnEscape(event) {
            if (event.key === 'Escape') {
                setIsLogoOpen(false);
                setIsResumeOpen(false);
            }
        }

        window.addEventListener('keydown', closeOnEscape);
        return () => window.removeEventListener('keydown', closeOnEscape);
    }, []);

    return (
        <>
            <nav className="topbar">
                <div className="topbar-left">
                    <button
                        className="logo-button"
                        type="button"
                        onClick={() => setIsLogoOpen(true)}
                        aria-label="Open Yeswanth Kumar image"
                    >
                        <img
                            src={logo}
                            alt="Yeswanth Kumar logo"
                            className="logo-img"
                        />
                    </button>
                    <span className="logo-name">YESWANTH</span>
                </div>

                <div className="topbar-welcome">
                    <span>Welcome to my portfolio</span>
                    <p>Full-Stack Developer crafting scalable digital experiences</p>
                </div>

                <div className="topbar-end">
                    <ul className="topbar-menu">
                        <li><a href="#about">About</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>

                    <button
                        className="resume-btn"
                        type="button"
                        onClick={() => setIsResumeOpen(true)}
                    >
                        Resume
                    </button>
                </div>
            </nav>

            {isLogoOpen && (
                <div
                    className="logo-modal"
                    role="dialog"
                    aria-modal="true"
                    aria-label="Yeswanth Kumar image"
                    onClick={() => setIsLogoOpen(false)}
                >
                    <div
                        className="logo-modal-frame"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <button
                            className="logo-modal-close"
                            type="button"
                            onClick={() => setIsLogoOpen(false)}
                            aria-label="Close image"
                        >
                            &times;
                        </button>
                        <img src={logo} alt="Yeswanth Kumar developer banner" />
                    </div>
                </div>
            )}

            {isResumeOpen && (
                <div
                    className="resume-modal"
                    role="dialog"
                    aria-modal="true"
                    aria-label="Yeswanth Kumar resume"
                    onClick={() => setIsResumeOpen(false)}
                >
                    <div
                        className="resume-modal-frame"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <div className="resume-modal-actions">
                            <a
                                href="/documents/Yeswanth_Kumar_Resume.pdf"
                                target="_blank"
                                rel="noreferrer"
                                className="resume-open-link"
                            >
                                Open PDF
                            </a>
                            <button
                                className="resume-modal-close"
                                type="button"
                                onClick={() => setIsResumeOpen(false)}
                                aria-label="Close resume"
                            >
                                &times;
                            </button>
                        </div>
                        <iframe
                            src="/documents/Yeswanth_Kumar_Resume.pdf"
                            title="Yeswanth Kumar Resume"
                            className="resume-viewer"
                        />
                    </div>
                </div>
            )}
        </>
    );
}

export default TopBar;
