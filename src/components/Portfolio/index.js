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
            name: "Credit Risk Databricks Pipeline",
            subtitle: "M.Sc. Research Project - End-to-End ML Pipeline",
            description: "Production-ready credit risk assessment pipeline built on Databricks. Features automated data ingestion, feature engineering, model training with MLflow tracking, and explainable AI with SHAP. Demonstrates enterprise-grade ML workflows with Delta Lake and Spark.",
            url: "https://github.com/kitsakisGk/Credit_Risk_Databricks_Pipeline",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
            tags: ["Databricks", "PySpark", "MLflow", "Delta Lake", "SHAP", "Credit Risk"],
            category: "Machine Learning"
        },
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
            name: "AutoML-Forge",
            subtitle: "M.Sc. Research Project - Automated ML Pipeline",
            description: "Open-source platform for automatic ETL pipeline creation and ML model training. Features intelligent data profiling, AutoML training with model comparison, bilingual interface (EN/DE), and production-ready API generation. Built with FastAPI and Streamlit for rapid ML workflow acceleration.",
            url: "https://github.com/kitsakisGk/AutoML-Forge",
            image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&h=400&fit=crop",
            tags: ["Python", "FastAPI", "Streamlit", "Docker", "SHAP", "AutoML"],
            category: "Machine Learning"
        },
        {
            name: "Advanced Data Science & NLP Projects",
            subtitle: "M.Sc. Coursework - ML & Text Analytics",
            description: "Collection of Master's level projects including end-to-end ML pipelines, product classification with NLP, sentiment analysis, and text mining. Covers practical data science workflows from data collection to deployment with advanced feature engineering and model evaluation.",
            url: "https://github.com/kitsakisGk/Masters_AUEB",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
            tags: ["Python", "NLP", "Scikit-learn", "Pandas", "Text Mining", "EDA"],
            category: "Machine Learning"
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