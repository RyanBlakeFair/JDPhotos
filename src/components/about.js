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
            Everyone loves stories. For me, my camera is a tool that I can use
            to breathe new life into the stories we experience. Whether that is
            through my creative work and my videos, or something as simple as
            capturing moments in time to look back on and remind us of the
            emotions we felt. Memories fade, but images are forever.
          </p>
          <p style={{ textShadow: "2px 2px #000" }}>
            I have professional experience photographing events, as well as paid
            product photography for international businesses.
          </p>
        </div>
      </div>
    </section>
  );
}
