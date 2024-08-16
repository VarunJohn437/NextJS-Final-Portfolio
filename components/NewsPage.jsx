import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import HeaderImage from '../public/assets/projects/project_2_news_app_header.jpg'

const NewsPage = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch('https://api.thenewsapi.com/v1/news/top?api_token=IS1GHuyuJUf2gaUgeBrqXbfChAUxCeXKJ6dYjlzi&locale=us&limit=3');
                const data = await response.json();
                setNews(data.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching news:", error);
                setLoading(false);
            }
        };

        fetchNews();
    }, []);

    if (loading) {
        return <p>Loading news...</p>;
    }

    return (
        <div id="NewsPage" className="w-full mx-auto max-w-[800px] px-2 py-16">
            <Image src={HeaderImage} alt='' className='shadow-gray-400 shadow-md' />
            <ul>
                {news?.map((article, index) => {
                    // Convert the publishedAt date to a readable format
                    const date = new Date(article.published_at);
                    const formattedDate = `${date.toLocaleTimeString()}, ${date.toLocaleDateString()}`;

                    return (
                        <div className='w-auto m-4 shadow-gray-400 shadow-md rounded-lg font-sans p-4 bg-slate-50'>
                            <p className='py-2 text-lg font-bold'>{article.title}</p>
                            <p className='py-2 font-bold'>{article.description}</p>
                            <p ><strong>Source :</strong> {article.source}</p>
                            <p ><strong>Published at:</strong> {formattedDate}</p>
                            <div className='text-right'>
                                <a className='py-2 text-sky-600 underline cursor-pointer font-bold' href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
                            </div> </div>

                    );
                })}
            </ul>
        </div>
    );
}

export default NewsPage;
