import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import Footer from "../Footer";
import "./index.scss";

const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    // Hardcoded portfolio projects from CV
    const portfolio = [
        {
            name: "BloodCall",
            subtitle: "Google Solution Challenge - Top 10",
            description: "Android app for blood donation management with Java, Firebase, and Node.js. Top 10 among 4,000+ teams worldwide.",
            url: "https://github.com/BloodCall/BloodCall",
            image: "https://images.unsplash.com/photo-1615461065929-4f8ffed6ca40?w=600&h=400&fit=crop"
        },
        {
            name: "Activity Recognition",
            subtitle: "Bachelor Thesis Project",
            description: "ML system classifying physical activities from smartphone sensors using TensorFlow and scikit-learn.",
            url: "https://github.com/kitsakisGk",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
        },
        {
            name: "FreePass",
            subtitle: "Full-Stack Web Application",
            description: "Unemployment services platform built with Spring Boot, PostgreSQL, and modern JavaScript.",
            url: "https://github.com/kitsakisGk",
            image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop"
        }
    ];

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
    }, []);

    const renderPortfolio = (portfolio) => {
        return (
            <div className="images-container">
                {
                    portfolio.map((port, idx) => {
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
                <div>{renderPortfolio(portfolio)}</div>
                <div className="view-more-section">
                    <button
                        className="view-more-btn"
                        onClick={() => window.open('https://github.com/kitsakisGk', '_blank')}
                    >
                        View More Projects on GitHub
                    </button>
                </div>
            </div>
            <Footer />
            <Loader type="pacman" />
        </>
    );
}

export default Portfolio;