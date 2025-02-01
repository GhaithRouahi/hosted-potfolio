import React from 'react';
import './GhaithRouahiProfile.css'; // Import the CSS file

const GhaithRouahiProfile = () => {
    // Data for projects
    const projects = [
        "Deploying Apps using Cloud Native approach",
        "Developping Full stack Films and Series Platform",
        "Full stack Task Management Platform",
        "Deploying Microservices with Docker and Kubernetes",
        "Building CI/CD Pipelines"
    ];

    // Data for skills
    const skills = [
        "React", "Express", "PHP", "SQL DataBases", "Docker: Docker-compose & Docker Swarm", "AWS services", "Azure services", "Terraform", "Jenkins & Github Action for CI/CD", "Linux", "C/C++", "Python", "Symfony"
    ];

    // Data for certifications
    const certifications = [
        "CCNAV7: Introduction to Networks",
        "CCNAV7: Switching, Routing, and Wireless Essentials",
        "Linux Fundamentals",
        "Securing Linux Systems",
        "Computer Operating Systems and Security",
        "DevSecOps - Kubernetes Devops & Security",
        "Docker - SWARM SERVICES STACKS",
        "Jenkins",
        "Kubernetes Administration",
        "Terraform"
    ];

    return (
        <div className="profile-container">
            {/* Header Section */}
                <div className="header card ">
                    <img
                        src="https://scontent.ftun8-1.fna.fbcdn.net/v/t39.30808-1/467185552_3896015070675219_2453153100921821974_n.jpg?stp=dst-jpg_s160x160_tt6&_nc_cat=106&ccb=1-7&_nc_sid=e99d92&_nc_ohc=w_N3O-MPLXUQ7kNvgEo4eUq&_nc_zt=24&_nc_ht=scontent.ftun8-1.fna&_nc_gid=AvWPOABerhL6eBas4AxPbYY&oh=00_AYAwC0lKH6WSmUgZeLWlt8uVs8vBUFYFUbmnzwJLswrpHQ&oe=67A45845"
                        alt="Ghaith Rouahi"
                        className="profile-picture"
                    />
                    <h1>Hi, I'm Ghaith Rouahi</h1>
                    <h2>Network Engineering Student | DevOps & Cloud Enthusiast | Competitive Programming Enthusiast</h2>
                    <p>
                        I am a highly motivated and passionate Network Engineering student at INSAT (National Institute of Applied Sciences and Technology) in Tunisia. My journey in technology began with a deep curiosity for solving complex problems and building scalable systems. I am currently pursuing my degree in Computer Networks Engineering, where I am gaining hands-on experience in networking, cloud computing, and software development.
                    </p>
                    <p>
                        My passion lies in automating infrastructure, developing full-stack applications, and exploring the latest advancements in DevOps. I am constantly learning and challenging myself to stay ahead in the ever-evolving tech landscape. My goal is to leverage my skills and knowledge to create innovative solutions that make a meaningful impact.
                    </p>
                </div>

            {/* Projects Section */}
            <div className="section card ">
                <h3>Projects</h3>
                <ul className="projects-list">
                    {projects.map((project, index) => (
                        <li key={index}>{project}</li>
                    ))}
                </ul>
            </div>

            {/* Skills Section */}
            <div className="section card">
                <h3>Skills</h3>
                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <div className="skill-card" key={index}>
                            {skill}
                        </div>
                    ))}
                </div>
            </div>

            {/* Certifications Section */}
            <div className="section card ">
                <h3>Certifications</h3>
                <ul className="certifications-grid">
                    {certifications.map((certification, index) => (
                        <li key={index}>{certification}</li>
                    ))}
                </ul>
            </div>

            {/* Contact Section */}
            <div className="section ">
                <h3>Contact Me</h3>
                <div className="contact-info">
                    <p>Email: <a href="mailto:gaithrouahi@gmail.com">gaithrouahi@gmail.com</a></p>
                    <p>Phone: +216 93 546 144</p>
                    <p>Location: Tunis, Cite Olympique</p>
                </div>
            </div>
        </div>
    );
};

export default GhaithRouahiProfile;