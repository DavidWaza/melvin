import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

import NewsComponent from "../NewsComponent/NewsComponent";

const fetchNewsData = async () => {
  const response = await axios.get(
    "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b9a63a854718406d8dea9e9284c1143c"
  );
  return response.data;
};

const SliderComponent = () => {
  const { isLoading, data } = useQuery("newsdata", fetchNewsData);
  return (
    <div className="mt-[10rem]">
      <div className="grid lg:grid-cols-3 gap-2">
        {data?.articles.slice(0, 3).map((article: any) => (
          <div key={article.id}>
            {isLoading ? <h2>Loading Information</h2> : ""}
            <NewsComponent
              img={article.urlToImage}
              author={article.author}
              title={article.title}
              description={article.description}
              href={article.url}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default SliderComponent;
