import React from "react";

import Card from "./UI/Card";

const articles = [
  {
    name: "The palmwine Quad",
    link: "https://www.jetronticket.com/blogs/show-dem-camp-the-palmwine-quad:-album-review-f7d9730e-ef39-4089-83e3-5e74bf46a376",
    image: require("../images/sdc.webp"),
    description:
      "Having lowkey one of the biggest discographies in the Nigerian music industry it is only right that SDC receives its flowers.",
    type: "published",
  },
  {
    name: "Love, Lust, Hustle",
    link: "https://www.jetronticket.com/blogs/music-watch-love-lust-and-hustle",
    image: require("../images/music-watch_pa4niy.webp"),
    description:
      "Somehow the feeling that we are not the only ones going through whatever we are going through comforts us.",
    type: "published",
  },
  {
    name: "kayode's effect",
    link: "https://localmanwt.blogspot.com/2022/07/kayodes-effect.html",
    image: require("../images/kayeffect.jpeg"),
    description: "",
    type: "",
  },
  {
    name: "falling off",
    link: "https://localmanwt.blogspot.com/2021/12/falling-off.html",
    image: require("../images/fallingoff.jpeg"),
    description: "",
    type: "",
  },
  {
    name: "falling off",
    link: "https://localmanwt.blogspot.com/2021/12/falling-off.html",
    image: require("../images/fallingoff.jpeg"),
    description: "",
    type: "",
  },
  {
    name: "incomplete",
    link: "https://localmanwt.blogspot.com/2021/12/incomplete.html",
    image: require("../images/incomplete.jpeg"),
    description: "",
    type: "",
  },
  {
    name: "something and nothing",
    link: "https://localmanwt.blogspot.com/2021/11/somethings-and-nothing.html",
    image: require("../images/sumnnun.jpeg"),
    description: "",
    type: "",
  },
  {
    name: "ebelebe!(the chant)",
    link: "https://localmanwt.blogspot.com/2021/09/ebelebe-chant.html",
    image: require("../images/ebelebe.jpeg"),
    description: "",
    type: "",
  },
  {
    name: "bArE",
    link: "https://localmanwt.blogspot.com/2022/03/bare.html",
    image: require("../images/bare.jpeg"),
    description: "",
    type: "",
  },

  //
  //
];

const MainArticle = () => {
  return (
    <div>
      <h1 className="text-center font-bold text-3xl mb-4">Recent Articles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {articles.map((article) => (
          <a href={article.link} target="_blank" rel="noreferrer">
            <Card
              heading={article.name}
              img={article.image}
              summary={article.description}
            />
          </a>
        ))}
      </div>
    </div>
  );};

export default MainArticle;
