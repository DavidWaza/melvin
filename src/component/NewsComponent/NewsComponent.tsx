import React, { FC } from "react";
import { Text } from "../Typhography/Typography";


interface Article {
    source: {
      id: string;
      name: string;
    };
    author: string;
    title: string;
  }
  
  interface NewsProps {
    articles: Article[];
  }

const NewsComponent: FC<NewsProps> = ({ articles }) => {
    console.log(articles)
  return (
    <div className="h-screen border border-slate-100">
      <div className="bg-blue-800 p-5">
        <Text
          variant="small"
          className="text-white uppercase text-center"
          textWeight="bold"
        >
          Trending News
        </Text>
      </div>
      <div className="bg-white">
        {articles?.map((item, index) => (
          <div key={index}>
            <Text variant="small">{item.title}</Text>
            <Text variant="small">Author:{item.author}</Text>

          </div>
        ))}
      </div>
      <div>
        <button className="bg-base-100 py-3 px-10 text-white font-lexend">
          Read more
        </button>
      </div>
    </div>
  );
};

export default NewsComponent;

export async function getServerSideProps() {
  const response = await fetch(
    "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b9a63a854718406d8dea9e9284c1143c"
  );
  const data = await response.json();

  return {
    props: {
      articles:data.articles,
    },
  };
}
