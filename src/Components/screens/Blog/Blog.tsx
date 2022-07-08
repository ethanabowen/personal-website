import "./Blog.css";
import { useEffect, useState } from "react";

const username = `ethan.a.bowen`;
const RSSUrl = `https://medium.com/feed/@${username}`;
const RSSConverter = `https://api.rss2json.com/v1/api.json?rss_url=${RSSUrl}`;

const formatBlogDate = (date: string) => {
  var pubDate = new Date(date);
  return pubDate.toLocaleDateString();
};

function MediumPost(params: {
  thumbnail: any;
  link: any;
  title: string;
  author: string;
  pubDate: any;
}) {
  return (
    <div className="post">
      <a href={params.link} className="post--link">
        <img
          className="post--header--image p-3"
          src="https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png"
          alt="Post Pic"
        />
        <div className="post--body m-0">
          <div className="post--title">{params.title}</div>
          <div className="post--footer">
            <p className="post--author m-0">{params.author}</p>
            <p className="post--publish--date m-0">
              {formatBlogDate(params.pubDate)}
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}

export default function Blog() {
  const [mediumData, setMediumData] = useState() as any;

  useEffect(() => {
    const getMediumDataFunc = async () => {
      await getMediumData();
    };

    getMediumDataFunc();
  }, []);

  const getMediumData = async () => {
    try {
      const response = await fetch(RSSConverter);
      const data = await response.json();
      console.log(data);

      setMediumData(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="main--blog">
      <div className="text--title mb-5">Blog</div>
      <div className="flex-container wrap">
        {mediumData &&
          mediumData.items.map((post: any, index: number) => {
            return (
              <>
                <div key={"medium_post_" + index} className="flex-item">
                  <MediumPost
                    thumbnail={post.thumbnail}
                    link={post.link}
                    title={post.title}
                    author={post.author}
                    pubDate={post.pubDate}
                  />
                </div>
                <div key={"medium_post_1" + index} className="flex-item">
                  <MediumPost
                    thumbnail={post.thumbnail}
                    link={post.link}
                    title={post.title}
                    author={post.author}
                    pubDate={post.pubDate}
                  />
                </div>
                <div key={"medium_post_2" + index} className="flex-item">
                  <MediumPost
                    thumbnail={post.thumbnail}
                    link={post.link}
                    title={post.title}
                    author={post.author}
                    pubDate={post.pubDate}
                  />
                </div>
                <div key={"medium_post_3" + index} className="flex-item">
                  <MediumPost
                    thumbnail={post.thumbnail}
                    link={post.link}
                    title={post.title}
                    author={post.author}
                    pubDate={post.pubDate}
                  />
                </div>
              </>
            );
          })}
      </div>
    </div>
  );
}
