import  React from 'react';
import Card from './UI/Card';

const articles = [
  {
    name: "The palmwine Quad",
    link: "https://www.jetronticket.com/blogs/show-dem-camp-the-palmwine-quad:-album-review-f7d9730e-ef39-4089-83e3-5e74bf46a376",
    image: require("../images/sdc.webp"),
    description:
      "Having lowkey one of the biggest discographies in the Nigerian music industry it is only right that SDC receives its flowers.",
  },
  {
    name: "Love, Lust, Hustle",
    link: "https://www.jetronticket.com/blogs/music-watch-love-lust-and-hustle",
    image: require("../images/music-watch_pa4niy.webp"),
    description:
      "Somehow the feeling that we are not the only ones going through whatever we are going through comforts us.",
  },
];
const Articles = () =>{
return (
  <div>
    <h1 className="text-center font-bold text-4xl mb-4">Recent Articles</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {articles.map((article) => (
        <a href={article.link} target="_blank">
          <Card heading={article.name} img={article.image} summary={article.description} />
        </a>
      ))}
    </div>
  </div>
);
}

export default Articles;