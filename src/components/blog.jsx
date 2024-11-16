import React from 'react';

// Import images directly using the specified import method
import BlogImage1 from '../images/Rectangle 1.png';
import BlogImage2 from '../images/Rectangle 2.png';
import BlogImage3 from '../images/Rectangle 3.png';
import BlogImage4 from '../images/Rectangle 4.png';
import BlogImage5 from '../images/Rectangle 5.png';

const ArticleCard = ({ image, date, title, link, isTall }) => {
  return (
    <div
      className={`bg-blue-900 text-white p-4 rounded-lg shadow-md ${
        isTall ? 'md:row-span-2' : ''
      }`}
    >
      {/* Top part of the card is the image */}
      <div className={`overflow-hidden rounded-t-lg ${isTall ? 'h-96' : 'h-48'}`}>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Bottom part of the card with text */}
      <div className="mt-4">
        <p className="text-sm opacity-75">{date}</p>
        <h2 className="text-lg font-semibold mt-2">{title}</h2>
        <a href={link} className="text-blue-400 mt-4 inline-block">
          Read Full Article
        </a>
      </div>
    </div>
  );
};

const Blog = () => {
  const articles = [
    {
      image: BlogImage1, // Rectangle 1.png
      date: 'Sep 26, 2021',
      title: 'GPT-3 and OpenAI is the future. Let us explore how it is?',
      link: '/full-article-1',
      isTall: true,
    },
    {
      image: BlogImage2, // Rectangle 2.png
      date: 'Sep 26, 2021',
      title: 'GPT-3 and OpenAI is the future. Let us explore how it is?',
      link: '/full-article-2',
    },
    {
      image: BlogImage3, // Rectangle 3.png
      date: 'Sep 26, 2021',
      title: 'GPT-3 and OpenAI is the future. Let us explore how it is?',
      link: '/full-article-3',
    },
    {
      image: BlogImage4, // Rectangle 4.png
      date: 'Sep 26, 2021',
      title: 'GPT-3 and OpenAI is the future. Let us explore how it is?',
      link: '/full-article-4',
    },
    {
      image: BlogImage5, // Rectangle 5.png
      date: 'Sep 26, 2021',
      title: 'GPT-3 and OpenAI is the future. Let us explore how it is?',
      link: '/full-article-5',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-6 bg-gray-900">
      {articles.map((article, index) => (
        <ArticleCard
          key={index}
          image={article.image} // Correct image used here
          date={article.date}
          title={article.title}
          link={article.link}
          isTall={article.isTall}
        />
      ))}
    </div>
  );
};

export default Blog;
