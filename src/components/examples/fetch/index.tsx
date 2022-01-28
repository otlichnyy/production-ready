/* eslint-disable @typescript-eslint/no-unsafe-argument */
import React, { useEffect, useState } from "react";

const API_URL = "https://api.jsonbin.io/b/61cabebfc277c467cb3770c0/2";

interface ArticleResponse {
  domain: string;
  topics: string[];
  data: ArticleData[];
}
interface ArticleData {
  title: title;
  paragraph: paragraph;
}

interface title {
  text: string;
  topics: string[];
}

interface paragraph {
  text: string;
  topics: string[];
  queries: string[];
}

const initialState: ArticleResponse = {
  domain: "domain",
  topics: [],
  data: [
    {
      title: {
        text: "some title",
        topics: ["topic 1"],
      },
      paragraph: {
        text: "",
        topics: ["topic 1"],
        queries: ["query 1"],
      },
    },
  ],
};

export const FetchExample = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState<ArticleResponse>({ ...initialState });

  useEffect(() => {
    fetch(API_URL)
      .then((res) => {
        return res.json();
      })
      .then(
        (result) => {
          setData(result);
          setIsLoaded(true);
        },
        (error) => {
          setIsLoaded(true);
          console.error(error);
          setError(error);
        },
      );
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <h1 data-testid="main-domain">{data.domain}</h1>
        <ul data-id="topics">
          {data.topics.map((topic, index) => (
            <li key={index}>{topic}</li>
          ))}
        </ul>
        <h2>
          {data.data.map((article, index) => (
            <div key={index}>
              <h3>{article.title.text}</h3>
              <p>{article.paragraph.text}</p>
              <ul>
                {article.paragraph.topics.map((topic, index) => (
                  <li key={index}>{topic}</li>
                ))}
              </ul>
            </div>
          ))}
        </h2>
      </div>
    );
  }
};
