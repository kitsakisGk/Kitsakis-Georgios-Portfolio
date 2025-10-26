import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";

const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const [selectedFilter, setSelectedFilter] = useState('All');

    // Enhanced portfolio projects with tags and categories
    const portfolio = [
        {
            name: "BloodCall",
            subtitle: "Google Solution Challenge - Top 10 Finalist 🏆",
            description: "Android application for blood donation management competing against 4,000+ global teams. Helps solve UN Sustainable Development Goals through technology.",
            url: "https://github.com/BloodCall/BloodCall",
            image: "https://images.unsplash.com/photo-1615461065929-4f8ffed6ca40?w=600&h=400&fit=crop",
            tags: ["Java Android", "Firebase", "Node.js", "JavaScript", "UN SDG"],
            category: "Mobile Development"
        },
        {
            name: "Smartphone Activity Recognition",
            subtitle: "Bachelor Thesis - ML Research Project",
            description: "Machine learning system for classifying physical activities from smartphone sensor data. Implemented multiple ML architectures comparing TensorFlow models with feature engineering techniques.",
            url: "https://github.com/kitsakisGk/Smartphone-Activity-Recognition",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
            tags: ["TensorFlow", "scikit-learn", "Python", "Feature Engineering", "Sensors"],
            category: "Machine Learning"
        },
        {
            name: "FreePass",
            subtitle: "Full-Stack Web Application",
            description: "Unemployment services platform enabling free metro pass applications. Complete full-stack solution with modern architecture and database management.",
            url: "https://github.com/kitsakisGk/FreePass",
            image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
            tags: ["Spring Boot", "PostgreSQL", "JavaScript", "HTML/CSS"],
            category: "Web Development"
        },
        {
            name: "ETL Pipeline Automation",
            subtitle: "Enterprise Data Engineering @ Accenture",
            description: "Designed and maintained high-volume ETL pipelines using Informatica PowerCenter & IICS for enterprise clients. Built complex data transformation workflows, automated data quality checks, and created SSIS packages for multi-source integration.",
            url: "https://www.linkedin.com/in/georgios-kitsakis-gr/",
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
            tags: ["Informatica PowerCenter", "Informatica IICS", "Oracle SQL", "SSIS", "ETL"],
            category: "Data Engineering"
        },
        {
            name: "Real-Time Data Warehouse Integration",
            subtitle: "Data Engineering & BI Solutions",
            description: "Built real-time data warehouse solutions with automated ETL processes. Developed complex SQL stored procedures for data transformation, created incremental load strategies, and implemented data quality frameworks.",
            url: "https://www.linkedin.com/in/georgios-kitsakis-gr/",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
            tags: ["MS SQL Server", "Oracle SQL", "Power BI", "Data Warehousing", "ETL"],
            category: "Data Engineering"
        },
        {
            name: "Internal Tools Development",
            subtitle: "Full-Stack Development @ Threenitas",
            description: "Front-end development using JavaScript/HTML/CSS and Node.js services. Contributed to internal tools, bug fixes, and feature implementations.",
            url: "https://github.com/kitsakisGk",
            image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
            tags: ["JavaScript", "HTML/CSS", "Node.js", "Frontend"],
            category: "Web Development"
        }
    ];

    const categories = ['All', 'Mobile Development', 'Machine Learning', 'Web Development', 'Data Engineering'];

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
    }, []);

    const filteredPortfolio = selectedFilter === 'All'
        ? portfolio
        : portfolio.filter(port => port.category === selectedFilter);

    const renderPortfolio = (portfolioItems) => {
        return (
            <div className="images-container">
                {
                    portfolioItems.map((port, idx) => {
                        return (
                            <div className="image-box" key={idx}>
                                <img
                                src={port.image}
                                className="portfolio-image"
                                alt={port.name}
                                onError={(e) => {
                                    e.target.src = 'https://via.placeholder.com/600x400/123524/00A86B?text=' + port.name.replace(' ', '+');
                                }} />
                                <div className="content">
                                    <p className="title">{port.name}</p>
                                    <p className="subtitle">{port.subtitle}</p>
                                    <p className="description">{port.description}</p>
                                    <div className="tags-container">
                                        {port.tags.map((tag, tagIdx) => (
                                            <span key={tagIdx} className="tag">{tag}</span>
                                        ))}
                                    </div>
                                    <button
                                        className="btn"
                                        onClick={() => window.open(port.url)}
                                    >View Project</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }


    return (
        <>
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Portfolio".split("")}
                        idx={15}
                    />
                </h1>

                {/* Filter Buttons */}
                <div className="filter-container">
                    {categories.map((category, idx) => (
                        <button
                            key={idx}
                            className={`filter-btn ${selectedFilter === category ? 'active' : ''}`}
                            onClick={() => setSelectedFilter(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div>{renderPortfolio(filteredPortfolio)}</div>
                <div className="view-more-section">
                    <button
                        className="view-more-btn"
                        onClick={() => window.open('https://github.com/kitsakisGk', '_blank')}
                    >
                        View More Projects on GitHub
                    </button>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    );
}

export default Portfolio;