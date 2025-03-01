import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';

const NewsBoard = ({ category }) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const API_KEY = import.meta.env.VITE_API_KEY;

    useEffect(() => {
        const fetchNews = async () => {
            if (!API_KEY) {
                console.error("API Key is missing! Set VITE_API_KEY in your .env file.");
                setLoading(false);
                return;
            }

            try {
                setLoading(true);
                let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`;
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();
                setArticles(data.articles || []);
            } catch (error) {
                console.error("Error fetching news:", error);
                setArticles([]); // Prevents map() error
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, [category, API_KEY]);

    return (
        <div>
            <br />
            <h2 className='text-center'>
                Latest: <span className="badge bg-danger">
                    {category.charAt(0).toUpperCase() + category.slice(1)} News
                </span>
            </h2>

            {loading ? (
                <p className="text-center">Loading news...</p>
            ) : articles.length > 0 ? (
                articles.map((news, index) => (
                    <NewsItem
                        key={index}
                        title={news.title}
                        description={news.description}
                        src={news.urlToImage}
                        url={news.url}
                    />
                ))
            ) : (
                <p className="text-center">No news available.</p>
            )}
        </div>
    );
}

export default NewsBoard;
