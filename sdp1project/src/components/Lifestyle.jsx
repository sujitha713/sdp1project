import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './lifestyle.css';
import TopSection from './TopSection';
import Login from './Login';
import ContactUs from './ContactUs';

const lifestyleArticles = [
  {
    id: 1,
    title: 'Healthy Living in Urban Areas',
    description: 'Tips and tricks for maintaining a healthy lifestyle while living in a bustling city.',
    image: '/house4.png'
  },
  {
    id: 2,
    title: 'Interior Design Trends 2024',
    description: 'Discover the latest trends in interior design to make your home stylish and comfortable.',
    image: '/house5.png'
  },
  {
    id: 3,
    title: 'Sustainable Living',
    description: 'How to adopt a more sustainable lifestyle and reduce your environmental footprint.',
    image: '/house3.png'
  }
];

const Lifestyle = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isContactUsOpen, setIsContactUsOpen] = useState(false);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(`https://newsapi.org/v2/everything?q=real+estate&apiKey=40c2a170e6d2449caea7806f67861c72`);
        setNewsArticles(response.data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="lifestyle-page">
      <TopSection setLoginOpen={setIsLoginOpen} setContactUsOpen={setIsContactUsOpen} />
      
      <section id="lifestyle-content">
        <div className="lifestyle-content">
          <h2>Lifestyle Articles</h2>
          <div className="articles-container">
            {lifestyleArticles.map((article) => (
              <div key={article.id} className="article-card">
                <img src={article.image} alt={article.title} />
                <h3>{article.title}</h3>
                <p>{article.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="news-column">
          <h2>Latest Real Estate News</h2>
          <div className="news-container">
            {newsArticles.map((news, index) => (
              <div key={index} className="news-card">
                <img src={news.urlToImage || '/default-news.jpg'} alt={news.title} />
                <h3><a href={news.url} target="_blank" rel="noopener noreferrer">{news.title}</a></h3>
                <p>{news.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Login isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
      <ContactUs isOpen={isContactUsOpen} onClose={() => setIsContactUsOpen(false)} />
    </div>
  );
};

export default Lifestyle;