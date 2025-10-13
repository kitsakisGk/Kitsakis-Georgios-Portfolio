import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";

const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    // Hardcoded portfolio projects from CV
    const portfolio = [
        {
            name: "BloodCall - Google Solution Challenge",
            description: "Top 10 Finalist among 4,000+ global teams. Android application for blood donation management built with Java Android, Firebase, Node.js, and JavaScript.",
            url: "https://github.com/BloodCall/BloodCall",
            image: "https://raw.githubusercontent.com/BloodCall/BloodCall/master/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png"
        },
        {
            name: "Smartphone Activity Recognition",
            description: "Machine learning system for classifying physical activities from smartphone sensor data. Applied TensorFlow, scikit-learn, and feature engineering techniques. Bachelor thesis project.",
            url: "https://github.com/kitsakisGk",
            image: "https://raw.githubusercontent.com/tensorflow/tensorflow/master/tensorflow/lite/g3doc/images/mobile.png"
        },
        {
            name: "FreePass - Web Application",
            description: "Full-stack application for unemployment services, enabling free metro pass applications. Built with Java Spring Boot, PostgreSQL, JavaScript, HTML/CSS.",
            url: "https://github.com/kitsakisGk",
            image: "https://spring.io/img/projects/spring-boot.svg"
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
                                alt="portfolio" />
                                <div className="content">
                                    <p className="title">{port.name}</p>
                                    <h4 className="description">{port.description}</h4>
                                    <button
                                        className="btn"
                                        onClick={() => window.open(port.url)}
                                    >View</button>
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
            </div>
            <Loader type="pacman" />
        </>
    );
}

export default Portfolio;