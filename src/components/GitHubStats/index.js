import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './index.scss';

const GitHubStats = ({ username = 'kitsakisGk' }) => {
  const [repos, setRepos] = useState([]);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        // Fetch user stats
        const userResponse = await fetch(`https://api.github.com/users/${username}`);
        const userData = await userResponse.json();

        // Fetch repositories
        const reposResponse = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`
        );
        const reposData = await reposResponse.json();

        setStats({
          public_repos: userData.public_repos,
          followers: userData.followers,
          following: userData.following,
        });

        setRepos(reposData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching GitHub data:', error);
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, [username]);

  if (loading) {
    return (
      <div className="github-stats-container">
        <div className="loading">Loading GitHub stats...</div>
      </div>
    );
  }

  return (
    <div className="github-stats-container">
      <h2 className="github-title">
        <FontAwesomeIcon icon={faGithub} className="github-icon" />
        GitHub Activity
      </h2>

      {stats && (
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-value">{stats.public_repos}</div>
            <div className="stat-label">Repositories</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">{stats.followers}</div>
            <div className="stat-label">Followers</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">{stats.following}</div>
            <div className="stat-label">Following</div>
          </div>
        </div>
      )}

      <div className="repos-section">
        <h3>Recent Repositories</h3>
        <div className="repos-grid">
          {repos.slice(0, 6).map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="repo-card"
            >
              <div className="repo-name">{repo.name}</div>
              <div className="repo-description">
                {repo.description || 'No description available'}
              </div>
              <div className="repo-footer">
                {repo.language && (
                  <span className="repo-language">
                    <span className="language-dot"></span>
                    {repo.language}
                  </span>
                )}
                {repo.stargazers_count > 0 && (
                  <span className="repo-stars">
                    ⭐ {repo.stargazers_count}
                  </span>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="github-link-section">
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="view-github-btn"
        >
          View Full GitHub Profile
        </a>
      </div>
    </div>
  );
};

export default GitHubStats;
