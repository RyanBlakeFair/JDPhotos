import React, { useState, useEffect } from "react";
import "../App.css";
import Aos from "aos";
import "aos/dist/aos.css";

let Parser = require("rss-parser");
let parser = new Parser();

async function getVideos(links, setLinks) {
  let feed = await parser.parseURL(
    "https://cors-anywhere.herokuapp.com/https://www.youtube.com/feeds/videos.xml?channel_id=UC-Ny-B0xPm4pn2HOXcqq6qg"
  );
  const linkArr = feed.items
    .splice(0, 3)
    .map((item, index) => (
      <iframe
        data-aos="fade-up"
        key={index}
        title="video"
        className="videos"
        src={item.link.replace("watch?v=", "embed/")}
        allowFullScreen
      ></iframe>
    ));
  setLinks(linkArr);
}

export default function Videos() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [links, setLinks] = useState([]);

  useEffect((links) => {
    getVideos(links, setLinks);
  }, []);

  return (
    <section id="videography">
      <img
        className="titleImg"
        src="https://fontmeme.com/permalink/200730/44ae1bc3fc3181dbc145d8e7bd9744e7.png"
        alt="calligraphy-fonts"
        border="0"
        style={{ width: "20%" }}
      />
      <p style={{ textShadow: "2px 2px #000" }}>
        Check out some of my latest projects!
      </p>
      <div
        className="iframes"
        style={{ display: "flex", flexDirection: "row" }}
      >
        {links}
      </div>
    </section>
  );
}
