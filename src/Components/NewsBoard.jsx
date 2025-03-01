import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';

const NewsBoard = ({ category }) => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        let url = `http://localhost:5000/news?category=${category}`;
        
        fetch(url)
            .then(response => response.json())
            .then(data => setArticles(data.articles))
            .catch(error => console.error("Error fetching news:", error));
    }, [category]);

    return (
        <div>
            <br />
            <h2 className='text-center'>
                Latest: <span className="badge bg-danger">
                    {category.charAt(0).toUpperCase() + category.slice(1)} News
                </span>
            </h2>
            {articles.length > 0 ? (
                articles.map((news, index) => (
                    <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
                ))
            ) : (
                <p className="text-center">Loading news...</p>
            )}
        </div>
    );
}

export default NewsBoard;
