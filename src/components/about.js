import React from "react";
import Avatar from "../images/avatar.jpg";

export default function About() {
  return (
    <section id="about">
      <div
        className="aboutDiv"
        style={{
          display: "flex",
          flexDirection: "row",
          paddingTop: "5rem",
          height: "auto",
          alignItems: "center",
        }}
      >
        <img
          style={{
            marginLeft: "10vw",
            marginTop: "5vh",
          }}
          className="avatar aboutAvatar"
          src={Avatar}
          alt="Avatar"
        />
        <div
          style={{
            marginLeft: "5vw",
            marginRight: "5vw",
            textAlign: "left",
          }}
        >
          <h1 style={{ textShadow: "2px 2px #000" }}>Joshua Dalton</h1>
          <p style={{ textShadow: "2px 2px #000" }}>
            For me, my camera is a storytelling tool. I love being able to create compelling media 
            that draws people into the story behind it. Whether that's through the attention to detail 
            featured in a product video or capturing events in a way that makes people feel as though 
            they were there. So much media is consumed online in this day and age, and I pride myself 
            on being able to create visuals that stand out from the crowd.
          </p>
          <p style={{ textShadow: "2px 2px #000" }}>
            Photographer/Videographer based in Auckland, New Zealand. I have professional experience 
            shooting photo and video of products and events for everyone from day to day clients to 
            multinational corporations. I specialise in product videos, portrait shoots and event coverage.
          </p>
        </div>
      </div>
    </section>
  );
}
