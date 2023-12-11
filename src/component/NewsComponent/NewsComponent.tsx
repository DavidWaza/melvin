import React, { FC, useState, useEffect } from "react";
import { Text } from "../Typhography/Typography";
import Image from "next/image";
import Link from "next/link";

interface NewsProps {
  img: string;
  author: string;
  title: string;
  description: string;
  href: string;
}
const NewsComponent: FC<NewsProps> = ({
  img,
  author,
  title,
  description,
  href,
}) => {
  return (
    <>
      <div>
        <div className="border border-slate-100 shadow-sm hover:shadow-none">
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
            <Link href={href}>
              <img src={img} alt="img" />
            </Link>
          </div>
          <div className="py-10 px-3">
            <Text
              variant="small"
              className="uppercase text-center"
              textWeight="bold"
            >
              {title}
            </Text>
          </div>
          <div className="text-center pb-10 px-10">
            <Text variant="small">{description}</Text>
          </div>
          <div className="text-center pb-10 border-y">
            <Text variant="extrasmall" textWeight="bold" className="pt-4">
              {author}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsComponent;
