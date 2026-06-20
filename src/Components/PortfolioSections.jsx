import './PortfolioSections.css';

const skillGroups = [
    {
        title: 'Languages',
        skills: ['Java', 'Python', 'SQL'],
    },
    {
        title: 'Frontend',
        skills: ['React.js', 'HTML5', 'CSS3', 'JavaScript'],
    },
    {
        title: 'Backend',
        skills: ['Spring Boot', 'REST APIs', 'Spring Security', 'Spring Data JPA'],
    },
    {
        title: 'Databases & Tools',
        skills: ['MySQL', 'MongoDB', 'Git', 'GitHub', 'Postman', 'Maven', 'VS Code'],
    },
    {
        title: 'Core Knowledge',
        skills: ['OOP', 'DBMS', 'Computer Networks', 'Data Structures'],
    },
];

const projects = [
    {
        title: 'AI Resume Generator',
        stack: 'React.js • Spring Boot • MongoDB • OpenAI API',
        description:
            'An AI-powered application that generates ATS-optimized resumes and personalized cover letters from resumes and job descriptions.',
        highlights: [
            'Reduced manual resume tailoring time by about 70%',
            'Built 8+ REST API endpoints',
            'Secured user sessions with JWT authentication',
        ],
    },
    {
        title: 'Bike Rental System',
        stack: 'React.js • Spring Boot • MongoDB',
        description:
            'A full-stack rental platform with registration, bike listings, bookings, and an admin dashboard for inventory management.',
        highlights: [
            'Managed 50+ mock inventory records',
            'Added User and Admin role-based access',
            'Achieved sub-100ms query response time in testing',
        ],
    },
    {
        title: 'Book Finder Application',
        stack: 'HTML • CSS • JavaScript • Google Books API',
        description:
            'A responsive single-page application that finds books in real time and displays ratings, authors, descriptions, and covers.',
        highlights: [
            'Built with asynchronous API requests',
            'Rendered search results in under 300ms on average',
            'Created dynamic, responsive result cards',
        ],
    },
];

function PortfolioSections() {
    return (
        <main className="portfolio-content">
            <section className="portfolio-section" id="about">
                <p className="section-label">01. About</p>
                <h2>Building useful products from interface to API.</h2>

                <div className="about-grid">
                    <div className="about-copy">
                        <p>
                            I&apos;m Yeswanth Kumar, a Computer Science and Engineering
                            student at Presidency University, Bengaluru, and a full-stack
                            developer focused on Java, Spring Boot, React, and scalable
                            REST APIs.
                        </p>
                        <p>
                            Through app-development and Python internships, I&apos;ve
                            worked on responsive interfaces, debugging, QA, automation,
                            and modular software design. I enjoy converting real problems
                            into secure, user-friendly applications.
                        </p>
                    </div>

                    <ul className="about-facts">
                        <li>
                            B.Tech in Computer Science & Engineering, 2023–2027
                        </li>
                        <li>
                            Completed App Development and Python Development internships
                        </li>
                        <li>
                            Solved 100+ DSA problems across core data structures
                        </li>
                    </ul>
                </div>
            </section>

            <section className="portfolio-section" id="skills">
                <p className="section-label">02. Skills</p>
                <h2>Technologies I use to build full-stack applications.</h2>

                <div className="skills-grid">
                    {skillGroups.map((group) => (
                        <div className="skill-group" key={group.title}>
                            <h3>{group.title}</h3>
                            <ul>
                                {group.skills.map((skill) => (
                                    <li key={skill}>{skill}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            <section className="portfolio-section" id="projects">
                <p className="section-label">03. Projects</p>
                <h2>Selected work from my full-stack journey.</h2>

                <div className="projects-grid">
                    {projects.map((project) => (
                        <article className="project-entry" key={project.title}>
                            <h3>{project.title}</h3>
                            <p className="project-stack">{project.stack}</p>
                            <p>{project.description}</p>
                            <ul>
                                {project.highlights.map((highlight) => (
                                    <li key={highlight}>{highlight}</li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </section>

            <section className="contact-section" id="contact">
                <p className="section-label">04. Contact</p>
                <h2>Let&apos;s build something meaningful.</h2>
                <p>
                    I&apos;m open to Software Engineer Intern and Graduate Engineer
                    opportunities.
                </p>
                <ul className="contact-list">
                    <li>
                        <a href="tel:+919390125963">Call: +91 9390125963</a>
                    </li>
                    <li>
                        <a href="mailto:bitrtraguntayeswanth2005@gmail.com">
                            Send Email
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.linkedin.com/in/bitragunta-yeswanth-9127b62a7/?skipRedirect=true"
                            target="_blank"
                            rel="noreferrer"
                        >
                            LinkedIn
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://github.com/yesh-2342"
                            target="_blank"
                            rel="noreferrer"
                        >
                            GitHub
                        </a>
                    </li>
                </ul>
            </section>
        </main>
    );
}

export default PortfolioSections;
