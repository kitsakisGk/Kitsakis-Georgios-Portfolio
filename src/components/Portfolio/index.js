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
            name: "Algorithms for Physical Activity Measurements",
            subtitle: "Bachelor Thesis - ML Research Project",
            description: "Machine learning system for classifying physical activities from smartphone sensor data. Implemented multiple ML architectures comparing TensorFlow models with feature engineering techniques.",
            url: "https://github.com/kitsakisGk/Smartphone-Activity-Recognition",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
            tags: ["TensorFlow", "scikit-learn", "Python", "Feature Engineering", "Sensors"],
            category: "Machine Learning"
        },
        {
            name: "Practical Data Science",
            subtitle: "End-to-End Data Science Pipeline",
            description: "Comprehensive data science project implementing complete ML pipeline from data collection to model deployment. Includes exploratory data analysis, feature engineering, model training, and evaluation.",
            url: "https://github.com/kitsakisGk/Practical-Data-Science",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
            tags: ["Python", "Pandas", "Scikit-learn", "Jupyter", "EDA"],
            category: "Machine Learning"
        },
        {
            name: "Product Classification",
            subtitle: "Machine Learning Classification System",
            description: "ML-based product classification system using natural language processing and supervised learning. Automated categorization of products with high accuracy using advanced feature extraction techniques.",
            url: "https://github.com/kitsakisGk/Product-Classification",
            image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
            tags: ["Python", "NLP", "Classification", "Scikit-learn", "Machine Learning"],
            category: "Machine Learning"
        },
        {
            name: "Text Analytics",
            subtitle: "NLP & Sentiment Analysis",
            description: "Natural language processing project for text analytics and sentiment analysis. Implements various NLP techniques including tokenization, text preprocessing, and sentiment classification.",
            url: "https://github.com/kitsakisGk/Text-Analytics",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
            tags: ["Python", "NLP", "NLTK", "Sentiment Analysis", "Text Mining"],
            category: "Machine Learning"
        },
        {
            name: "FreePass",
            subtitle: "Full-Stack Web Application",
            description: "Unemployment services platform enabling free metro pass applications. Complete full-stack solution with Spring Boot backend, PostgreSQL database, and responsive frontend.",
            url: "https://github.com/kitsakisGk/FreePass",
            image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
            tags: ["Spring Boot", "PostgreSQL", "JavaScript", "HTML/CSS"],
            category: "Web Development"
        }
    ];

    const categories = ['All', 'Mobile Development', 'Machine Learning', 'Web Development'];

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