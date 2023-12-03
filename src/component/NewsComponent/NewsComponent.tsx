import React, { FC, useState, useEffect } from "react";
import { Text } from "../Typhography/Typography";
import Image from "next/image";
import { useQuery } from "react-query";
import axios from "axios";
interface Article {
  title: string;
  author: string;
}

interface NewsProps {
  articles: Article[];
}

const fetchNewsData = async () => {
  const response = await axios.get(
    "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b9a63a854718406d8dea9e9284c1143c"
  );
  return response.data;
};

const NewsComponent: FC<NewsProps> = () => {
  const { isLoading, data } = useQuery("newsdata", fetchNewsData);
  if (isLoading) {
    return <h2>loading data</h2>;
  }
  return (
    <>
      {data?.articles.map((article: any) => (
        <div key={article.id}>
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
            <div>
              {article.urlToImage && (
                <img src={article.urlToImage} alt="img" className="h-20" />
              )}
            </div>
            <div>
              <Text
                variant="small"
                className="text-white uppercase text-center"
                textWeight="bold"
              >
                {article.author}
              </Text>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default NewsComponent;
